import React, { useState } from 'react';

export default function JobApplyModal({ job, onClose }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    portfolio: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false); // ✅ state to show thank-you

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // ✅ mark as submitted
    setTimeout(() => {
      onClose(); // ✅ close modal after 2 sec
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white text-black w-full max-w-lg p-6 rounded-2xl shadow-xl relative">
        <button onClick={onClose} className="absolute top-2 right-4 text-2xl font-bold">&times;</button>

        {/* ✅ Thank-you screen */}
        {submitted ? (
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold text-purple-700 mb-2">🎉 Thanks for applying!</h2>
            <p className="text-gray-600">We’ll review your application and get back to you soon.</p>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-1">Apply for {job.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{job.company} — {job.location}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
              <input
                name="portfolio"
                placeholder="LinkedIn or Portfolio URL"
                value={form.portfolio}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
              <textarea
                name="message"
                placeholder="Why are you a good fit?"
                value={form.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border rounded-md"
              />
              <button
                type="submit"
                className="w-full bg-purple-700 text-white font-semibold py-2 rounded-lg hover:bg-purple-800 transition"
              >
                Submit Application
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
