import React from 'react'

const Sidebar = ({notes, onAddNote,onDeleteNote, activeNote, setActiveNote,handleToggleDarkMode}) => {
  
  const sortedNotes = notes.sort((a,b) => b.lastModified - a.lastModified)
// const mode = document.querySelector('.bx-moon');
  return (
    <div className='app-sidebar'>

    <div className='app-sidebar-header'>
      <button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode) 
				} 
				className='toggle'
			>
        <i class='bx bx-moon' ></i>
        <i class='bx bx-sun' ></i>

			</button>
<h1 className='nf'>OP's Notes</h1>
<button onClick={onAddNote}>
<i class='bx bxs-file-plus' ></i>  </button>
    </div>
      <div className='app-sidebar-notes'>
        {sortedNotes.map((note) => (
          <div className={`app-sidebar-note  ${note.id === activeNote && 'active'}`} onClick={() => setActiveNote(note.id)}>
        <div className='sidebar-note-title'>
          <strong>{note.title}</strong>
          <button onClick={() => onDeleteNote(note.id)}
          
          ><i class='bx bx-trash' ></i></button>
        </div>
        <p>{note.body && note.body.substr(0,50) + "..."}</p>


        <small className='note-meta'>
          Last modified {new Date(note.lastModified).toLocaleDateString("en-GB", {
            hour:"2-digit", minute:"2-digit"
          })}
        </small>
</div>
        ))}
      
      </div>
      </div>
  )
}


export default Sidebar;