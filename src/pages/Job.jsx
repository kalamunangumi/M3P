import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Job() {

  const [job, setJob] = useState([]);
  const {id} = useParams();
  const nav = useNavigate();

  useEffect(
      () => {
    fetch(`http://localhost:3000/jobs/${id}`)
    .then((response) => response.json())
    .then((data) => setJob(data));
      }
    , [])

    function onDelete () {
      fetch(`http://localhost:3000/jobs/${id}`, {
      method: 'DELETE',
    });
    }


  return (
    <div>
      {
        <>
        <div key={job.id} className='w-full border border-green'>
        <span>{job.job}</span> <br />
        <span>Location: {job.location}</span> <br />
        <span>Type: {job.type}</span> <br />
        <span>Deadline:
           {job.expiry_date}</span> <br />
        <span>Contact: {job.contact}</span>
        </div>
        <button onClick={()=>nav(-1)}>Back</button>
        <button onClick={() => {onDelete(), nav("/")}}>Delete</button>
        <button onClick={() => {onDelete(), nav(`/jobedit/${id}`)}}>Edit Job</button>
        </>
      }
    </div>
  )
}
