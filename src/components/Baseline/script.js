const defaultOn = false;
const baseline = 16 * 1.25 * 1.5;
var mySVG = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 ${baseline}' width='1px'><rect x='0px' width='1' y='${
  baseline - 1
}' height='1' fill='#f5df4d' /></svg>`;

if (typeof window !== 'undefined') {
  var mySVG64 = window.btoa(mySVG);
  const toggleImage = {
    false: '',
    true: `url('data:image/svg+xml;base64,${mySVG64}')`,
  };
  document.body.style.backgroundImage = toggleImage[defaultOn];
  document.body.addEventListener('keydown', (ev) => {
    if (ev.metaKey && ev.key === 'b') {
      ev.preventDefault();
      document.body.style.backgroundImage =
        toggleImage[!document.body.style.backgroundImage];
    }
  });
}
