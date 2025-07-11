import { useEffect, useRef } from 'react';

function MusicPlayer({ src }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.25;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        console.log("Autoplay blocked.");
      });
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [src]);

  return <audio ref={audioRef} loop src={src} />;
}

export default MusicPlayer;
