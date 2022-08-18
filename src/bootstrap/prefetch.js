if (import.meta.env.PROD) {
  const baseUrl = import.meta.env.BASE_URL;
  fetch(baseUrl + 'manifest.json')
      .then((res) => {
        if (res.status !== 200) throw new Error(res.statusText);
        return res.text();
      })
      .then((res) => {
        res.match(/(\/[\w.]+){2,}(js|css)/gm)
            .forEach((i) => createLink(baseUrl + i));
      });
}

const createLink = (href) => {
  if (document.querySelector(`[src="${href}"]`)) return;
  if (document.querySelector(`[href="${href}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.as = href.includes('.js') ? 'script' : 'style';
  link.href = href;
  document.head.appendChild(link);
};

