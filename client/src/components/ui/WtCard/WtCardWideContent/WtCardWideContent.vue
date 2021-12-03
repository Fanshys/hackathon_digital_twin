<template>
  <div :class="classModifiers" class="card-wide-content">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'WtCardWideContent',

  props: {
    noTopOffset: {
      type: Boolean,
      default: false,
    },

    noBottomOffset: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classModifiers() {
      return {
        'card-wide-content--no-top': this.noTopOffset,
        'card-wide-content--no-bottom': this.noBottomOffset,
      };
    },
  },
};
</script>

<style scoped lang="scss" src="./WtCardWideContent.scss"></style>
