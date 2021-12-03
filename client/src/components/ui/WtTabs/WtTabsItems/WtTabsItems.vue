<template>
  <div class="tabs-items">
    <slot :active="active" />
  </div>
</template>

<script>
export default {
  model: {
    prop: 'active',
    event: 'tab-change',
  },

  props: {
    active: {
      type: [String, Number],
    },
  },
};
</script>

<style lang="scss" src="./WtTabsItems.scss"></style>
