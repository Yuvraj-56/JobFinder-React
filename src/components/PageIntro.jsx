import React from 'react';

export default function PageIntro() {
  return (
    <section className="bg-gradient-to-r from-pink-500 to-indigo-800 text-white px-6 py-10 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to JobFinder 💼</h1>
        <p className="text-lg">
          Discover the latest tech jobs tailored for developers and designers. Whether you're looking for a remote opportunity or an on-site role, our board connects you with the best companies in the industry.
        </p>
      </div>
    </section>
  );
}
