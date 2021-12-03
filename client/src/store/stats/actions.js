import axios from "axios";

export default {
  async getStats({commit}, payload) {
    const { data } = await axios.post('http://localhost:3000/api/stats/', {userInfo: payload});
    commit('setStats', data.body);
  }
}
