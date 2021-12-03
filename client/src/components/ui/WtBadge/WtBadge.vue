<template>
  <component
    :is="button ? 'button' : 'div'"
    :class="[`badge--${color}`]"
    class="badge"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'green',
    },
    button: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" src="./WtBadge.scss" scope></style>
