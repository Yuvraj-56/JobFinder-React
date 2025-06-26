import React, { useState } from 'react';
import { jobs } from '../data/jobs';
import JobCard from '../components/JobCard';
import JobModal from '../components/JobModal';

export default function Home() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <>
      <div className="p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} onApply={() => setSelectedJob(job)} />
        ))}
      </div>

      {selectedJob && (
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </>
  );
}
