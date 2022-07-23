import config from './config';
// import throttlePromise from './utils/throttlePromise';

let query = null;

export const setQuery = (paramsQuery) => {
  query = paramsQuery;
};

export default (path, params = null) => {
  let url = config.origin.replace(/\/$/, '');
  url = path.includes('http') ? path : url + path;

  if (!query) query = initQuery;
  return query(url, params);
  // throttlePromise();
};

/**
 *
 * @param {module:url.URL} url
 * @param {object|null} params
 * @return {Promise<any>}
 */
async function initQuery(url, params = null) {
  url = new URL(url);
  if (typeof params === 'object') {
    for (const key of Object.keys(params)) {
      url.searchParams.append(key, params[key]);
    }
  }
  return await (await fetch(url)).json();
}
