import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Page5() {
  const [spoilerVisible, setSpoilerVisible] = useState(false);
  const [input, setInput] = useState("");
  const audioRef = useRef(null);
  const navigate = useNavigate();

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
    if (input.trim() === "1010101") {
      // example: if x = 10, x*10 = 100, binary = 1100100
      navigate("/page6"); // next step
    } else {
      alert("Nope... dig deeper into your memories.");
    }
  };

  return (
    <div style={styles.container}>
      <audio ref={audioRef} loop src="/audio/touchtone.mp3" />

      <h2>Into the past...</h2>

      <p style={styles.intro}>
        <i>“My memories never lie — but some hide numbers.” </i>
        <br />
        Soo much for teacher’s pet ehh.. eww.. who even says such things?
      </p>

      <div style={styles.spoilerSection}>
        <button
          onClick={() => setSpoilerVisible(!spoilerVisible)}
          style={styles.spoilerButton}
        >
          {spoilerVisible ? "come back already" : "go to old times"}
        </button>
        {spoilerVisible && (
          <div style={styles.spoilerBox}>
            <p>
              some interesting contents kept safe:
              <br />
              <a
                href="https://drive.google.com/drive/folders/1oQ3uin2GdjnLqhEu3z3vQT1kXh_8Ox4Y?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to access
              </a>
            </p>
          </div>
        )}
      </div>

      <div style={styles.riddleBox}>
        <p>
          ahh.. don't get lost in the past now.. come back, complete what you
          started!
          <br />
          <i>it's riddle time (੭˃ᴗ˂)੭</i>
          <br />
          something hidden behind the past ventures, from the lesson of life
          itself, Biology — a mark remains. <br />
          Multiply that by ten, then whisper it through the circuitry of binary,
          1s and 0s.
          <br />
          <br />
          <i>
            aww.. your face looks like you don't know what im talking about
            honey <br />
          </i>
          <i> look behind that nostalgic pic</i>
          <br />
          <br /> What emerges is not just code, but your permission to proceed!
        </p>
        <p>
          <i>
            (madame do it and here i thought you enjoyed maths, so make your
            peace with it!)
          </i>
          <p style={{ fontSize: "0.8em", opacity: 0.6 }}>
            actually im running out of ideas rn <br/>(╥﹏╥)
          </p>
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter binary code here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <br />
        <button type="submit" style={styles.button}>
          Submit Code
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
    color: "#111",
  },
  intro: {
    fontSize: "1.2em",
    marginBottom: "20px",
  },
  riddleBox: {
    background: "#fff7d0",
    padding: "20px",
    margin: "20px auto",
    borderRadius: "10px",
    maxWidth: "600px",
    border: "1px solid #dcb",
    fontSize: "1.1em",
  },
  spoilerSection: {
    marginTop: "30px",
  },
  spoilerButton: {
    padding: "10px 18px",
    fontSize: "1em",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    backgroundColor: "#111",
    color: "#fff",
  },
  spoilerBox: {
    marginTop: "15px",
    padding: "15px",
    backgroundColor: "#fff3cd",
    borderRadius: "10px",
    fontSize: "1em",
    maxWidth: "600px",
    margin: "10px auto",
  },
  input: {
    padding: "10px",
    fontSize: "1em",
    borderRadius: "8px",
    border: "1px solid #999",
    backgroundColor: "#fff",
    marginTop: "25px",
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

export default Page5;
