import React from 'react'

function TextForm(props) {
  return (
    <>
    <h1>{props.heading}</h1>
    <div className='mb-3'>
        <label htmlFor='myBox' className='form-label'>Example textarea</label>
        <textarea className='form-control' id='myBox' rows="3"></textarea>
        </div></>
  )
}

export default TextForm;
