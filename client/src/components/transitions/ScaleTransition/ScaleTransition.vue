<template>
  <Component :is="tag" class="scale-transition" name="scale-transition">
    <slot />
  </Component>
</template>

<script>
export default {
  name: 'ScaleTransition',

  props: {
    group: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    tag() { return this.group ? 'TransitionGroup' : 'Transition'; },
  },
};
</script>

<style lang="scss" src="./ScaleTransition.scss" scoped></style>
