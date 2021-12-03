/**
 * Class for converting file sizes
 */
export default class FileSizeConverter {
  /**
   * Converts bytes to kilobytes
   *
   * @param {number} bytes
   * @return {number}
   */
  static bToKb(bytes) {
    return bytes / 1024;
  }

  /**
   * Converts bytes to megabytes
   *
   * @param {number} bytes
   * @return {number}
   */
  static bToMb(bytes) {
    return FileSizeConverter.bToKb(bytes) / 1024;
  }
}
