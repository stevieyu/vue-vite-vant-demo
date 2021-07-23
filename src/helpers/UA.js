const detect = (pattern) => pattern.test((window.navigator && navigator.userAgent) || '');

const applet = '__wxjs_environment';

export const isIE = navigator.appName === 'Microsoft Internet Explorer' || detect(/\bTrident\b/);
export const isMobile = detect(/(iphone|ipod|((?:android)?.*?mobile)|blackberry|nokia)/i);
export const isSafari= detect(/webkit\W(?!.*chrome).*safari\W/i);
export const isAndroid= detect(/android/i);
export const isIOS=detect(/(ipad|iphone|ipod)/i);
export const isWechat = window.WeixinJSBridge || detect(/micromessenger/i);
export const isWechatApplet = detect(/miniProgram/i) || window[applet] === 'miniprogram';

export default {
  isIE,
  isMobile,
  isSafari,
  isAndroid,
  isIOS,
  isWechat,
  isWechatApplet,
};
