import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Page3() {
  const audioRef = useRef(null);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const [codeInput, setCodeInput] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (codeInput.trim().toLowerCase() === "marinated fish") {
      navigate("/page4");
    } else {
      alert("Nope. Decode better, giggler.");
    }
  };

  return (
    <div style={styles.container}>
      <audio ref={audioRef} loop src="/audio/jumpup.mp3" />

      <button onClick={toggleAudio} style={styles.audioButton}>
        🎶 Musike 🎶
      </button>
      <h3>aye aye.. so you're the clever one..</h3>
      <p>
        <em>(*the author cackled cacophonously while writing that*)</em>
      </p>
      <h2>Starry nights</h2>

      <div style={styles.riddleBlock}>
        <p>
          Lets go onto the next steps.. <br />
          Go to my <strong>pinterest profile</strong> — the one that gives
          inspirations to mine arts.
        </p>
        <blockquote style={styles.quote}>
          (Hint: username’s the same everywhere, dum dum.)
        </blockquote>
        <p>
          you'll get everything now from there. once completed come back here!
        </p>
      </div>

      <div style={styles.videoBlock}>
        <h3>🎥 A Secret Shared...</h3>
        <p>
          This is something I watch when I need cheering up. So now, I'll pass
          the torch to you.
        </p>
        <video
          ref={videoRef}
          src="/video/jumpupvid.mp4"
          controls
          onPlay={handleVideoPlay}
          style={styles.responsiveVideo}
        />
      </div>

      <form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
        <input
          type="text"
          value={codeInput}
          onChange={(e) => setCodeInput(e.target.value)}
          placeholder="Enter the decoded code"
          style={styles.input}
        />
        <br />
        <button type="submit" style={styles.button}>
          🌌 Unlock the Stars
        </button>
      </form>
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
  videoBlock: {
    marginTop: "40px",
    marginBottom: "20px",
  },
  quote: {
    fontStyle: "italic",
    background: "#eee",
    padding: "10px",
    borderRadius: "8px",
    margin: "10px auto",
    width: "fit-content",
  },
  input: {
    marginTop: "10px",
    padding: "10px",
    borderRadius: "8px",
    fontSize: "1em",
    backgroundColor: "#222",
    color: "#fff",
    border: "1px solid #999",
  },
  button: {
    marginTop: "15px",
    padding: "10px 20px",
    backgroundColor: "#111",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
  responsiveVideo: {
    width: "90%",
    maxWidth: "960px",
    borderRadius: "12px",
    marginTop: "20px",
    height: "auto",
  },

  audioButton: {
    position: "fixed",
    top: 20,
    left: "50%",
    transform: "translateX(-50%)",
    background: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "8px 16px",
    cursor: "pointer",
    zIndex: 999,
  },
};

export default Page3;
