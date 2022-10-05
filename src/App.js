import logo from './logo.svg';
import './App.css';
import React from 'react';
import Modal from './components/modal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Launch demo component modal
        </button>
        <button type="button" className="btn btn-primary my-2" data-toggle="modal" data-target="#exampleDivModal">
          Launch demo div modal
        </button>

      </header>
      <Modal className="fade-up" id={"exampleModal"} />

      <div className="modal fade" id="exampleDivModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
    </div> 
  );
}
export default App;