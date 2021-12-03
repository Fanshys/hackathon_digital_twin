<template>
  <component
    :is="type"
    :href="link || false"
    :class="['link', classList]"
    v-bind="{...$attrs}"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'WtLink',

  props: {
    link: {
      type: String,
      default: null,
    },

    gray: {
      type: Boolean,
      default: false,
    },

    red: {
      type: Boolean,
      default: false,
    },

    regular: {
      type: Boolean,
      default: false,
    },

    /**
     * @type 'small' | 'normal'
     */
    size: {
      type: String,
      default: 'small',
    },
  },

  computed: {
    type() {
      return this.link ? 'a' : 'button';
    },

    classList() {
      return {
        'link--gray': this.gray,
        'link--red': this.red,
        'link--regular': this.regular,
        [`link--size-${this.size}`]: true,
      };
    },
  },
};
</script>

<style scoped lang="scss" src="./WtLink.scss"></style>
