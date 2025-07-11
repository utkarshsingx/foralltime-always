import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Page2() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [code, setCode] = useState("");

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

  const handleCheckCode = (e) => {
    e.preventDefault();
    const entered = code.trim().toLowerCase();
    if (entered === "sketch25" || entered === "dreaming") {
      navigate("/page3");
    } else {
      alert("Uhmm... baby try again! Look closely at the post on 25 Dec 21.");
    }
  };

  return (
    <div style={styles.container}>
      {/* 🎵 Background Music */}
      <audio ref={audioRef} loop src="/audio/insane.mp3" />

      <h2>Okay, You did it! That was peezy.</h2>
      <p>Expected no less... you passed the first challenge.</p>

      <p style={styles.riddle}>
        “My whispers are in ink, my chaos in color.”<br />
        Where do I display the strokes of my world?<br /><br />
        Find the account where I sketch emotions...<br />
        Your clue lies in the caption of my post on the <strong>day after Christmas Eve of '21</strong>.<br />
        <br />
        Decode the post, and enter the code it whispers to your soul:
      </p>

      <form onSubmit={handleCheckCode}>
        <input
          type="text"
          placeholder="Insert your key"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={styles.input}
        />
        <br />
        <button type="submit" style={styles.button}>
          Get in already!
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
    textAlign: 'center',
    padding: '5%',
    fontFamily: 'serif',
    minHeight: '100vh',
    position: 'relative'
  },
  riddle: {
    fontSize: '1.2em',
    marginTop: '30px'
  },
  input: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #aaa',
    fontSize: '1em',
    marginTop: '20px'
  },
  button: {
    marginTop: '20px',
    padding: '12px 20px',
    backgroundColor: '#111',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer'
  },
  audioButton: {
    position: 'fixed',
    top: 20,
    right: 20,
    background: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '8px 16px',
    cursor: 'pointer'
  }
};

export default Page2;
