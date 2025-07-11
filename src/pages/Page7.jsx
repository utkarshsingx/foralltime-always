import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Page7() {
  const [confirmText, setConfirmText] = useState("");
  const [error, setError] = useState("");
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

  const handleConfirm = () => {
    if (
      confirmText.trim().toLowerCase() ===
      "yes, i understand and i want to move forward"
    ) {
      window.open("https://forms.gle/uJQ5ToE1XsaSPetZ6", "_blank");
      setTimeout(() => {
        navigate("/page8");
      }, 3000); // Redirect after form link is opened
    } else {
      setError(
        "❗️Incorrect confirmation. The ritual must be honored precisely."
      );
    }
  };

  return (
    <div style={styles.container}>
      <audio ref={audioRef} loop src="/audio/stars.mp3" />

      <h2>🩸 The Reveal — A Bond Signed in Code</h2>

      <p style={styles.intro}>
        This is it. A form not just of data, but of memory and meaning.
        <br />
        To be part of the **blood bond**, fill it out. Every word is welcome —
        even the ones you never said.
      </p>

      <div style={styles.box}>
        <p>
          🔗 Click below to open the form. After you're done, the path ahead
          shall be revealed.
        </p>

        <button
          onClick={() =>
            window.open("https://forms.gle/uJQ5ToE1XsaSPetZ6", "_blank")
          }
          style={styles.linkButton}
        >
          📝 Fill the Ritual Form
        </button>
      </div>

      <hr style={styles.divider} />

      <h3>🚨 Final Confirmation</h3>
      <p style={styles.warning}>
        If you're unsure, you still have time to turn back.
        <br />
        But once this gate opens, there's no going back.
      </p>

      <p>
        Type exactly:{" "}
        <code>"Yes, I understand and I want to move forward"</code>
      </p>

      <input
        type="text"
        value={confirmText}
        onChange={(e) => {
          setConfirmText(e.target.value);
          setError("");
        }}
        style={styles.input}
        placeholder="Type your confirmation..."
      />
      <br />
      <button onClick={handleConfirm} style={styles.confirmButton}>
        Proceed to Final Phase
      </button>

      {error && <p style={styles.error}>{error}</p>}

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
    color: "#000",
  },
  intro: {
    fontSize: "1.1em",
    marginBottom: "30px",
  },
  box: {
    background: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "500px",
    margin: "0 auto 30px",
  },
  linkButton: {
    marginTop: "10px",
    padding: "10px 16px",
    backgroundColor: "#1d1d1d",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  divider: {
    margin: "40px auto",
    width: "60%",
    opacity: 0.2,
  },
  warning: {
    color: "#990000",
    fontStyle: "italic",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    fontSize: "1em",
    backgroundColor: "#222",
    color: "#fff",
    border: "1px solid #999",
    width: "80%",
    maxWidth: "400px",
  },
  confirmButton: {
    marginTop: "15px",
    padding: "10px 20px",
    backgroundColor: "#111",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "10px",
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

export default Page7;
