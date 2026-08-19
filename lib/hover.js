// Inline-style hover helpers, shared by the nav and footer links.

export function hoverColor(hoverValue, baseValue) {
  return {
    onMouseEnter: (e) => { e.currentTarget.style.color = hoverValue; },
    onMouseLeave: (e) => { e.currentTarget.style.color = baseValue; },
  };
}
