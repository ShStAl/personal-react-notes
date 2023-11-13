import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import NoteForm from './components/NoteForm'
import NoteItem from './components/NoteItem';
import NoteModal from './components/NoteModal';

function App() {

  const[notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (noteToDelete) => {
     setNotes(notes.filter((note) => note !== noteToDelete));
  }; 

  const [showModal, setShowModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState({head: 'title', text: 'text'});

  const handleShowModal = (note) => {
    setShowModal(true);
    setSelectedNote(note);
  }
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedNote({head: 'title', text: 'text'});
  }
  
  return (
    <>
      <h1>The Notes</h1>
      <NoteForm onAddNote={addNote} />
      <div className="notesContainer">
        {notes.slice().reverse().map((note, index) => (
          <NoteItem key={index} note={note} onDelete={deleteNote} openModal={() => handleShowModal(note)} />
        ))}
      </div>
      <NoteModal show={showModal} handleClose={handleCloseModal} modalInfo={selectedNote}/>
    </>
  );
}

export default App