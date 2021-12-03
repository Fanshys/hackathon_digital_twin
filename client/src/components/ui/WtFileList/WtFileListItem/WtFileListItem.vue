<template>
  <div class="file-item">
    <div class="file-item__type">
      <svg
        v-svg
        symbol="doc"
        size="16 22"
        class="file-item__icon"
      />
    </div>
    <div class="file-item__info">
      <div class="file-item__name">
        {{ name }}
      </div>
      <div class="file-item__size">
        {{ size | fileSizeFormat }}
      </div>
    </div>
    <button
      class="file-item__delete"
      @click="$emit('delete-click')"
    >
      <svg
        v-svg
        symbol="close"
        size="12"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: 'WtFileListItem',
  props: {
    /**
     * File name
     */
    name: {
      type: String,
      default: null,
    },

    /**
     * File size at bytes
     */
    size: {
      type: Number,
      default: null,
    },
  },
};
</script>

<style src="./WtFileListItem.scss" scoped lang="scss"></style>
