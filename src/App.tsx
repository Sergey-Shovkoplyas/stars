import React from 'react';
import logo from './logo.svg';
import './App.css';

import SomeTest from "./components/SomeTest";

function App() {
  return (
    <div className="App">
      <SomeTest />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Some TEST PROJECT!!!!!
        </a>
      </header>
    </div>
  );
}

export default App;
