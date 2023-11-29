import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState('Enter Text Here');

    function handleUpClick(){
        let newText = text.toUpperCase();
        setText(newText);
    }
    function handleOnChange(event){
        setText(event.target.value)
    }
  return (
    <>
    <h1>{props.heading}</h1>
    <div className='mb-3'>
        <textarea value={text} onChange={handleOnChange} className='form-control' id='myBox' rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
        </>
  )
}

export default TextForm;
