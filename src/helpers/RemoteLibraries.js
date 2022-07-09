/*
jsd.compc.cc
jsdelivr.stevie.top

cdn.jsdelivr.net
fastly.jsdelivr.net

gcore.jsdelivr.net

test1.jsdelivr.net
testingcf.jsdelivr.net
*/
export const load = (src) => new Promise((resolve, reject) => {
  if (document.querySelector(`script[src="${src}"]`)) return resolve();
  const s = document.createElement('script');
  src = src.replace(/cdn.jsdelivr.net/g, 'jsdelivr.stevie.top');
  s.src = src;
  s.type = 'text/javascript';
  s.crossOrigin = 'anonymous';
  s.async = true;
  s.onload = resolve;
  s.onabort = reject;
  document.head.appendChild(s);
});

/**
 * https://github.com/soldair/node-qrcode
 * QRCodeToDataURL('I am a pony!').then((url) => {
 *    console.log(url)
 * })
 */
export const QRCodeToDataURL = async (...args) => {
  await load('https://cdn.jsdelivr.net/npm/qrcode@1/build/qrcode.js');
  return window.QRCode.toDataURL(...args);
};
export const QRCodeToString = async (...args) => {
  await load('https://cdn.jsdelivr.net/npm/qrcode@1/build/qrcode.js');
  return window.QRCode.toString(...args);
};
export const QRCodeToCanvas = async (...args) => {
  await load('https://cdn.jsdelivr.net/npm/qrcode@1/build/qrcode.js');
  return window.QRCode.toCanvas(...args);
};

/**
 * https://github.com/niklasvh/html2canvas
 * html2canvas(document.body).then((canvas) => {
 *     document.body.appendChild(canvas);
 * })
 * @param {HTMLElement} element
 * @param {array} options
 */
export const html2canvas = async (element, options) => {
  await load('https://cdn.jsdelivr.net/npm/html2canvas@1/dist/html2canvas.min.js');
  // await load('https://cdn.jsdelivr.net/npm/npm/blueimp-canvas-to-blob/js/canvas-to-blob.min.js');
  const {html2canvas} = window;

  const canvas = await html2canvas(element, {
    useCORS: true,
    allowTaint: true,
    logging: false,
    ...options,
  });

  canvas.toBlob(() => {}, 'image/png', 1);

  return canvas.toDataURL( 'image/png', 1);
};

/**
 * https://github.com/zenorocha/clipboard.js
 * clipboard(el).then((e) => {
 *     console.log('e')
 * })
 */
export const clipboard = async (...args) => {
  await load('https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js');
  return new window.ClipboardJS(...args);
};
