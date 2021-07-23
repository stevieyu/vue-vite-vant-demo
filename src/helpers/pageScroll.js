/**
 *
 * @param {Element} $el
 * @param {number} duration
 */
export default ($el, duration = 500) => {
  if (!$el) return;
  const top = $el.getBoundingClientRect().top;
  const pageY = window.pageYOffset;
  const endPosition = top + pageY;

  const startTime = +new Date();

  const run = () => {
    const time = +new Date() - startTime;

    window.scrollTo(0, pageY + top * (time / duration));
    run.timer = requestAnimationFrame(run);

    if (time >= duration) {
      window.scrollTo(0, endPosition);
      cancelAnimationFrame(run.timer);
    }
  };

  requestAnimationFrame(run);
};
