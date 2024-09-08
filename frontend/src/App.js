import React, {useState, useEffect, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const getCount = useCallback(async () => {
    const res = await fetch('http://localhost:8080');
    const data = await res.json();
    console.log(data?.count);
    return data?.count;
  }, []);

  const resetCount = useCallback(async () => {
    const res = await fetch('http://localhost:8080/reset', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({reset: true})
    });
    const data = await res.json();
    console.log(data?.msg);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React!
        </a>
        <div>
          <div>
            <button
              type="button"
              onClick={async () => {
                const count = await getCount();
                setCount(count);
              }}>
              Count
            </button>
            <span>{count}</span>
          </div>
          <button
            type="button"
            onClick={async () => {
              await resetCount();
              setCount(0);
            }}>
            Reset
          </button>
          <br></br>
        </div>
      </header>
    </div>
  );
}

export default App;
