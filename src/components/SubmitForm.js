import React, { useState } from 'react'
import './forms.scss';
import Axios from 'axios';

export default function SubmitForm() {
  const [ payload, setPayload ] = useState({
    email: "",
    name: "",
    story: "",
    shared: ""
  });

  const [ errors, setErrors ] = useState([]);

  return (
    <form className="form">
      <ul>
        {errors.map((x, id) => (
          <li key={id} className="error-item">
            {x}
          </li>
        ))}
      </ul>
      <div className="field-group">
        <label htmlFor="name" className="form-label">Name or Alias</label>
        <input type="text" className='input' name="name" onChange={e => setPayload({...payload, [e.target.name]: e.target.value})} required/>
      </div>

      <div className="field-group">
        <label htmlFor="email" className="form-label">Email (Optional: Used to collect additional info on stories)</label>
        <input type="email"  className='input' name="email" onChange={e => setPayload({...payload, [e.target.name]: e.target.value})}/>
      </div>

      <div className="field-group">
        <label htmlFor="story" className="form-label">The Story</label>
        <textarea type="text" className="textarea" name="story" onChange={e => setPayload({...payload, [e.target.name]: e.target.value})} required/>
      </div>

      <div className="field-group">
        <label htmlFor="sharedStory" className="form-label">Have you shared this story with another narrator?</label>

          <div className="radios">
            <input type="radio" name="sharedStory" value="yes" onChange={() => setPayload({...payload, shared: true})}/>
            <p>Yes</p>
          </div>

          <div className="radios">
            <input type="radio" name="sharedStory" value="no" onChange={() => setPayload({...payload, shared: false})}/>
            <p>No</p>
          </div>
      </div>

      <button className="btn btn-primary" onClick={e => submitHandler(e, payload, errors, setErrors)}>Submit Story</button>
    </form>
  )
}


const submitHandler = async (e, payload, errors, setErrors) => {
  e.preventDefault();
  const _ = [];

  if ( !payload.name ) _.push("Name must be provided");
  if ( !payload.story ) _.push("A story must be present");
  if ( payload.shared !== true || payload.shared !== false) _.push("Have you shared this story? (Missing shared toggle)");
  
  if ( _.length > 0 ) return setErrors([..._]);
  
  setErrors([_]);
  await Axios.post("https://southern-cannibal-backend.herokuapp.com/submit", {
    ...payload
  })
  .then(res => alert(res.data.message))
  .catch(console.log);
}