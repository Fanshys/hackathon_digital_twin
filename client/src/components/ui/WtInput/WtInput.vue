<template>
  <label class="input">
    <span v-if="label" class="input__label">
      <slot name="label">{{ label }}</slot>
    </span>

    <span
      :class="{ 'input__inner-wrap--trigger': !!error }"
      class="input__inner-wrap"
    >
      <input
        v-if="!textarea"
        :value="value"
        class="input__inner"
        :type="type"
        :placeholder="placeholder"
        @blur="$emit('blur')"
        @input="$emit('input', $event.target.value)"
      >

      <textarea
        v-else
        class="input__inner input__textarea"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
      <transition name="input__icon">
        <svg
          v-if="error"
          v-svg
          class="input__icon"
          symbol="warning"
          size="20 20"
        />
      </transition>

      <transition name="input__message">
        <span
          v-if="error || description"
          :class="{ 'input__message--error': !!error }"
          class="input__message"
        >
          {{ error || description }}
        </span>
      </transition>
    </span>
  </label>
</template>

<script>
export default {
  name: 'WtInput',

  props: {
    value: {
      type: String,
      default: '',
    },

    type: {
      type: String,
      default: 'text',
    },

    label: {
      type: String,
      default: null,
    },

    placeholder: {
      type: String,
      default: '',
    },

    error: {
      type: String,
      default: null,
    },

    description: {
      type: String,
      default: null,
    },

    textarea: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style src="./WtInput.scss" lang="scss" scoped></style>
