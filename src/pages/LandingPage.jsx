import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().toLowerCase() === 'mahak050703') {
      navigate('/page1');
    } else {
      alert('Access denied. Only certain soul can enter.');
    }
  };

  return (
    <div style={styles.container}>
      <h1>⚠️ Restricted Access</h1>
      <p>You're trying to reach a restricted area...</p>
      <p>Someone who breached the 4th wall can only enter.</p>
      <form onSubmit={handleSubmit}>
        <label>Confirm your identity:</label>
        <br />
        <input
          type="password"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <br />
        <button type="submit" style={styles.button}>Enter</button>
      </form>
    </div>
  );
}

const styles = {
  container: { textAlign: 'center', marginTop: '10%' },
  input: { padding: '10px', marginTop: '10px', borderRadius: '8px' },
  button: { padding: '10px 20px', marginTop: '15px', cursor: 'pointer' }
};

export default LandingPage;
