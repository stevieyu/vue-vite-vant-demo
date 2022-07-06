/*
jsd.compc.cc
cdn.jsdelivr.net
fastly.jsdelivr.net
gcore.jsdelivr.net
*/
export const load = (src) => new Promise((resolve) => {
    if(document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement('script');
    // src = src.replace(/cdn.jsdelivr.net/g, 'gcore.jsdelivr.net')
    s.src = src;
    s.onload = resolve
    document.head.appendChild(s);
});

/**
 * https://github.com/soldair/node-qrcode
 * QRCodeToDataURL('I am a pony!').then((url) => {
 *    console.log(url)
 * })
 */
export const QRCodeToDataURL = async (...args) => {
    await load('https://cdn.jsdelivr.net/npm/qrcode@1.5.0/build/qrcode.js')
    return window.QRCode.toDataURL(...args)
}
export const QRCodeToString = async (...args) => {
    await load('https://cdn.jsdelivr.net/npm/qrcode@1.5.0/build/qrcode.js')
    return window.QRCode.toString(...args)
}
export const QRCodeToCanvas = async (...args) => {
    await load('https://cdn.jsdelivr.net/npm/qrcode@1.5.0/build/qrcode.js')
    return window.QRCode.toCanvas(...args)
}

/**
 * https://github.com/niklasvh/html2canvas
 * html2canvas(document.body).then((canvas) => {
 *     document.body.appendChild(canvas);
 * })
 */
export const html2canvas = async(...args) => {
    await load('https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js')
    return window.html2canvas(...args)
}

/**
 * https://github.com/zenorocha/clipboard.js
 * clipboard(el).then((e) => {
 *     console.log('e')
 * })
 */
export const clipboard = async(...args) => {
    await load('https://cdn.jsdelivr.net/npm/clipboard@2.0.11/dist/clipboard.min.js')
    return new Promise((resolve, reject) => {
        const clipboard = new window.ClipboardJS('.btn');

        clipboard.on('success', (e) => {
            e.clearSelection();
            clipboard.destroy();
            resolve(e)
        });

        clipboard.on('error', (e) => {
            clipboard.destroy();
            reject(e)
        });
    })
}

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
      const iframeCallback = function () {
        setTimeout(() => {
          iframe.removeEventListener('load', iframeCallback)
          document.body.removeChild(iframe)
        }, 0)
      }
      iframe.addEventListener('load', iframeCallback)
      document.body.appendChild(iframe)
    }
  }


globalThis.$t = {
    QRCodeToDataURL,
    QRCodeToString,
    QRCodeToCanvas,
    html2canvas,
    clipboard
}
