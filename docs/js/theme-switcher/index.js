/**
 * Finds the desired theme in the stylesheet and appends the rules to the end so it
 * takes precedence over the media query, deleting any previous sets.
 * @param {"light"|"dark"} theme
 */
const setTheme = (() => {
  let addedRuleIndex = null;
  return function (theme) {
    const styleSheet = document.styleSheets[0];
    const mediaRule = Array.prototype.find.call(
      styleSheet.rules,
      (rule) =>
        rule.type === CSSStyleRule.MEDIA_RULE &&
        rule.conditionText.includes(`(prefers-color-scheme: ${theme})`)
    );
    const themeCssText = mediaRule.cssRules[0].style.cssText;
    if (addedRuleIndex) styleSheet.deleteRule(addedRuleIndex);
    addedRuleIndex = styleSheet.insertRule(
      `:root { ${themeCssText} }`,
      styleSheet.rules.length
    );
  };
})();

/**
 *
 * @param {HTMLElement} rootEl Element around the theme switcher component.
 * @param {boolean} prefersDark Media query match for (prefers-color-scheme: dark).
 */
export default function (rootEl, prefersDark) {
  const inputs = rootEl.getElementsByTagName('input');
  const active = prefersDark ? 'dark' : 'light';
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    input.disabled = false;
    if (input.value === active) input.checked = true;
  }
  rootEl.addEventListener('change', (event) => {
    const changeTo = event.target.value;
    window.requestAnimationFrame(() => setTheme(changeTo));
  });
}
