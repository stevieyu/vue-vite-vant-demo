/* eslint-disable */
// https://res.wx.qq.com/open/js/jweixin-1.6.0.js

export const wxConfig = async (url = '') => {
  if (process.server) return;
  if (!window.UA.isWechat) return;
  const wx = window.wx;
  if (typeof wx === 'undefined') return;

  const {origin} = window.location;

  url = url || window.location.href.replace(window.location.hash, '');
  if (!url.includes('http')) {
    url = `${origin}/${url}`;
  }

  const config = await $tm('WxMiniAction', 'wxConfig', {url});

  wx.error((res) => {
    Error(res.errMsg);
    if (res.errMsg.includes('signature')) {
      // window.location.reload();
    }
  });

  config.debug = false;
  return wx.config(config);
};

// custom 自定义分享按钮类型
export const onMenuShare = (
    title = '',
    desc = '',
    imgUrl = null,
    link = null,
    type = null,
    dataUrl = null,
) => new Promise((resolve, reject) => {
  if (typeof wx === 'undefined') return null;

  const {origin} = window.location;
  link = link || window.location.href;

  if (!imgUrl.includes('http')) imgUrl = origin + imgUrl;
  if (!link.includes('http')) link = origin + link;

  const myId = $nuxt.$store.state.userSettings.userId;
  if (myId) {
    if (link.includes('parentId')) {
      link = link.replace(/parentId=\d+/, `parentId=${myId}`);
    } else {
      link += `${link.includes('?') ? '&' : '?'}parentId=${myId}`;
    }
  }

  const data = {
    title,
    desc,
    type,
    dataUrl,
    link,
    imgUrl,
    success: resolve,
    cancel: reject,
  };

  wx.ready(() => {
    wx.updateAppMessageShareData(data);
    wx.updateTimelineShareData(data);
  });
});

export const setTitle = (title, img) => {
    if (title === undefined || window.document.title === title) {
      return
    }
    document.title = title
    var mobile = navigator.userAgent.toLowerCase()
    if (/iphone|ipad|ipod/.test(mobile)) {
      const iframe = document.createElement('iframe')
      iframe.style.display = 'none'
      // 替换成站标favicon路径或者任意存在的较小的图片即可，支付宝小程序引用默认空白的base64图片会有安全警告
      const _img = /alipay/.test(mobile) ? img : (img || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
      _img && iframe.setAttribute('src', _img)
      const iframeCallback = () => {
        setTimeout(() => {
          iframe.removeEventListener('load', iframeCallback)
          document.body.removeChild(iframe)
        }, 0)
      }
      iframe.addEventListener('load', iframeCallback)
      document.body.appendChild(iframe)
    }
  }

/*  禁用字体调整 */
export const stopChangeFontSzie = () => {
    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
        handleFontSize();
    } else {
        if (document.addEventListener) {
            document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
        } else if (document.attachEvent) {
            document.attachEvent("WeixinJSBridgeReady", handleFontSize);
            document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
        }
    }
    function handleFontSize() {
        // 设置网页字体为默认大小
        WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize': 0 });
        // 重写设置网页字体大小的事件
        WeixinJSBridge.on('menu:setfont', () => {
            WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize': 0 });
        });
    }
}
