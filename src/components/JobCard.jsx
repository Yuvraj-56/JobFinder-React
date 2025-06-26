import React from 'react';

export default function JobCard({ job, onApply }) {
  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-105 transition transform text-white">
      <h2 className="text-xl font-bold">{job.title}</h2>
      <p className="text-sm opacity-80 mb-1">{job.company} — {job.location}</p>
      <p className="text-md font-semibold">{job.salary}</p>
      <p className="text-sm mt-2">{job.description}</p>
      <button
  onClick={onApply}
  className="mt-4 px-5 py-2 bg-gradient-to-r from-white to-gray-300 text-black font-bold rounded-full hover:from-purple-200 hover:to-white transition animate-pulse"
>
  Apply Now
</button>

    </div>
  );
}
