export default {
  setIsAuth(state, payload) {
    state.isAuth = payload;
  },

  setUserInfo(state, payload) {
    state.userInfo = payload;
  },

  setLoginIsLoading(state, payload) {
    state.loginIsLoading = payload;
  }
}
