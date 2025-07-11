import React, { useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

function Page3() {
  const audioRef = useRef(null);
  const videoRef = useRef(null);
//   const navigate = useNavigate();

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.5;

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
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  const handleVideoPlay = () => {
    audioRef.current.pause();
  };

  return (
    <div style={styles.container}>
      {/* 🎵 Background Music */}
      <audio ref={audioRef} loop src="/audio/jumpup.mp3" />

      <h2>you are not so for a goldfish afterall</h2>

      <div style={styles.riddleBlock}>
        <p>
          <strong>Step 1:</strong> Head over to my Insta post (the funny one)
          with the caption:
        </p>
        <blockquote style={styles.quote}>
          “You’re cute when confused.”
        </blockquote>
        <p>
          Use <strong>ROT13</strong> to decode this clue:
        </p>
        <code style={styles.code}>
          Gur arkg fgbc vf gur pyhr lbh srry jvyy rirelguvat punatr.
        </code>
        <p>
          This gives you the <strong>first half</strong> of your next link.
        </p>
      </div>

      <hr style={{ width: "60%" }} />

      <div style={styles.riddleBlock}>
        <p>
          <strong>Step 2:</strong> Scan the QR code sent to you privately.
        </p>
        <p>
          That gives the <strong>second half</strong> of the same link.
        </p>
        <p>Put them together, and unlock the next world of stars ✨</p>
      </div>



      <h3>🎥 A Message Appears...</h3>
      <p>Before you go, this may give you a clue or make you laugh again.</p>

      <video
        ref={videoRef}
        src="/video/jumpupvid.mp4"
        width="480"
        controls
        onPlay={handleVideoPlay}
        style={{ marginTop: "20px", borderRadius: "12px" }}
      />

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
  },
  riddleBlock: {
    marginTop: "30px",
    fontSize: "1.1em",
  },
  quote: {
    fontStyle: "italic",
    background: "#eee",
    padding: "10px",
    borderRadius: "8px",
    margin: "10px auto",
    width: "fit-content",
  },
  code: {
    display: "inline-block",
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#000",
    color: "#fff",
    fontFamily: "monospace",
    borderRadius: "6px",
  },
  audioButton: {
    position: "fixed",
    top: 20,
    right: 20,
    background: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "8px 16px",
    cursor: "pointer",
  },
};

export default Page3;
