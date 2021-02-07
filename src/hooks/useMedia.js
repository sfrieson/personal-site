import { useEffect, useState } from 'react';

export default function useMedia(query) {
  const [isMatching, setIsMatching] = useState();

  useEffect(() => {
    const media = window.matchMedia(query);

    setIsMatching(media.matches);

    const handleChange = (e) => setIsMatching(e.target.matches);

    media.addEventListener('change', handleChange);
    () => media.removeEventListener('change', handleChange);
  }, [query]);

  return { isMatching };
}
