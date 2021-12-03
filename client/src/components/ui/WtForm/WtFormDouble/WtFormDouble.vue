<template>
  <div class="form-double">
    <div v-if="label" class="form-double__label">
      {{ label }}
    </div>
    <div class="form-double__grid">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'WtFormDouble',

  props: {
    label: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped lang="scss" src="./WtFormDouble.scss"></style>
