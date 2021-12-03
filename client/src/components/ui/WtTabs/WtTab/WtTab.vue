<template>
  <button
    :class="{ 'tab--active': isActive }"
    class="tab"
    @click="$emit('tab-change', { id, index })"
  >
    <slot />
  </button>
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

<style lang="scss" src="./WtTab.scss" scoped></style>
