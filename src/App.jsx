
import React from 'react';
import './App.css';
import logo from './assets/MainPageHeader.png';
import 'tailwindcss/tailwind.css';
import { Link, Routes, Route } from 'react-router-dom';

import Research from './pages/research';
import Newsletter from './pages/newsletter';

function Home() {
  return (
    <div className="min-h-screen m-0 p-0 w-full" style={{ backgroundColor: '#ffdda8' }}>

      <img
        src={logo}
        className="App-logo"
        alt="logo"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          objectPosition: 'center'
        }}
      />

      <main className="text-center mt-5 p-5">

        <div
          className="flex flex-col items-start bg-[var(--agar-green)] rounded-3xl pr-5 shadow-lg"
          style={{ backgroundColor: '#68d29f' }}
        >
          <h1 className="text-black text-3xl font-bold text-left pt-5 pl-5">
            Welcome To AGAR
          </h1>

          <p className="text-black text-lg leading-loose text-left p-5">
            The Action Group on Antimicrobial Resistance is a student-led
            organization at the University of Toronto Scarborough dedicated
            to raising awareness about antimicrobial resistance through
            outreach, education, and student research.
          </p>
        </div>

        <div className="flex flex-row gap-4 w-full justify-start mt-5">
            <div className="text-black text-lg font-bold text-center px-8 py-4 rounded-3xl shadow-lg hover:scale-105 transition-transform"
                style={{ backgroundColor: '#a2eec9' }}>
                <h1 className="text-black text-3xl font-bold text-left pt-5 pl-5">Student Research</h1>
                <p className="text-black text-lg leading-loose text-left p-5">
                Discover student research on antimicrobial resistance.
                </p>
            <Link
            className="inline-block bg-white text-black text-lg font-bold px-6 py-3 rounded-3xl shadow hover:scale-105 transition-transform"
                to="/research"
            >

                Learn More &gt;
            </Link>
          </div>

            <div className="text-black text-lg font-bold text-center px-8 py-4 rounded-3xl shadow-lg hover:scale-105 transition-transform" style={{ backgroundColor: '#48c186' }}>
                <h1 className="text-black text-3xl font-bold text-left pt-5 pl-5">Newsletter</h1>
                <p className="text-black text-lg leading-loose text-left p-5">
                    Stay updated with the latest news from AGAR.
            </p>
          <Link
            to="/newsletter"
            className="inline-block bg-white text-black text-lg font-bold px-6 py-3 rounded-3xl shadow hover:scale-105 transition-transform"
          >
            Learn More &gt;
          </Link>
          </div>


        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/research" element={<Research />} />
      <Route path="/newsletter" element={<Newsletter />} />
    </Routes>
  );
}

export default App;
