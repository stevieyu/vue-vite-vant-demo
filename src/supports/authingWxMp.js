import load from '@/helpers/load';

const key = 'AuthingWxmp';
const me = {
  get() {
    return JSON.parse(localStorage.getItem(key));
  },
  set(data) {
    localStorage.setItem(key, JSON.stringify(data));
  },
};

let _AuthingWxmp;
export const init = async () => {
  if (_AuthingWxmp) return _AuthingWxmp;
  const appId = import.meta.env.VITE_AUTHING_ID;
  const host = import.meta.env.VITE_AUTHING_HOST;

  if (!appId) throw Error('authing appId 未设置');
  if (!host) throw Error('authing host 未设置');

  await load(['https://cdn.jsdelivr.net/npm/@authing/wxmp/dist/authing-wxmp-sdk.min.js'], key);

  const {AuthingWxmp} = window;

  _AuthingWxmp =new AuthingWxmp({
    appId,
    host,
  });
  return _AuthingWxmp;
};

const checkJump = () => {
  if (me.get()) return me.get();

  const {search} = location;
  return !(!search.includes('code=') && !search.includes('message=') && !search.includes('data='));
};

export const getUserInfo = async () => {
  const checkRes = checkJump();
  if (typeof checkRes !== 'boolean') return checkRes;
  if (checkRes === false) return;

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
  const checkRes = checkJump();
  if (typeof checkRes !== 'boolean') return checkRes;
  if (checkRes === false) return;

  const authingWx = await init();
  if (!authingWx.checkWechatUA()) return;

  window.location = authingWx.getAuthorizationUrl();
};

export default async () => {
  await authorization();

  return getUserInfo();
};
