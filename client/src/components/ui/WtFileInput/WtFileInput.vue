<template>
  <div
    :class="{ 'file-input--disabled': disabled }"
    class="file-input"
  >
    <span v-if="label" class="file-input__label">
      <slot name="label">{{ label }}</slot>
    </span>

    <div class="file-input__inner">
      <input
        ref="fileInput"
        class="file-input__native-input"
        :multiple="multiple"
        :accept="accept"
        :disabled="disabled"
        type="file"
        @change.prevent="onInput"
      >
      <svg v-if="!$hasSlot()" v-svg symbol="bold-plus" size="31 31" />

      <div v-else class="file-input__text">
        <slot />
      </div>
    </div>
    <div class="file-input__info">
      <slot name="content" :files="files" :deleteFile="deleteFile" />
    </div>
  </div>
</template>

<script>
import FileListValidator from '../../../helpers/validation/FileListValidator';
import FileListMutator from '../../../helpers/FileListMutator';

export default {
  name: 'WtFileInput',

  props: {
    /**
     * Prop for v-model
     */
    value: {
      type: Array,
      default: null,
    },

    multiple: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    /**
     * Array of allowed extensions or mime types.
     * All file types are allowed by default.
     *
     * @see http://htmlbook.ru/html/value/mime - all mime types
     * @example ['audio/mpeg3', 'image/*', '.zip']
     */
    accept: {
      type: Array,
      default: null,
    },

    /**
     * Maximum file size in megabytes.
     * There are no restrictions by default.
     */
    maxSize: {
      type: Number,
      default: null,
    },

    /**
     * Maximum file count.
     * There are no restrictions by default.
     */
    maxFiles: {
      type: Number,
      default: null,
    },

    label: {
      type: String,
      default: null,
    },
  },

  data: () => ({ files: FileListMutator.getFileList([]) }),

  watch: {
    /**
     * Watcher to sync local files with input FileList
     */
    files() {
      this.$refs.fileInput.files = FileListMutator.getFileList(this.files);
    },
  },

  methods: {
    onInput(e) {
      const fileList = [...e.target.files];
      const errors = this.isValid(fileList);

      this.files = this.multiple ?
        FileListMutator.mergeFileLists(this.files, fileList) :
        FileListMutator.getFileList(fileList);

      if (errors.length === 0) this.$emit('input', this.files);
      else this.$emit('validate-error', errors, this.files);
    },

    /**
     * Validate list of files
     * @param {File[]} fileList
     * @return {string[]}
     */
    isValid(fileList) {
      const validator = new FileListValidator(fileList, {
        maxSize: this.maxSize,
        maxFiles: this.maxFiles,
      });

      if (this.maxSize) validator.fileSizeValidate();
      if (this.maxFiles) validator.fileCountValidate();

      return validator.errors;
    },

    /**
     * Deleting a file by index
     * @param index
     */
    deleteFile(index) {
      this.files = FileListMutator.deleteFileByIndex(this.files, index);
      this.$emit('delete-file', this.files);
    },

  },
};
</script>

<style src="./WtFileInput.scss" lang="scss" scoped></style>
