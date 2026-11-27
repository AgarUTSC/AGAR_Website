import React from 'react';

import { Link } from 'react-router-dom';

function Mission() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center text-center p-6"
      style={{ backgroundColor: '#ffdda8' }}
    >
      <div
        className="p-8 rounded-3xl shadow-lg"
        style={{ backgroundColor: '#68d29f',
          overflow: "hidden",
          position: "relative",
          width: "100%"
        }}
      >
        <iframe 
        src="https://docs.google.com/document/d/e/2PACX-1vSLhKPI-kim61gF_Dg8kX7a25O8Ar2H8cdT-PZbXXWFKmvhw5VCRfD-CCKsQHpr7AHBYZ1Yh4eKrQa0/pub?embedded=true
        "
        width="100%"
        height="600"
        style={{border:0//,
          //marginTop:-160
        }}
        title="Events"
        />

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

export default Mission;