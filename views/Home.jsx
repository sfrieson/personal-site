const marked = require('marked');
const React = require('react');
const HTML = require('./components/HTML');
const Head = require('./components/Head');
const Baseline = require('./components/Baseline');
const Swash = require('./components/Swash');
const { Skip, Content } = require('./components/SkipToContent');
const Nav = require('./components/Nav');
const ThemeSwitcher = require('./components/ThemeSwitcher');
const Article = require('./components/Article');

function HelloMessage({ title, description, markdown }) {
  return (
    <HTML>
      <Head title={title} description={description} />
      <body>
        <Skip />
        <Baseline />
        <Swash />
        <div className="display--flex">
          <div className="main__column left-margin"></div>
          <div className="main__layout display--flex">
            <aside className="main__column links padding--x--half position--relative">
              <Nav />
              <ThemeSwitcher />
            </aside>
            <Content className="main main__column padding--x--half">
              <Article markdown={markdown} />
            </Content>
          </div>
        </div>
      </body>
    </HTML>
  );
}

module.exports = HelloMessage;
