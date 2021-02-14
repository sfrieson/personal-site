import PropTypes from 'prop-types';
import React from 'react';
import Swash from '../components/Swash';
import { Skip, Content } from '../components/SkipToContent';
import Nav from '../components/Nav';

import ThemeSwitcher from '../components/ThemeSwitcher';
import useBaseline from '../hooks/useBaseline';

import '../styles.css';

function HomeTemplate({ children }) {
  useBaseline();
  return (
    <>
      <Skip />
      <Swash />
      <div className="display--flex">
        <div className="main__column left-margin"></div>
        <div className="main__layout display--flex">
          <aside className="main__column links padding--x--half">
            <div className="display--grid aside">
              <Nav />
              <div>
                <ThemeSwitcher />
              </div>
            </div>
          </aside>
          <Content className="main main__column padding--x--half">
            {children}
          </Content>
        </div>
      </div>
    </>
  );
}

HomeTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.nodoe),
  ]),
};

export default HomeTemplate;
