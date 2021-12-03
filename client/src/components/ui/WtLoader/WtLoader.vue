<template>
  <div
    :class="{
      'stack-loader--fixed': fixed,
      'stack-loader--background': background,
    }"
    class="stack-loader"
  >
    <div class="stack-loader__inner">
      <div class="stack-loader__item stack-loader__item--first" />
      <div class="stack-loader__item stack-loader__item--second" />
      <div class="stack-loader__item stack-loader__item--third" />
    </div>

    <p v-if="$hasSlot()" class="stack-loader__text">
      <slot>{{ text }}</slot>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    fixed: {
      type: Boolean,
      default: false,
    },

    background: {
      type: Boolean,
      default: false,
    },

    text: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" src="./WtLoader.scss" scoped></style>
