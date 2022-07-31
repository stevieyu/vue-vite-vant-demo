
export const stringify = (obj) => {
  const search = new URLSearchParams(obj || '');
  return search.toString();
};
