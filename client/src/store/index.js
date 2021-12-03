import Vue from 'vue'
import Vuex from 'vuex'

import stats from './stats/';
import auth from './auth/';

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    stats,
    auth
  }
})
