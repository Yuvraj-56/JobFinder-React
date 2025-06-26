import React from 'react';
import Navbar from './components/Navbar';
import PageIntro from './components/PageIntro';
import About from './components/About';
import Home from './pages/Home';
import AboutBottom from './components/About'; // Corrected import
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen font-sans bg-gradient-to-br from-blue-500 via-purple-500 via-indigo-900 to-pink-700 overflow-hidden">

      {/* 🔮 Animated Gradient Blob */}
      <div className="fixed top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-[120px] opacity-30 animate-pulse z-0"></div>

      {/* 🔗 Page Content (in front of blob) */}
      <div className="relative z-10">
        <Navbar />
        <PageIntro />
        <Home />
        <About/>
        <Footer />
      </div>
      
    </div>
  );
}
