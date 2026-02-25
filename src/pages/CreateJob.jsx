import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function CreateJob() {
    const nav = useNavigate();
    const {id} = useParams();

    // Form
    const [job, setJob] = useState("");
    const [location, setLocation] = useState("");
    const [type, setType] = useState("");
    const [contact, setContact] = useState("");
    const [deadline, setDeadline] = useState("");


    function handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:3000/jobs', {
    method: 'POST',
    body: JSON.stringify({
        job: job,
        location: location,
        type: type,
        contact: contact, 
        expiry_date: deadline,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .then(toast.success('Job Published!'))
    .then(() => nav('/')); }

  return (
    <div>
        <h3>Create Job</h3>
        <form type="submit" onSubmit={handleSubmit}>
        <label>Job</label>
        <input value={job} type="text" placeholder='' onChange={(e)=>setJob(e.target.value)}/> <br />

        <label>Location</label>
        <input value={location} type="text" placeholder='' onChange={(e)=>setLocation(e.target.value)}/> <br />

        <label>Type</label>
        <input value={type} type="text" placeholder='' onChange={(e)=>setType(e.target.value)}/> <br />

        <label>Deadline</label>
        <input value={deadline} type="text" placeholder='' onChange={(e)=>setDeadline(e.target.value)}/> <br />

        <label>Contact</label>
        <input value={contact} type="text" placeholder='' onChange={(e)=>setContact(e.target.value)}/> <br />

        <button>Submit</button>
        </form>
    </div>
  ) 
}