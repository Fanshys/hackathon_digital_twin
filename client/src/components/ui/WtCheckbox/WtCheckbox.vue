<template>
  <div :class="{'checkbox--disabled': disabled}" class="checkbox">
    <label :class="{ 'checkbox-label--toggle': toggle }" class="checkbox-label">
      <input
        :disabled="disabled"
        :checked="value"
        class="checkbox__input"
        type="checkbox"
        @change="$emit('input', $event.target.checked)"
      >

      <div class="checkbox__check">
        <svg
          v-if="!toggle"
          v-svg
          class="checkbox__icon"
          symbol="check"
          size="12 12"
        />
      </div>
      <div v-if="$scopedSlots.default" class="checkbox__content">
        <slot />
      </div>
    </label>

    <div class="checkbox__error">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },

    toggle: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    error: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" src="./WtCheckbox.scss" scoped></style>
