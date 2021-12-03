import axios from "axios";

export default {
  async getStats({commit}, payload) {
    const { data } = await axios.post('http://localhost:3000/api/stats/', {userInfo: payload});
    console.log(data);
    commit('setStats', data.body);
  }
}
