<template>
  <div
    :class="{ 'message--center': center, 'message--fixed': fixed }"
    class="message"
  >
    <svg
      v-svg
      :symbol="icon"
      size="42 37"
      class="message__icon"
    />
    <div class="message__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    center: {
      type: Boolean,
      default: false,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: 'error',
    },
  },
};
</script>

<style lang="scss" src="./WtMessage.scss" scoped></style>
