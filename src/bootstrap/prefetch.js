
const createLink = (href) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.as = 'style';
  link.href = href;
  document.head.appendChild(link);
}

