import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Modal from './components/modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          style={{ cursor: "pointer" }}
         onClick={() => setShowModal(true)}
        >
          Launch Modal
        </a>
      </header>
     {
        showModal ? <Modal className="fade-up" toggleModal={setShowModal} /> : null
     }
    </div>
  );
}

export default App;