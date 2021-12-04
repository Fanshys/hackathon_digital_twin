import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const defaultState = JSON.parse(localStorage.getItem('user'));

export default {
  actions,
  getters,
  mutations,
  state: () => (defaultState || {
    isAuth: false,
    userInfo: {},
    loginIsLoading: false
  })
}
