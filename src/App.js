import React, { useState } from 'react'
// import Header from './components/Header.js'
// import NewHead from './components/NewHead.js'
import Drawer from './components/Drawer'
import LeftSide from './components/LeftSide'
import SearchBox from './components/SearchBox'
import RightSide from './components/RightSide'
import CreateArea from './components/CreateArea'
import './App.css'
import MainHead from './MainHead'
import { Create } from '@mui/icons-material'
import Notes from './components/Notes'
export default function App(){
  const [notes,setNotes] = useState([])
  
  function addNote(note){
    setNotes(preNotes=>{
      return [...preNotes, note];
    })
  };
  function delNote(id){
    setNotes(preNotes => {
      return preNotes.filter((note,index)=>{
        return index != id
      })
    })
  }
  return(
    <>
     <MainHead/>
     <CreateArea addNote={addNote} />  
     {notes.map((note,index) =>(
      <Notes delNote={delNote} key={index} id={index} title={note.title} content={note.content}/>
     )
      )}
    </>
  )
}