import React from 'react';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

export default function Home() {

  const [jobs, setJobs] = useState([]);

  useEffect(
      () => {
    fetch('http://localhost:3000/jobs')
    .then((response) => response.json())
    .then((data) => setJobs(data));
      }
    , [])

  return (
    <div>
      {
        jobs?.map((jobs) => (
          <div key={jobs.id} className='w-full border border-green'>
            <span><Link to={`/jobs/${jobs.id}`}>{jobs.job}</Link></span> <br />
            <span>Location: {jobs.location}</span> <br />
            <span>Type: {jobs.type}</span> <br />
            <span>Deadline: {jobs.expiry_date}</span> <br />
            <span>Contact: {jobs.contact}</span> 
          </div>
        ))
      }
    </div>
  )
}