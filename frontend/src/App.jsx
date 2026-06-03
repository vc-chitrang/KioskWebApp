import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

function App() {
  const [backendMessage, setBackendMessage] = useState('Loading...');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/message`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((data) => setBackendMessage(data.message))
      .catch(() => setError('Could not connect to backend.'));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hello World</h1>
      <p style={styles.subtext}>
        {error ? (
          <span style={styles.error}>{error}</span>
        ) : (
          backendMessage
        )}
      </p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#ffffff',
    fontFamily: 'sans-serif',
    margin: 0,
  },
  heading: {
    fontSize: '3rem',
    color: '#111111',
    margin: 0,
  },
  subtext: {
    fontSize: '1.2rem',
    color: '#555555',
    marginTop: '1rem',
  },
  error: {
    color: '#cc0000',
  },
};

export default App;
