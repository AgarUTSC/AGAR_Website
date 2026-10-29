import React from 'react';
import './App.css';
import logo from './assets/MainPageHeader.png';

function App() {
  return (
    <div style={{minHeight: '100vh', margin: '0', padding: '0', width: '100%', backgroundColor: '#ffdda8'}}>

      <img src={logo} className="App-logo" alt="logo"
      style={{ width: '100%', height: '400px', maxHeight: '40vh', objectFit: 'cover', objectPosition: 'center' }}
      
      /> 


      <main style={{ textAlign: 'center', marginTop: '20px', padding: '20px' }}>

      <h1>AGAR @utsc.</h1>
      <p>Website in development...</p>
      </main>
    </div>
  );
}

export default App;
