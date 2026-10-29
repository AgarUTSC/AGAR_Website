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
      <div style={{backgroundColor: '#68d29fbd', borderRadius: '50px', paddingRight: '20px', boxShadow: '10px 4px 8px rgba(161, 126, 56, 0.26)', alignItems: 'left'}}>
        <h1 style={{ color: 'black', fontSize: '3rem'}}><strong>Welcome To AGAR</strong></h1>
        <p style={{ color: 'black', fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left', padding: '20px' }}>The Action Group on Antimicrobial Resistance is a student-led organization at the University of Toronto Scarborough dedicated to raising awareness about antimicrobial resistance through outreach, education, and student research</p>
      </div>
      </main>
    </div>
  );
}

export default App;
