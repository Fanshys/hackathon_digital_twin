export default {
  setStats(state, payload) {
    state.stats = payload;
  },
  setStatsIsLoading(state, payload) {
    state.statsIsLoading = payload;
  },
  setActiveStat(state, payload) {
    state.activeStat = payload;
  },
  setSearch(state, payload) {
    state.search = payload;
  }
}
