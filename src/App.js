import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Modal from './components/modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showDivModal, setShowDivModal] = useState(false);
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
          Launch component Modal
        </a>
        <a  className="App-link"
          style={{ cursor: "pointer" }} onClick={() => setShowDivModal(true)} >Launch Div Modal</a>
      </header>
      {
        showModal ? <Modal className="fade-up" toggleModal={setShowModal} /> : null
      }
     
      <div>

        {showDivModal ? (
          <div className="modal">
            <div className="modal-content">
              <div className="close">
                <span className="close-btn" onClick={() => setShowDivModal(false)}>
                  &times;
                </span>
              </div>
              <h1>Modal</h1>
              <p>Modal content</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;