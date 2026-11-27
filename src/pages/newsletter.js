
import React from 'react';
import { Link } from 'react-router-dom';

function Newsletter() {
const pdfUrl = '/AGAR_Newsletter.pdf'; // Replace with the actual path to your PDF file
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center text-center p-4 sm:p-6"
      style={{ backgroundColor: '#ffdda8' }}
    >
      <div
        className="w-full max-w-6xl p-4 sm:p-8 rounded-3xl shadow-lg"
        style={{ backgroundColor: '#68d29f',
          overflow: "hidden",
          position: "relative",
          width: "100%"
         }} //#68d29f 
      >
        <h1 className="text-black text-4xl font-bold mb-4">
          Newsletter
        </h1>

        <div style={{width: '100%', height: '80vh', overflow: 'hidden', borderRadius: '0.1rem'}}>
            
          <iframe
            src={`${pdfUrl}#view=FitH`}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="newsletter"
          />
          
        </div>
        <a href="/AGAR_Newsletter.pdf" download="AGAR_Newsletter.pdf">
          <button>Download as PDF</button>
        </a>
        <Link
          to="/"
          className="inline-block bg-white text-black text-lg font-bold px-6 py-3 rounded-3xl shadow hover:scale-105 transition-transform"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Newsletter;