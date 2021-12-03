<template>
  <Component :is="type" v-bind="$attrs" class="fade-transition" name="fade-transition">
    <slot />
  </Component>
</template>

<script>
export default {
  name: 'FadeTransition',

  props: {
    group: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    type() { return this.group ? 'transition-group' : 'transition'; },
  },
};
</script>

<style lang="scss" src="./FadeTransition.scss" scoped></style>
