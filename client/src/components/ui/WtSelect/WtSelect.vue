<template>
  <div class="select">
    <button class="select__button" :class="{'select__button--selected': activeOption.value}" @click="clickHandler">
      {{ activeOption.name || title }}

      <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.219167 0.437896C0.564174 -0.0652398 1.19346 -0.146814 1.62472 0.255694L6 4.33929L10.3753 0.255694C10.8065 -0.146814 11.4358 -0.0652398 11.7808 0.437896C12.1258 0.941032 12.0559 1.6752 11.6247 2.07771L6.62469 6.74435C6.25947 7.08522 5.74053 7.08522 5.37531 6.74435L0.375339 2.07771C-0.0559198 1.6752 -0.125841 0.941032 0.219167 0.437896Z" fill="#464646"/>
      </svg>
    </button>

    <div class="select__content" :class="{'select__content--visible': open}">
      <ul class="select__options" ref="list">
        <li
          v-for="option of options"
          :key="option.value"
          class="select__option"
          :class="{'select__option--active': activeOption.value === option.value}"
        >
          <button class="select__option-button" @click="optionClickHandler(option)">
            {{option.name}}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      activeOption: {}
    }
  },

  props: {
    /**
     * {
     *  value: 1,
     *  name: 'Собака'
     * }
     */
    options: {
      type: Array,
      default: () => []
    },
    /**
     * value of selected option
    */
    preselectOption: {
      type: [String, Number],
      default: null
    },
    title: {
      type: String,
      default: null
    }
  },

  mounted() {
    if (this.preselectOption) {
      this.activeOption = this.options.find(option => option.value === this.preselectOption);
    }
  },

  methods: {
    clickHandler() {
      if (!this.open) {
        this.$refs.list.querySelector('li button').focus();
      }
      this.open = !this.open;
    },
    optionClickHandler(option) {
      this.activeOption = option;
      this.open = false;
    }
  },
}
</script>

<style lang="scss" src="./WtSelect.scss" scoped></style>
