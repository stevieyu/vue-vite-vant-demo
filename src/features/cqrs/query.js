import config from './config';
// import throttlePromise from './utils/throttlePromise';

let query = null;

export const setQuery = (paramsQuery) => {
  query = paramsQuery;
};

export default (path, params = null) => {
  let uri = config.origin.replace(/\/$/, '');
  uri = path.includes('http') ? path : uri + path;

  const url = new URL(uri);
  if (params && typeof params === 'object') {
    for (const key of Object.keys(params)) {
      url.searchParams.append(key, params[key]);
    }
  }

  if (!query) query = initQuery;
  return query(url);
  // return throttlePromise(query(url, params));
};

/**
 *
 * @param {string|URL} url
 * @return {Promise<any>}
 */
async function initQuery(url) {
  return await (await fetch(url.toString())).json();
}
