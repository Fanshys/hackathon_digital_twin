<template>
  <ul class="list">
    <slot>
      <WtListItem v-for="(item, key) in items" :key="key" :color="item.color">
        {{ item.text }}
      </WtListItem>
    </slot>
  </ul>
</template>

<script>
import WtListItem from './WtListItem/WtListItem.vue';

export default {
  components: {
    WtListItem,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" src="./WtList.scss" scoped></style>
