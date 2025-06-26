import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center p-3 mt-12">
      <p className="text-sm">
        © {new Date().getFullYear()} Yuvraj Singh. All rights reserved.
      </p>
      <p className="text-xs mt-2 opacity-70">Built with React, Vite & Tailwind CSS</p>
    </footer>
  );
}
