/**
 * Finds the desired theme in the stylesheet and appends the rules to the end so it
 * takes precedence over the media query, deleting any previous sets.
 * @param {"light"|"dark"} theme
 */
const setTheme = (() => {
  let addedRuleIndex = null;
  return function (theme) {};
})();

/**
 *
 * @param {HTMLElement} rootEl Element around the theme switcher component.
 * @param {boolean} prefersDark Media query match for (prefers-color-scheme: dark).
 */
export default function (rootEl) {
  const inputs = rootEl.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    input.disabled = false;
  }
  rootEl.addEventListener('change', (event) => {
    const changeTo = event.target.value;
    window.requestAnimationFrame(() => setTheme(changeTo));
  });
}
