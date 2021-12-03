/**
 * A filter to use a friendly file size string
 *
 * @param {number} bytes
 * @return {string}
 */
export default function fileSizeFormat(bytes) {
  if (bytes === 0) return '0 Byte';
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));

  return `${Number(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`;
}
