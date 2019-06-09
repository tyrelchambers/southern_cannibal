import React, { useState } from 'react'
import './forms.scss';
import Axios from 'axios';
import Loader from './Loader/Loader';

export default function SubmitForm() {
  const [ payload, setPayload ] = useState({
    email: "",
    name: "",
    story: "",
    shared: ""
  });

  const [ errors, setErrors ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  return (
    <form className="form" netlify name="story-submission" method="POST">
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

      {loading &&
        <Loader />
      }

      {!loading &&
        <button className="btn btn-primary" onClick={e => {
          setLoading(true);
          submitHandler(e, payload, setErrors, setLoading)
        }}>Submit Story</button>
      }
    </form>
  )
}


const submitHandler = async (e, payload, setErrors, setLoading) => {
  e.preventDefault();
  const _ = [];

  if ( !payload.name ) _.push("Name must be provided");
  if ( !payload.story ) _.push("A story must be present");
  if ( payload.shared.length === 0) _.push("Have you shared this story? (Missing shared toggle)");
  
  if ( _.length > 0 ) return setErrors([..._]);
  
  setErrors([_]);
  await Axios.post("https://southern-cannibal-backend.herokuapp.com/submit", {
    ...payload
  })
  .then(res => {
    setLoading(false);
    alert(res.data.message);
  })
  .catch(console.log);
}