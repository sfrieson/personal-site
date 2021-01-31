const React = require('react');

const navLinks = require('./links.json');

module.exports = function Nav() {
  return (
    <nav className="nav__container position--relative">
      <p className="nav__links display--flex">
        {!!navLinks.length &&
          navLinks.map(({ href, text }) => (
            <a key={text} href={href}>
              {text}
            </a>
          ))}
      </p>
    </nav>
  );
};
