<template>
  <div class="card">
    <div v-if="$slots.header" :class="[headerClass]" class="card__header">
      <slot name="header" />
    </div>

    <div :class="[bodyClass]" class="card__body">
      <slot />
    </div>

    <div v-if="$slots.footer" :class="[footerClass]" class="card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headerClass: {
      type: String,
      default: '',
    },
    bodyClass: {
      type: String,
      default: '',
    },
    footerClass: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" src="./WtCard.scss" scoped></style>
