import { useEffect, useReducer, useRef } from 'react';

function getSVGData(baseline, color) {
  var svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 ${baseline}' width='1px'><rect x='0px' width='1' y='${
    baseline - 1
  }' height='1' fill='${color}' /></svg>`;
  return window.btoa(svg);
}

export default function useBaseline(options = {}) {
  const {
    defaultOn = false,
    baseline = 16 * 1.25 * 1.5,
    color = '#f5df4d',
  } = options;
  const svgData = useRef();

  const [isBaselineShown, toggleBaseline] = useReducer(
    (state) => !state,
    defaultOn
  );
  useEffect(() => {
    if (isBaselineShown && !svgData.current) {
      svgData.current = getSVGData(baseline, color);
    }

    document.body.style.backgroundImage = isBaselineShown
      ? `url('data:image/svg+xml;base64,${svgData.current}')`
      : '';
  }, [isBaselineShown]);

  useEffect(() => {
    document.body.addEventListener('keydown', (ev) => {
      if (ev.metaKey && ev.key === 'b') {
        ev.preventDefault();
        toggleBaseline();
      }
    });
  }, [toggleBaseline]);
}
