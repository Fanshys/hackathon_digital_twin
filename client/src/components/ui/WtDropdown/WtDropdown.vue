<template>
  <div
    ref="dropdown"
    v-out-click="closeDropdownOnClickOutside"
    class="dropdown"
  >
    <div class="dropdown__button" @click="toggleDropdown">
      <slot :open="open" />
    </div>

    <transition name="drop">
      <div
        v-if="open"
        :class="{ 'dropdown__content--right': right }"
        class="dropdown__content"
      >
        <slot name="content" :close="closeDropdown" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    right: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      open: false,
    };
  },

  methods: {
    toggleDropdown() {
      this.open = !this.open;
    },

    closeDropdown() {
      this.open = false;
    },

    closeDropdownOnClickOutside(e) {
      if (e.target.closest('.dropdown') !== this.$refs.dropdown) {
        this.open = false;
      }
    },
  },
};
</script>

<style lang="scss" src="./WtDropdown.scss" scoped></style>
