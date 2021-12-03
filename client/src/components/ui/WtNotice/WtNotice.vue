<template>
  <div class="notice">
    <div :class="[`notice__icon-wrap--${color}`]" class="notice__icon-wrap">
      <svg
        v-svg
        symbol="error"
        size="42 37"
        class="notice__icon"
      />
    </div>

    <div class="notice__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'blue',
    },
  },
};
</script>

<style lang="scss" src="./WtNotice.scss" scoped></style>
