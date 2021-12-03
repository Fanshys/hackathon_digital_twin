<template>
  <div v-show="isActive">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      default: null,
    },
  },
  data() {
    return {
      isActive: false, // Устанавливается в WtTabs
      index: null, // Устанавливается в WtTabs
    };
  },
};
</script>

<style lang="scss" src="./WtTabItem.scss"></style>
