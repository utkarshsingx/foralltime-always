import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Page6() {
  const [showLink, setShowLink] = useState(false);
  const [input, setInput] = useState("");
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
    if (input.trim().toLowerCase() === "el psy congroo" || input.trim().toLowerCase() === "el psy kongroo") {
      navigate("/page7");
    } else {
      alert("Wrong worldline. Try again, Hououin Kyouma style!");
    }
  };

  return (
    <div style={styles.container}>
      <audio ref={audioRef} loop src="/audio/stars.mp3" />

      <h2>The Attractor Field</h2>
      <p style={styles.intro}>
        There was always a moment in every worldline where we would've again
        met.
        <br />
      </p>

      <p style={styles.intro}>
        Now you know why we need to stay away from the organisations...
        <br />
        Only <em>you</em> can finish this madness:
      </p>

      <blockquote style={styles.riddle}>“El ___ _______”</blockquote>

      <p>(Hint: Watch Steins;Gate)</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter full phrase"
          style={styles.input}
        />
        <br />
        <button type="submit" style={styles.button}>
          Unlock Divergence
        </button>
      </form>

      <hr style={styles.divider} />

      <h3>🎬 The Choice of Steins;Gate</h3>
      <p>
        This series is closest to my heart... if you want to watch it full, of
        course.
      </p>
      <p>
        But we know the organisations wouldn't want that happening... <br /> so
        I must reveal what you're looking for you'll get within 75 seconds of
        1st episode. <br/> So, If you came through hereby and know about my possible
        plans,
        <br />I hereby designate you by title of{" "}
        <strong>“Lab Member 004”</strong>.
      </p>

      {!showLink ? (
        <button style={styles.revealBtn} onClick={() => setShowLink(true)}>
          🎥 Reveal Anime Link
        </button>
      ) : (
        <a
          href="https://animekai.to/watch/steinsgate-4nrw#ep=1"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.revealedLink}
        >
          🔗 https://animekai.to/watch/steinsgate-4nrw#ep=1
        </a>
      )}

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
    zIndex: 1,
    color: "#000", // Follows default theme
  },
  intro: {
    fontSize: "1.1em",
    marginBottom: "20px",
  },
  riddle: {
    fontStyle: "italic",
    background: "rgba(0, 0, 0, 0.05)",
    padding: "15px",
    borderRadius: "10px",
    maxWidth: "500px",
    margin: "0 auto 20px auto",
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
  divider: {
    margin: "40px auto",
    width: "60%",
    opacity: 0.2,
  },
  revealBtn: {
    marginTop: "20px",
    padding: "10px 16px",
    backgroundColor: "#1d1d1d",
    color: "#0ff",
    border: "1px dashed #0ff",
    borderRadius: "8px",
    cursor: "pointer",
  },
  revealedLink: {
    display: "inline-block",
    marginTop: "20px",
    color: "#0056ff",
    textDecoration: "underline",
    fontWeight: "bold",
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

export default Page6;
