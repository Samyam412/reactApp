import './App.css';
import { useState } from 'react';

function App(props) {

  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll ? notes : notes.filter(n => n.important === true )

  const handleChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const handleAdd = (event) => {
    event.preventDefault()
    console.log(event.target)
  

  const note = {
    id: notes.length + 1,
    content: newNote,
    date: new Date().toISOString(),
    important: Math.random() < 0.5,
  }
  if (newNote !== '') setNotes(notes.concat(note))
  }

  return (
    <>
    <h2>Notes</h2>  
    <button onClick={() => setShowAll(!showAll)}>
      toggle
    </button>
    <ul>
      {notesToShow.map(note =>
        <li>
          <p>{note.content}</p>
          <p>{note.date}</p>
        </li>
      )} 
    
    </ul>

    <form> 
      <input  value={newNote} onChange={handleChange}/>
      <button onClick={handleAdd}>Add</button>
    </form>
    </>
  );
}

export default App;
