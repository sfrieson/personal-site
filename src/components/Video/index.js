import PropTypes from 'prop-types';

import React, { useEffect, useRef } from 'react';

const useShouldAutoPlay = (autoPlay, ref) => {
  useEffect(() => {
    if (!autoPlay) {
      return;
    }

    if (!ref.current) {
      return;
    }

    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (query.matches) {
      return;
    }

    if (ref.current.play) {
      ref.current.play();
    }
  }, [autoPlay, ref]);
};

function Video({ autoPlay, muted, ...props }) {
  const videoRef = useRef();
  const shouldAutoPlay = useShouldAutoPlay(autoPlay, videoRef);

  return (
    <video
      ref={videoRef}
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
