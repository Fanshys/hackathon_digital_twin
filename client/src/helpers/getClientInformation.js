export default function getClientInformation() {
  const platform = navigator.platform.toLowerCase();
  const iosPlatforms = ['iphone', 'ipad', 'ipod', 'ipod touch'];

  let os = null;

  if (platform.includes('mac')) os = 'MacOS';
  if (iosPlatforms.includes(platform)) os = 'iOS';
  if (platform.includes('win')) os = 'Windows';
  if (/android/.test(navigator.userAgent.toLowerCase())) os = 'Android';
  if (/linux/.test(platform)) os = 'Linux';

  return { os };
}
