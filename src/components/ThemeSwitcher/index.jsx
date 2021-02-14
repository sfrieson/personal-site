import React, { useCallback, useEffect, useRef, useState } from 'react';

import useMedia from '../../hooks/useMedia';

const DARK = 'dark';
const LIGHT = 'light';

function useThemeSwitcher() {
  const { isMatching } = useMedia(`(prefers-color-scheme: ${DARK})`);
  const [selectedPreference, selectPreference] = useState(null);
  const addedRuleIndex = useRef();
  const handleSelectPreference = useCallback((e) => {
    selectPreference(e.target.value);
  }, []);

  useEffect(() => {
    if (!selectedPreference) return;
    const styleSheet = document.styleSheets[0];
    const mediaRule = Array.prototype.find.call(
      styleSheet.rules,
      (rule) =>
        rule.type === CSSStyleRule.MEDIA_RULE &&
        rule.conditionText.includes(
          `(prefers-color-scheme: ${selectedPreference})`
        )
    );
    const themeCssText = mediaRule.cssRules[0].style.cssText;
    if (addedRuleIndex.current) styleSheet.deleteRule(addedRuleIndex.current);
    addedRuleIndex.current = styleSheet.insertRule(
      `:root { ${themeCssText} }`,
      styleSheet.rules.length
    );
  }, [selectedPreference]);

  let currentPreference;
  switch (true) {
    case selectedPreference !== null:
      currentPreference = selectedPreference;
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

  return { currentPreference, handleSelectPreference };
}

export default function ThemeSwitcher() {
  const { currentPreference, handleSelectPreference } = useThemeSwitcher();
  return (
    <section
      id="theme-switcher"
      aria-labelledby="theme-switcher__heading"
      className={
        currentPreference ? 'theme-switcher__container' : 'display--none'
      }
      role="presentation"
    >
      <div
        id="theme-switcher__heading"
        className="fontWeight--bold position--relative no-newlin"
      >
        Color theme:
      </div>
      <div className="display--flex justify--spaceBetween">
        <input
          id="prefers-dark"
          className="visually-hidden"
          name="color-theme"
          type="radio"
          value="dark"
          checked={currentPreference === DARK}
          onChange={handleSelectPreference}
          disabled={!currentPreference}
        />
        <label
          htmlFor="prefers-dark"
          className="theme-switcher__label theme-switcher__label--dark position--relative"
        >
          Dark
        </label>
        <input
          id="prefers-light"
          className="visually-hidden"
          name="color-theme"
          type="radio"
          value="light"
          checked={currentPreference === LIGHT}
          onChange={handleSelectPreference}
          disabled={!currentPreference}
        />
        <label
          htmlFor="prefers-light"
          className="theme-switcher__label theme-switcher__label--light position--relative"
        >
          Light
        </label>
      </div>
    </section>
  );
}
