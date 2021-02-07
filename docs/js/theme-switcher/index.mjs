/**
 * Finds the desired theme in the stylesheet and appends the rules to the end so it
 * takes precedence over the media query, deleting any previous sets.
 * @param {"light"|"dark"} theme
 */
var setTheme = function () {
  var addedRuleIndex = null;
  return function (theme) {
    var styleSheet = document.styleSheets[0];
    var mediaRule = Array.prototype.find.call(styleSheet.rules, function (rule) {
      return rule.type === CSSStyleRule.MEDIA_RULE && rule.conditionText.includes("(prefers-color-scheme: ".concat(theme, ")"));
    });
    var themeCssText = mediaRule.cssRules[0].style.cssText;
    if (addedRuleIndex) styleSheet.deleteRule(addedRuleIndex);
    addedRuleIndex = styleSheet.insertRule(":root { ".concat(themeCssText, " }"), styleSheet.rules.length);
  };
}();
/**
 *
 * @param {HTMLElement} rootEl Element around the theme switcher component.
 * @param {boolean} prefersDark Media query match for (prefers-color-scheme: dark).
 */


export default function (rootEl, prefersDark) {
  var inputs = rootEl.getElementsByTagName('input');
  var active = prefersDark ? 'dark' : 'light';

  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    input.disabled = false;
  }

  rootEl.addEventListener('change', function (event) {
    var changeTo = event.target.value;
    window.requestAnimationFrame(function () {
      return setTheme(changeTo);
    });
  });
}