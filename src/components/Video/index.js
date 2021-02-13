import PropTypes from 'prop-types';

import React, { useState } from 'react';
const useShouldAutoPlay = (autoPlay) => {
  const [shouldAutoPlay] = useState(() => {
    if (!autoPlay) {
      return false;
    }

    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (query.matches) {
      return false;
    }

    return true;
  });

  return shouldAutoPlay;
};

function Video({ autoPlay, muted, ...props }) {
  const shouldAutoPlay = useShouldAutoPlay(autoPlay);

  return (
    <video
      {...props}
      autoPlay={shouldAutoPlay}
      muted={muted || shouldAutoPlay}
    />
  );
}

Video.propTypes = {
  autoPlay: PropTypes.boolean,
  muted: PropTypes.boolean,
};

export default Video;
