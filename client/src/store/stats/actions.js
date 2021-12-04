import axios from "axios";
import rootUrl from "../rootUrl";

export default {
  async getStats({commit}, payload) {
    commit('setStatsIsLoading', true);

    const { data } = await axios.post(`${rootUrl}api/stats/`, {userInfo: payload});
    commit('setStats', data.body);
    commit('setStatsIsLoading', false);
  },

  async getStatById({commit, state}, payload) {
    commit('setActiveStat', state.stats.find(item => item.content.id === payload));
  }
}
