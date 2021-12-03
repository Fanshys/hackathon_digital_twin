/**
 * Functions for handling routs.
 */
const authChecker = (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.getItem('isAuth')) {
      next({ path: '/auth' });
    } else {
      next();
    }
  } else {
    next();
  }
};

export default authChecker;
