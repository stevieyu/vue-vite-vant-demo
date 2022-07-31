export default {
  getRequest: async (url) => (await fetch(url.toString())).json(),
};
