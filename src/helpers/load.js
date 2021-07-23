/**
 * LoadJS is a tiny async loader for modern browsers (789 bytes).
 * https://github.com/muicss/loadjs
 *
 * import load from '@/helpers/load';
 * await load('https://cdn.jsdelivr.net/npm/tinymce@4/tinymce.min.js', 'tinymce');
 */
import loadjs from 'loadjs';

export default (urls, key, options = {}) => {
  const config = {
    returnPromise: true,
    ...options,
  };
  if (!loadjs.isDefined(key)) {
    return loadjs(urls, key, config);
  }

  return loadjs.ready(key, config);
};
