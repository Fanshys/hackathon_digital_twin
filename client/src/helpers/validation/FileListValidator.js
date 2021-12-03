import FileSizeConverter from '../FileSizeConverter';

/**
 * Class for validate list of files
 */
export default class FileListValidator {
  /**
   * Returns an error about the maximum file size
   * @return {string}
   */
  get maxSizeError() { return `Файл привысил максимальный размер (${this.maxSize} МБ)`; }

  /**
   * Returns an error about the maximum file count
   * @return {string}
   */
  get maxCountError() { return `Максимальное количество файлов ${this.maxFiles}`; }

  /**
   * @param { File[] } fileList
   * @param { Object } params
   * @param { number } params.maxSize
   * @param { number } params.maxFiles
   */
  constructor(fileList, params) {
    this.fileList = fileList;
    this.maxSize = params.maxSize ?? null;
    this.maxFiles = params.maxFiles ?? null;
    this.errors = [];
  }

  /**
   * Validates files by size
   * @return {boolean}
   */
  fileSizeValidate() {
    if (!this.maxSize) return true;
    this.fileList.forEach((file, index) => {
      if (FileSizeConverter.bToMb(file.size) > this.maxSize) {
        this.errors.push({
          message: this.maxSizeError, file, index, type: 'maxSize',
        });
      }
    });

    return !(this.errors.length > 0);
  }

  /**
   * Validates files by count
   * @return {boolean}
   */
  fileCountValidate() {
    if (this.fileList.length > this.maxFiles) {
      this.errors.push({ message: this.maxCountError, type: 'maxCount' });
      return false;
    }
    return true;
  }
}
