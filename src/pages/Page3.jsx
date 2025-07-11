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
    if (codeInput.trim().toLowerCase() === "altairvega") {
      navigate("/page4");
    } else {
      alert("That's not quite the final code. Look deeper.");
    }
  };

  return (
    <div style={styles.container}>
      <audio ref={audioRef} loop src="/audio/jumpup.mp3" />

      <h2>You’re not such a goldfish after all...</h2>

      {/* Step 1 */}
      <div style={styles.riddleBlock}>
        <p>
          <strong>Step 1:</strong> Go to my <strong>Pinterest profile</strong> — the one filled with inspiration and dreams.
          <br />
          If you’ve been paying attention, you already know my username. 😉
        </p>
        <blockquote style={styles.quote}>
          (Hint: It’s the same everywhere, dum dum.)
        </blockquote>
        <p>
          Find the <strong>inspirational board</strong>, search for a whisper among the pins. That’s your <strong>first code</strong>. Keep it safe.
        </p>
      </div>

      {/* 🎥 Video in between */}
      <div style={styles.videoBlock}>
        <h3>🎥 A Secret Shared...</h3>
        <p>This is something I watch when I need cheering up. So now, I'll pass the torch to you.</p>
        <video
          ref={videoRef}
          src="/video/jumpupvid.mp4"
          width="960"
          controls
          onPlay={handleVideoPlay}
          style={{ marginTop: "20px", borderRadius: "12px" }}
        />
      </div>

      {/* Step 2 */}
      <div style={styles.riddleBlock}>
        <hr style={{ width: "60%", margin: "30px auto" }} />
        <p>
          <strong>Step 2:</strong> Now scan the <strong>QR code</strong> I gave you.
        </p>
        <p>
          That’ll lead you to a mysterious piece of text. Copy it carefully.
        </p>
        <p>
          Then combine both clues. Use a decoder — maybe ROT13, Caesar, or something a little more magical 🧪.
        </p>
        <p>
          The decoded message is your key to the stars... enter it below and we move onward ✨
        </p>
      </div>

      {/* Input box for final code */}
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
