/* TODO Check what happens when this doesn't load */
window.requestIdleCallback(() => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const darkRadio = document.getElementById('prefers-dark');
  const lightRadio = document.getElementById('prefers-light');
  if (prefersDark.matches) {
    darkRadio.checked = true;
  }
  const themeSwitcherRoot = document.getElementById('theme-switcher');
  prefersDark.addEventListener('change', (changeEvent) => {
    if (changeEvent.target.matches) {
      darkRadio.checked = true;
    } else {
      lightRadio.checked = true;
    }
  });
  import('/js/theme-switcher/index.js').then(({ default: themeSwitcher }) => {
    themeSwitcherRoot.style.display = 'block';
    themeSwitcher(themeSwitcherRoot, prefersDark.matches);
  });
});
