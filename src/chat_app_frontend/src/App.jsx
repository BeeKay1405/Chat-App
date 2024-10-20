import React from 'react';
import Chat from './Chat';
import './App.css';

function App() {
  console.log("Rendering App component");
  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <Chat />
    </main>
  );
}

export default App;
