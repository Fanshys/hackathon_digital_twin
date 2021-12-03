<template>
  <div class="file-list">
    <WtFileListItem
      v-for="(file, index) in files"
      :key="index"
      :name="file.name"
      :size="file.size"
      class="file-list__item"
      @delete-click="$emit('delete-click', index)"
    />
  </div>
</template>

<script>
// TODO: добавить анимацию появления
import WtFileListItem from './WtFileListItem/WtFileListItem.vue';

export default {
  name: 'WtFileList',
  components: { WtFileListItem },

  props: {
    /**
     * @type {FileList}
     */
    files: {
      type: FileList,
      default: () => new FileList(),
    },
  },
};
</script>

<style src="./WtFileList.scss" lang="scss" scoped></style>
