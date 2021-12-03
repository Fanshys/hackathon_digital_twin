import errorTypes from './errorTypes';

/**
 * проверка на dirty для того, чтобы ошибку не показывало сразу
 * при рендере компонента, а только после начала ввода
 *
 * @function $validationError
 *
 * @param {Object} vProp // object of vuelidate field
 * @example this.$v.email
 *
 * @param {String} errorType // type of requested error
 * @example email, name, phone, login, pass, checkbox, file
 */

export default {
  install(Vue) {
    Vue.prototype.$validationError = (vProp, errorType) => {
      let error = '';

      if (vProp.$dirty) {
        Object.keys(errorTypes[errorType] || errorTypes.default).some((key) => {
          if (key in vProp && (!vProp[key])) {
            error = errorTypes[errorType][key];
          } else if (vProp.$error) {
            error = errorTypes.default.$error;
          }

          return !!error;
        });
      }

      return error;
    };
  },
};
