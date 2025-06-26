import React from 'react'
import profilePic from '../assets/profile.jpg' // <-- Add your image in src/assets/

export default function About() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 p-8 bg-gradient-to-r from-blue-800 to-pink-500 text-white">
      <div className="md:w-1/2 flex justify-center">
        <img
          src={profilePic}
          alt="Profile"
          className="rounded-3xl shadow-2xl w-60 h-60 object-cover border-4 border-white"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">👋 About Me</h2>
        <p className="text-lg leading-relaxed">
          I’m a passionate web developer focused on building beautiful and functional web applications. With a deep love for clean code, modern design, and user-centric thinking, I create interfaces that are both efficient and enjoyable to use. I specialize in React, Tailwind CSS, and Node.js, and love turning ideas into reality.
        </p>
        <p className="mt-4 text-md">
          🚀 Always learning. Always improving.
        </p>
      </div>
    </section>
  )
}
