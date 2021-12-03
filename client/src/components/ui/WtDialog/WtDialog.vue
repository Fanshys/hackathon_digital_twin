<template>
  <WtCard class="dialog">
    <div class="dialog__top">
      <button type="button" class="dialog__close" @click="$emit('close')">
        <svg v-svg symbol="close-thin" size="25 25" />
      </button>

      <h4 v-if="title" class="dialog__title">
        {{ title }}
      </h4>
    </div>

    <slot />

    <template v-if="disableActions" #footer>
      <WtButton class="dialog__button" @click="$emit('confirm')">
        Да
      </WtButton>
      <WtButton class="dialog__button" @click="$emit('close')">
        Отмена
      </WtButton>
      <slot name="footer" />
    </template>
    <template #header>
      <slot name="header" />
    </template>
  </WtCard>
</template>

<script>
import WtCard from '../WtCard/WtCard';
import WtButton from '../WtButton/WtButton';

export default {
  name: 'WtDialog',
  components: { WtButton, WtCard },
  props: {
    title: {
      type: String,
      default: '',
    },

    disableActions: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss" src="./WtDialog.scss"></style>
