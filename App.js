import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/items')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Generated App</h1>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
