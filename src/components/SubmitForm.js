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

  return (
    <form className="form">
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

      <button className="btn btn-primary" onClick={e => submitHandler(payload)}>Submit Story</button>
    </form>
  )
}


const submitHandler = async (payload) => {
  await Axios.post("http://localhost:3001/submit", {
    ...payload
  })
  .then(res => alert(res.data.message))
  .catch(console.log);
}