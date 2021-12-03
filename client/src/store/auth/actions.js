import axios from "axios";

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
      } else {
        commit('setIsAuth', false);
      }
    } catch (error) {
      commit('setIsAuth', false);
    }
  }
}
