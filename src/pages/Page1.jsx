import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

function Page1() {
  const audioRef = useRef(null);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleCheck = (e) => {
    e.preventDefault();
    if (input.trim() === "0816" || input.trim() === "2016") {
      navigate("/page2"); // We'll build this next
    } else {
      alert("(smh) Poor baby.. already giving up 1st one!?");
    }
  };

  useEffect(() => {
    // Auto play on load
    audioRef.current.play().catch(() => {
      console.log("Autoplay blocked. User must interact first.");
    });
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <div style={styles.container}>
        <audio ref={audioRef} loop volume="0.2" src="/audio/lofi.mp3" />

        {/* <h3> Sir, are you a riddler or a rizzler?</h3>
        <p>Call me whatever, love.</p> */}
        <h2>Welcome to my world:<br/></h2> <h1>Let the riddles begin</h1>
        <p>
          On every step you'll be asked something precious...
          <br />
          This will be a testament of your memory, intellect, and heart, lady!
          <br />
          So heed beware. Take it seriously.
          <br />
          <br />
          Hmmm... so enough talk. Let's begin, alright? <br />
          They're too easy... Let's go!
        </p>
        <form onSubmit={handleCheck}>
          <p>
            All treasures begin with a whisper from the past.
            <br />
            To unlock your first clue, recall the day our story began for 2nd time.
            <br />
            <br />
            <strong>
              the date we first messaged~
              <br />
              ahh.. nope this was easy and it isn't going to be easy darling, right!?
              <br />
              Maybe the exact time I first messaged you~ in the form HHMM:
            </strong>
          </p>
          <input
            type="text"
            placeholder="hhmm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={styles.input}
          />
          <br />
          <button type="submit" style={styles.button}>
            Unlock
          </button>
        </form>

        {/* 🎶 Musike - Centered */}
        <button
          onClick={() => {
            const audio = audioRef.current;
            if (audio.paused) audio.play();
            else audio.pause();
          }}
          style={{
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
            zIndex: 10,
          }}
        >
          🎶 Musike 🎶
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "5%" },
  input: { padding: "10px", borderRadius: "8px" },
  button: { padding: "10px 20px", marginTop: "15px", cursor: "pointer" },
};

export default Page1;
