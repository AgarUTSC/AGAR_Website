
import React from 'react';
import { Link } from 'react-router-dom';

function Newsletter() {
const pdfUrl = '/AGAR_Newsletter.pdf'; // Replace with the actual path to your PDF file
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center text-center p-6"
      style={{ backgroundColor: '#ffdda8' }}
    >
      <div
        className="p-8 rounded-3xl shadow-lg"
        style={{ backgroundColor: '#68d29f' }}
      >
        <h1 className="text-black text-4xl font-bold mb-4">
          Newsletter
        </h1>

        <div style={{width: '100%', height: '80vh', overflow: 'hidden', borderRadius: '0.1rem'}}>
            <embed
                src={pdfUrl}
                type="application/pdf"
                width="100%"
                height="100%"
                style={{border: 'none'}}
            />
        </div>

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