export default function formatDate(dateString) {
  const date = new Date(dateString);

  return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
}
