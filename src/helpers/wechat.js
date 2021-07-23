/* eslint-disable */
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
