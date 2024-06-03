import React, { useState } from 'react'
import './Contactpage.css'

export default function Contact
() {
const [name, setname ] =useState("");
const [Email, setEmail ] =useState("");
const [Message, setMessage ] =useState("");
return (
    
    <div>
        <div>
        <h2>Contact</h2>
        </div>
        <form className='from-group>'>
            <label htmlFor='name'>Name
            <input type='text' id='name' name='name' value={name} onChange={e => setname(e.target.value)}>

            </input>

            </label>
        </form>
        <form className='from-group>'>
            <label htmlFor='Email'>Email
            <input type='text' id='Email' name='Email' value={Email} onChange={e => setEmail(e.target.value)}>
            </input>

            </label>
        </form>
       <form className='from-group>'>
            <label htmlFor='Message'>Message
            <textarea type='text' id='Message' name='Message' value={Message} onChange={e => setMessage(e.target.value)}>

            </textarea>

            </label>
        </form>
<button type='Submit' >Send</button>
    </div>
  )
}



