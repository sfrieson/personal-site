const { format, parseISO } = require('date-fns');

const toReadableDateString = (ISODateString) =>
  // Changing the hour to 12 noon to get around timezone issues.
  format(parseISO(ISODateString.replace('T00', 'T12')), 'd MMMM yyyy');

exports.onCreatePage = function ({ page, actions }) {
  const { createPage, deletePage } = actions;

  if (
    page.context &&
    page.context.frontmatter &&
    page.context.frontmatter.date
  ) {
    deletePage(page);
    createPage({
      ...page,
      context: {
        ...page.context,

        humanDate: toReadableDateString(page.context.frontmatter.date),
      },
    });
  }
};
