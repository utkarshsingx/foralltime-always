import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ConstellationBackground from "../components/ConstellationBackground";

function Page4() {
  const [input, setInput] = useState("");
  const [reveal, setReveal] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef(null);

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
    if (audio.paused) audio.play();
    else audio.pause();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "0707") {
      setReveal(true);
      setTimeout(() => navigate("/page5"), 4000);
    } else {
      alert("The stars haven't aligned yet... try again.");
    }
  };

  return (
    <div style={styles.wrapper}>
      <ConstellationBackground revealConstellation={reveal} />
      <div style={styles.container}>
        <audio ref={audioRef} loop src="/audio/stars.mp3" />
        <h2>✨ Lovers in the Sky</h2>
        <p style={styles.intro}>
          On the 11th of July, your sketchbook whispered a tale. You saw the
          myth. Now tell me:
        </p>
        <blockquote style={styles.riddle}>
          Two lovers, forever apart, one rises as the other fades.
          <br />
          They meet only once a year, when the Milky Way weeps.
          <br />
          <br />
          Who are they?
        </blockquote>
        <p style={styles.hint}>Write their reunion date (in DDMM format)</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="ddmm"
            style={styles.input}
          />
          <br />
          <button type="submit" style={styles.button}>
            Unlock The Stars
          </button>
        </form>
        <button onClick={toggleAudio} style={styles.audioButton}>
          🎶 Musike 🎶
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "relative",
    overflow: "hidden",
    minHeight: "100vh",
  },
  container: {
    textAlign: "center",
    padding: "5%",
    fontFamily: "serif",
    minHeight: "100vh",
    position: "relative",
    zIndex: 1,
    color: "#fff",
  },
  intro: {
    fontSize: "1.2em",
    marginBottom: "20px",
  },
  riddle: {
    fontStyle: "italic",
    background: "rgba(255, 255, 255, 0.1)",
    padding: "15px",
    borderRadius: "10px",
    maxWidth: "500px",
    margin: "0 auto 20px auto",
  },
  hint: {
    fontSize: "1em",
    marginBottom: "10px",
  },
  input: {
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

export default Page4;
