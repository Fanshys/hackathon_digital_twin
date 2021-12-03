import axios from "axios";
import router from "../../router";

export default {
  async login({commit}, {login, password}) {
    try {
      const {data} = await axios.post('http://localhost:3000/api/auth/login/', {
        login: login,
        password: password
      });

      if (data.status) {
        commit('setUserInfo', data.body);
        commit('setIsAuth', true);
        localStorage.setItem('user', JSON.stringify({
          userInfo: data.body,
          isAuth: true
        }));
        router.push('/home');
      } else {
        commit('setIsAuth', false);
      }
    } catch (error) {
      commit('setIsAuth', false);
    }
  },

  async logout({commit}) {
    commit('setIsAuth', false);
    commit('setUserInfo', {});

    localStorage.removeItem('user');
    router.push('/');
  }
}
