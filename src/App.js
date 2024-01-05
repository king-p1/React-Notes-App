import { useEffect, useState } from 'react';
import uuid from 'react-uuid'
import './App.css';
import Main from './Main';
import Sidebar from './Sidebar';


function App() {
  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);
  const [activeNote, setActiveNote] = useState(false);
	const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // if (localStorage.getItem('notes')){  localStorage.notes ? JSON.parse(localStorage.notes) : []
      localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

const onAddNote = () =>{
const newNote = {
  id: uuid(),
title: "Untitled Note",
body:"",
lastModified:Date.now()
}
setNotes([newNote,...notes])

}

const onUpdateNote = (updatedNote) => {
  const updatedNotesArr = notes.map((note) =>{
    if(note.id === activeNote){
      return updatedNote
    }
    return note
  })
  setNotes(updatedNotesArr)
}

const onDeleteNote = (idToDelete) =>{
  // let updatedNotes = notes.filter(note=> note.id !== selectedId)
  setNotes(notes.filter((note) =>note.id !== idToDelete))
}

const getActiveNote = () => {
  return notes.find((note) => note.id === activeNote
);}


  return (
    <div className={`${darkMode && 'dark-mode'}`}>
    <div className="App">
<>
<Sidebar notes={notes} onAddNote={onAddNote} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote}  handleToggleDarkMode={setDarkMode}/>
<Main activeNote={getActiveNote()}  onUpdateNote={onUpdateNote}/>

</> 
 </div>  
</div>
  );
}

export default App;
