import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  actions,
  getters,
  mutations,
  state: () => ({
    stats: [],
    activeStat: null,
    statsIsLoading: false,
    search: ''
  })
}
