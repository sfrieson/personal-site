const React = require('react');

module.exports = function ThemeSwitcher() {
  return (
    <div id="theme-switcher" role="presentation">
      <section
        aria-labelledby="theme-switcher__heading"
        className="theme-switcher__section"
      >
        <p
          id="theme-switcher__heading"
          className="theme-switcher__heading fontWeight--bold position--relative no-newline"
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
            disabled
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
            disabled
          />
        </p>
      </section>
      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: require('./script.script'),
        }}
      />
    </div>
  );
};
