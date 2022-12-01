import React, { useState } from 'react'
import './createstyle.css'
function CreateArea  ({addNote}) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(event){
    const {name, value} = event.target
    setNote(preValue =>{
      return{
        ...preValue,
        [name]: value
      }
    } )
  }
  function submitButton(event){
    addNote(note)
    event.preventDefault();
    setNote({
      title:"",
      content:"",
    })
  }
  return (
    <div>
      <form className='createform'>
        <input type='text'  placeholder='Title' name='title'
        onChange={handleChange}
        value={note.title}/>
        <p>
            <textarea name='content'   placeholder='Take a note..' 
             onChange={handleChange}
             value={note.content}></textarea>
        </p>
        <button onClick={submitButton}>Add</button>
      </form>
    </div>
  )
}

export default CreateArea
