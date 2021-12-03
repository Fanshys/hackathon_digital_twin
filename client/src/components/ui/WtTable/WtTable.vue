<template>
  <table class="table">
    <thead v-if="$hasSlot('head')" class="table__head">
      <slot name="head" />
    </thead>
    <slot />
  </table>
</template>

<script>
export default {
  name: 'WtTable',
};
</script>

<style scoped lang="scss" src="./WtTable.scss"></style>
