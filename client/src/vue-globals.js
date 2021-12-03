import Vue from 'vue';
import VTooltip from 'v-tooltip';
import Vuelidate from 'vuelidate';
import * as ModalDialogs from 'vue-modal-dialogs';
import Fragment from 'vue-fragment';
import formatDate from '@/filters/formatDate';
import hasSlot from './helpers/hasSlot';
import validationErrors from './helpers/validation/validationError';
import fileSizeFormat from './filters/fileSizeFormat';

// Plugins
Vue.use(VTooltip);
Vue.use(Vuelidate);
Vue.use(ModalDialogs);
Vue.use(Fragment.Plugin);

// Directives
Vue.directive('out-click', {
  inserted(el, { value }) {
    document.body.addEventListener('click', value);
  },

  unbind(el, { value }) {
    document.body.removeEventListener('click', value);
  },
});

// User helpers
Vue.use(hasSlot);
Vue.use(validationErrors);

// Filters
Vue.filter('fileSizeFormat', fileSizeFormat);
Vue.filter('formatDate', formatDate);
