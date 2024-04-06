import React, { useState } from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import Navbar from '../Navbar';
import "./index.css"

function Contact() {

    const [username,setUsername] = useState("")
    const [description,setDescription] = useState("")
    const [error,setError] = useState("")
    const [success,setSuccess] = useState("")
    const [loading,setLoading] = useState(false)

    const onChangeDescription=(e)=>{
        setDescription(e.target.value)
    }

    const onChangeName=(e)=>{
        setUsername(e.target.value)
    }

    const onSubmit=async(e)=>{
        e.preventDefault()
       console.log("submitted contact page")
    }

  return (
    <div>
        <Navbar />
        <div className='contact-container'>
            <h3>Contact</h3>
            <form onSubmit={onSubmit}>
            {loading&&(
              <h6>Loading...</h6>
            )}
            <div>
              <input
                type="text"
                name="name"
                className='input-field'
                placeholder='Name'
                value={username}
                onChange={onChangeName}
                required
              />
            </div>
            <div>
                <textarea className='description-class' placeholder='Description' value={description}
                onChange={onChangeDescription}
                required></textarea>
                {/* type="textarea"
                name="textarea"
                className='description-class'
                placeholder='Description'
                value={description}
                onChange={onChangeDescription}
                required */}
            </div>
            {error&&(
              <span>{error}</span>
            )}
             {success&&(
              <span className='success-msg'>{success}</span>
            )}
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary btn-block"
            />
            </form>
        </div>
    </div>
  )
}

export default withRouter(Contact);