
import React from 'react';
import { Link } from 'react-router-dom';

function Research() {
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
          Research Page
        </h1>

        <p className="text-black text-lg mb-6">
          Content here eventually.
        </p>

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

export default Research;