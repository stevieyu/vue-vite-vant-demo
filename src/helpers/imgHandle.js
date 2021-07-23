/**
 * https://github.com/blueimp/JavaScript-Load-Image
 * toData_url: (window.URL || window.webkitURL).createObjectURL(blob)
 */
import load from '@/helpers/load';

// const loadImage = require('blueimp-load-image/js/load-image')
// require('blueimp-load-image/js/load-image-scale')
// require('blueimp-canvas-to-blob/js/canvas-to-blob.min')

export default async (file, options = {
  maxWidth: 1000,
  maxHeight: 1000,
  crop: false,
}) => {
  await load([
    'https://oss-shenzhen.taimeizmx.com/npm/blueimp-load-image/js/load-image.all.min.js',
    'https://oss-shenzhen.taimeizmx.com/npm/blueimp-canvas-to-blob/js/canvas-to-blob.min.js',
  ], 'load-image');
  const loadImage = window.loadImage;

  if (!file.type.includes('image') || file.type.includes('gif')) return file;
  options.canvas = true;

  return new Promise((resolve) => {
    loadImage(file, (img) => img.toBlob((blob) => {
      blob.name = file.name;
      blob.lastModified = file.lastModified;
      blob.lastModifiedDate = file.lastModifiedDate;
      resolve(blob);
    }, file.type || 'image/png', 0.8), options);
  });
};

export const blobToFile = (blob, name = '', type = '') => {
  name = name || blob.name;
  type = type || blob.type;

  return new window.File([blob], name, {type});
};

export const createObjectURL = (object) => (window.URL || window.webkitURL).createObjectURL(object);
