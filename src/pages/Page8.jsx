import React, { useEffect, useRef } from "react";

function Page8() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.4;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        console.log("Autoplay blocked. User interaction needed.");
      });
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (audio.paused) audio.play();
    else audio.pause();
  };

  return (
    <div style={styles.container}>
      <audio ref={audioRef} loop src="/audio/blue.mp3" />

      <h2>A Pleasant Surprise</h2>

      <p style={styles.message}>
        So you’ve remembered me…!?
        <br />
      </p>
      <img src="/public/always.jpeg" alt="Final Art" style={styles.image} />

      <div style={styles.section}>
        <h3>you'll always have a choice.. choose wisely 🎶 </h3>
        <p style={styles.subtitle}>“Where does your soul belong?”</p>

        <p style={styles.text}>
          So this is your birthday gift that I had made, this playlist,
          they’re the songs I grew older with.
          <br />
          And maybe, you’ll catch all the time missed and find a piece of me in them. Aww.. this is too much
          romatic ahh side.
          <br />
          <p style={styles.subtitle}>
            p.s don't fall for me otherwise you'll fall too deep and im
            secretely a demon (v. naughty one) grr
          </p>
        </p>

        <div style={styles.links}>
          <a
            href="https://open.spotify.com/playlist/1Q164nZC4p2NhSVfY7Qasi"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.linkButton}
          >
            💖 Spotify
          </a>
          <a
            href="https://music.apple.com/in/playlist/25-07-02/pl.u-mJy8gPBINeAKjdo"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.linkButton}
          >
            🍎 Apple Music
          </a>
        </div>

        <p style={styles.footnote}>
          ...anyways you made it. hope you could have enjoyed this small
          treasure (hunt) of mine.
          <br />
          (the future? it’s still unwritten. but, you'll decide how it'll be.)
        </p>
      </div>

      <button onClick={toggleAudio} style={styles.audioButton}>
        🎶 Musike 🎶
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "5%",
    fontFamily: "serif",
    minHeight: "100vh",
    position: "relative",
    color: "#000",
  },
  image: {
    width: "300px",
    maxWidth: "90%",
    margin: "20px auto",
    borderRadius: "12px",
    boxShadow: "0 0 12px rgba(0,0,0,0.2)",
  },
  message: {
    fontSize: "1.2em",
    margin: "20px 0",
  },
  quote: {
    fontStyle: "italic",
    color: "#444",
  },
  bold: {
    fontWeight: "bold",
    fontSize: "1.3em",
  },
  section: {
    marginTop: "40px",
  },
  subtitle: {
    fontSize: "1.1em",
    marginBottom: "10px",
    fontStyle: "italic",
  },
  text: {
    margin: "10px auto 20px",
    maxWidth: "600px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "30px",
    flexWrap: "wrap",
  },
  linkButton: {
    padding: "10px 20px",
    backgroundColor: "#111",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: "none",
    transition: "0.3s",
  },
  footnote: {
    fontSize: "0.95em",
    color: "#444",
    fontStyle: "italic",
  },
  audioButton: {
    position: "fixed",
    top: 20,
    right: "50%",
    transform: "translateX(50%)",
    background: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "8px 16px",
    cursor: "pointer",
  },
};

export default Page8;
