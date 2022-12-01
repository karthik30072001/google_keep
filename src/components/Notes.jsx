import React from 'react'
import './notes.css'
function Notes({title,content,id,delNote}){
  function clickHandler(){
    delNote(id)
  }
  return(
    <>
    <div className='notes'>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={clickHandler} className='buttonNotes'>Del</button>
    </div>
    
    </>
  )
}

export default Notes
