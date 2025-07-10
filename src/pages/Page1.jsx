import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Page1() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleCheck = (e) => {
    e.preventDefault();
    if (input.trim() === '020725') {
      navigate('/page2'); // We'll build this next
    } else {
      alert('Wrong... try again. Remember the whisper from our past.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>🧠 Sir, are you a riddler or a rizzler?</h2>
      <p>Call me whatever, love.</p>
      <hr style={{ width: '60%' }} />
      <h3>Welcome to my world: Let the riddles begin</h3>
      <p>
        On every step you'll be asked something precious...<br />
        This will be a testament of your intellect, heart, and memory, lady!<br />
        So heed beware. Take it seriously.<br /><br />
        Hmmm... so enough talk. Let's begin, alright? <br />
        They're too easy... Let's go!
      </p>
      <form onSubmit={handleCheck}>
        <p>
          All treasures begin with a whisper from the past.<br />
          To unlock your first clue, recall the day our story began.<br />
          <strong>Enter the date we first messaged — in the form DDMMYY:</strong>
        </p>
        <input
          type="text"
          placeholder="DDMMYY"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <br />
        <button type="submit" style={styles.button}>Unlock</button>
      </form>
    </div>
  );
}

const styles = {
  container: { textAlign: 'center', padding: '5%' },
  input: { padding: '10px', borderRadius: '8px' },
  button: { padding: '10px 20px', marginTop: '15px', cursor: 'pointer' }
};

export default Page1;
