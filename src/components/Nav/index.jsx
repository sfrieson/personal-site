import React from 'react';
import { Link } from 'gatsby';

import navLinks from './links.js';

export default function Nav() {
  return (
    <nav className="nav__container position--relative">
      <p className="nav__links display--flex">
        {!!navLinks.length &&
          navLinks.map(({ href, text }) => (
            <Link key={text} to={href}>
              {text}
            </Link>
          ))}
      </p>
    </nav>
  );
}
