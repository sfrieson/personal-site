import React, { useCallback, useEffect, useRef, useState } from 'react';

import useMedia from '../../hooks/useMedia';

const DARK = 'dark';
const LIGHT = 'light';

function useThemeSwitcher() {
  const { isMatching } = useMedia(`(prefers-color-theme: ${DARK})`);
  const [userPreference, setUserPreference] = useState(null);
  const addedRuleIndex = useRef();
  const onUserPreferenceChange = useCallback((e) => {
    setUserPreference(e.target.value);
  }, []);

  useEffect(() => {
    if (!userPreference) return;
    const styleSheet = document.styleSheets[0];
    const mediaRule = Array.prototype.find.call(
      styleSheet.rules,
      (rule) =>
        rule.type === CSSStyleRule.MEDIA_RULE &&
        rule.conditionText.includes(`(prefers-color-scheme: ${userPreference})`)
    );
    const themeCssText = mediaRule.cssRules[0].style.cssText;
    if (addedRuleIndex.current) styleSheet.deleteRule(addedRuleIndex.current);
    addedRuleIndex.current = styleSheet.insertRule(
      `:root { ${themeCssText} }`,
      styleSheet.rules.length
    );
  }, [userPreference]);

  let currentPreference;
  switch (true) {
    case userPreference !== null:
      currentPreference = userPreference;
      break;
    case isMatching === true:
      currentPreference = DARK;
      break;
    case isMatching === false:
      currentPreference = LIGHT;
      break;
    default:
      currentPreference = null;
  }

  return { currentPreference, onUserPreferenceChange };
}

export default function ThemeSwitcher() {
  const { currentPreference, onUserPreferenceChange } = useThemeSwitcher();
  return (
    <div className="theme-switcher__container" role="presentation">
      <section
        id="theme-switcher"
        aria-labelledby="theme-switcher__heading"
        style={{ display: currentPreference ? 'block' : 'none' }}
      >
        <p
          id="theme-switcher__heading"
          className="fontWeight--bold position--relative no-newline"
        >
          Color theme:
        </p>
        <p className="position--relative">
          <label htmlFor="prefers-dark" className="theme-switcher__label">
            Dark
          </label>
          <input
            id="prefers-dark"
            className="theme-switcher__input"
            name="color-theme"
            type="radio"
            value="dark"
            checked={currentPreference === DARK}
            onChange={onUserPreferenceChange}
            disabled={!currentPreference}
          />{' '}
          <label htmlFor="prefers-light" className="theme-switcher__label">
            Light
          </label>
          <input
            id="prefers-light"
            className="theme-switcher__input"
            name="color-theme"
            type="radio"
            value="light"
            checked={currentPreference === LIGHT}
            onChange={onUserPreferenceChange}
            disabled={!currentPreference}
          />
        </p>
      </section>
    </div>
  );
}
