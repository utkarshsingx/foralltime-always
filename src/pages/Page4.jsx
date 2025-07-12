import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ConstellationBackground from "../components/ConstellationBackground";

function Page4() {
  const [input, setInput] = useState("");
  const [reveal, setReveal] = useState(false);
  const [randomFact, setRandomFact] = useState("");
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

    const cosmicFacts = [
      "Did you know? In the Summer Triangle, two stars—Altair and Vega—shine across a celestial river. The ancients believed they were separated lovers, destined to meet only once a year.",
      "Stars are ancient storytellers. Vega and Altair, the mythic lovers, bridge galaxies just to reunite — for a single night in July.",
      "Long before clocks, lovers looked up to the stars. Some constellations were maps of longing — Vega and Altair drew one such tale.",
      "Even light takes years to reach us. By the time we see some stars, they may have already died. And yet, they shine — like old promises.",
      "Not all stars belong to the present. Some are memories burning across time — like lovers who meet only once each era.",
      "If you stare at the night sky long enough, you’re not just watching space. You’re watching time. Vega rises. Altair waits. Destiny aligns.",
      "Some constellations are not formed by stars, but by stories. We draw our myths in the sky to remind ourselves we were never alone.",
      "The galaxy breathes in cycles. Stars are born, live, and collapse — much like our own hearts. Some leave behind light. Others, silence.",
      "Every black hole has a secret. Not of destruction — but of transformation. Sometimes, endings are just portals to something unknown.",
      "Across the universe, pulsars tick like cosmic clocks — and still, nothing measures time better than a heart waiting to see a star again.",
      "The Milky Way moves. So do we. All things in space are dancing — just slowly enough for eternity to watch.",
      "Andromeda is coming. Slowly, gently, our galaxy’s twin approaches. One day, stars will collide like fate meeting fate.",
      "Look up. Every star is a question. Every constellation, a hint. And every night sky, a puzzle only the heart can decode.",
      "In the end, stars are like us. Born in chaos. Shining briefly. Hoping to be remembered.",
    ];

    const randomIndex = Math.floor(Math.random() * cosmicFacts.length);
    setRandomFact(cosmicFacts[randomIndex]);

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
    if (input.trim() === "0707" || input.trim() === "2908") {
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
        <audio ref={audioRef} loop src="/audio/Cats.mp3" />

        <h2>Secrets of the Celestial Beings</h2>

        <p style={styles.intro}>{randomFact}</p>

        <p>
          {" "}
          <i>(this step was made solely to let the audience know how much the
          creator likes the depth of universe, the endless what ifs- <br/>no riddles
          but only, revelation)
          </i>
        </p>
        <blockquote style={styles.riddle}>
          <em>
            Two lovers, forever apart, one rises as the other fades.
            <br />
            They meet only once a year, when the Milky Way weeps.
            <br />
            <br />
            hmm.. do you know them?
          </em>
        </blockquote>

        <p style={styles.hint}>
          when do they reunite..!? <br />
          i'll give you one pass this time, better search it up!
          <br />
          (format: DDMM)
        </p>

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
    lineHeight: "1.6",
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

export default Page4;
