export default async (element, options = {}) => {
  const urls = ['https://cdn.jsdelivr.net/npm/html2canvas/dist/html2canvas.min.js'];
  if (!Object.hasOwnProperty.call(HTMLCanvasElement, 'toBlob')) {
    urls.push('https://oss-shenzhen.taimeizmx.com/npm/blueimp-canvas-to-blob/js/canvas-to-blob.min.js');
  }
  await require('~/helpers/load').default(urls, 'html2canvas');
  const html2canvas = window.html2canvas;

  const canvas = await html2canvas(element, {
    useCORS: true,
    logging: false,
    ...options,
  });
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png', 1));
  return (window.URL || window.webkitURL).createObjectURL(blob);
};
