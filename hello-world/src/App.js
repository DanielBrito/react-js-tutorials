import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'

function App() {
  return (
    <div className="App">
      <Message/>

      {/* <Greet name="Daniel" profession="Developer">
        <p>This is children props</p>
      </Greet>
      
      <Greet name="Maria" profession="Software Engineer">
        <button>Click</button>
      </Greet>

      <Greet name="Carlos" profession="UI Designer"/>

      <Welcome name="Daniel" profession="Developer"/>
      <Welcome name="Maria" profession="Software Engineer"/>
      <Welcome name="Carlos" profession="UI Designer"/> */}
    </div>
  )
}

export default App