<template>
  <button
    :class="{
      'burger--opened': isOpen
    }"
    class="burger"
    @click="onClick"
  >
    <div class="burger__inner" />
    <slot />
  </button>
</template>

<script>
export default {
  name: 'WtBurger',

  model: {
    event: 'click',
  },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return { isOpen: this.value };
  },

  watch: {
    value(currentValue) {
      // console.log('watching function');
      this.isOpen = currentValue;
    },
  },

  methods: {
    onClick() {
      this.isOpen = !this.isOpen;
      this.$emit('click', this.isOpen);
    },
  },
};
</script>

<style scoped lang="scss" src="./WtBurger.scss"></style>
