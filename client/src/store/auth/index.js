import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const defaultState = JSON.parse(localStorage.getItem('user'));
console.log(defaultState);
export default {
  actions,
  getters,
  mutations,
  state: () => (defaultState || {
    isAuth: false,
    userInfo: {}
  })
}
