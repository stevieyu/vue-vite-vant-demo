

const config = {
  origin: '',
  request: null,
};

export const setRequest = (request) => {
  const methods = ['get', 'post', 'put', 'delete'];
  if (methods.filter((i) => request[i]).length !== 4) throw Error('缺乏:'+methods.join());
  config.request = request;
};

export default config;
