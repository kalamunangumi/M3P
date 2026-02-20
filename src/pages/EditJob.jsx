import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function EditJob() {

    const nav = useNavigate();
    const {id} = useParams();

    // Form
    const [job, setJob] = useState("");
    const [location, setLocation] = useState("");
    const [type, setType] = useState("");
    const [contact, setContact] = useState("");
    const [deadline, setDeadline] = useState("");

    function handleUpdate(e) {
    e.preventDefault();

      fetch(`http://localhost:3000/jobs/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        id,
        job,
        location,
        type,
        contact, 
        expiry_date: deadline,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
      nav("/");
    }

  return (
    <div>
        <h3>Update Job</h3>
        <form type="submit" onSubmit={handleUpdate}>
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