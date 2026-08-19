// Shared IntersectionObserver helpers for the scroll-driven animations.

export function revealOnScroll(selector, className, options) {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add(className)),
    options
  );
  document.querySelectorAll(selector).forEach((el) => observer.observe(el));
  return observer;
}

export function observeOnce(el, onEnter, options) {
  if (!el) return null;
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      onEnter();
      observer.disconnect();
    }
  }, options);
  observer.observe(el);
  return observer;
}
