/* TODO Check what happens when this doesn't load */
window.requestIdleCallback(() => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    document.getElementById('prefers-dark').checked = true;
  }
  const themeSwitcherRoot = document.getElementById('theme-switcher');
  themeSwitcherRoot.style.display = 'block';
  import('/js/theme-switcher/index.js').then(({ default: themeSwitcher }) => {
    themeSwitcher(themeSwitcherRoot, prefersDark);
  });
});
