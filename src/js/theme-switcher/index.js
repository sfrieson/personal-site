const properties = ['--bgColor-default', '--color-default'];
const values = {
  light: {
    '--bgColor-default': '#eee',
    '--color-default': 'rebeccapurple',
  },
  dark: {
    '--bgColor-default': 'rebeccapurple',
    '--color-default': '#eee',
  },
};

/**
 *
 * @param {string} property CSS Custom Property to set
 * @param {string} value the value of the custom property
 */
function setProperty(property, value) {
  document.body.style.setProperty(property, value);
}

/**
 * @param {"light"|"dark"} theme
 */
function setTheme(theme) {
  properties.forEach((property) => {
    setProperty(property, values[theme][property]);
  });
}
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
    console.log(changeTo);
    setTheme(changeTo);
  });
}
