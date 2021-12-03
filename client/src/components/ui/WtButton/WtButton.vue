<template>
  <component
    :is="type"
    :class="{ 'button--wide': wide }"
    :href="href || to"
    :to="to"
    class="button"
    @click="$emit('click')"
  >
    <FadeTransition>
      <div v-if="loading" class="button__loader">
        <WtPointLoader />
      </div>
    </FadeTransition>
    <slot>
      button
    </slot>
  </component>
</template>

<script>
import FadeTransition from '../../transitions/FadeTransition/FadeTransition';
import WtPointLoader from '../WtPointLoader/WtPointLoader.vue';

export default {
  name: 'WtButton',
  components: {
    FadeTransition,
    WtPointLoader,
  },
  props: {
    href: {
      type: String,
      default: null,
      require: false,
    },
    to: {
      type: String,
      default: null,
      require: false,
    },
    loading: {
      type: Boolean,
      default: false,
      require: false,
    },
    wide: {
      type: Boolean,
      default: false,
      require: false,
    },
  },
  computed: {
    type() {
      if (this.to) {
        return 'router-link';
      }

      if (this.href) {
        return 'a';
      }

      return 'button';
    },
  },
};
</script>

<style src="./WtButton.scss" lang="scss"></style>
