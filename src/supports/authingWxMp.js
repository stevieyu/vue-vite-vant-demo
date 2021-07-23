import load from '../helpers/load';

const key = 'AuthingWxmp';
const me = {
  get() {
    return JSON.parse(localStorage.getItem(key));
  },
  set(data) {
    localStorage.setItem(key, JSON.stringify(data));
  },
};

export const init = async () => {
  const appId = import.meta.env.VITE_AUTHING_ID;
  const host = import.meta.env.VITE_AUTHING_HOST;

  if (!appId) throw Error('authing appId 未设置');
  if (!host) throw Error('authing host 未设置');

  await load(['https://cdn.jsdelivr.net/npm/@authing/wxmp/dist/authing-wxmp-sdk.min.js'], key);

  const {AuthingWxmp} = window;

  return new AuthingWxmp({
    appId,
    host,
  });
};

export const getUserInfo = async () => {
  if (me.get()) return me.get();

  const {search} = location;
  if (!search.includes('code=') && !search.includes('message=')) return;

  const authingWx = await init();

  return new Promise((resolve, reject) => {
    const {ok, userinfo, message} = authingWx.getUserInfo();
    if (ok) {
      me.set(userinfo);
      resolve(userinfo);
    } else if (message) {
      reject(message);
    }
  });
};

export const authorization = async () => {
  if (me.get()) return me.get();

  const authingWx = await init();
  if (!authingWx.checkWechatUA()) return;

  const {search} = location;
  if (search.includes('code=') && search.includes('message=')) return;

  window.location = authingWx.getAuthorizationUrl();
};

export default async () => {
  await authorization();

  return getUserInfo();
};
