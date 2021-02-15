import PropTypes from 'prop-types';
import React from 'react';
import './styles.css';

function ArticleMeta({ date, formattedDate }) {
  return (
    <div className="article-meta fontSize--0">
      <time dateTime={date}>{formattedDate}</time>
    </div>
  );
}

ArticleMeta.propTypes = {
  date: PropTypes.string.isRequired,
  formattedDate: PropTypes.string.isRequired,
};

export default ArticleMeta;
