/**
 * This helper checks for a component slot by slot name
 *
 * @param {string} name - slot name
 * @return {boolean}
 */
function hasSlot(name = 'default') {
  return !!this.$slots[name] || !!this.$scopedSlots[name];
}

export default {
  install(Vue) {
    Vue.prototype.$hasSlot = hasSlot;
  },
};
