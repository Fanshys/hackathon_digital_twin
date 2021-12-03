<template>
  <li class="list-item" :class="[`list-item--${color}`]">
    <slot />
  </li>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'black',
    },
  },
};
</script>

<style lang="scss" src="./WtListItem.scss" scoped></style>
