import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'
import { useState } from 'react';
import NoteForm from './components/NoteForm'
import NoteItem from './components/NoteItem';
import NoteModal from './components/NoteModal';

function App() {

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState({head: '', text: ''});

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
    localStorage.setItem('notes', JSON.stringify([...notes, newNote]));
  };

  const updateNote = (updatedNote) => {
    handleCloseModal();

    const updatedNotes = notes.map((note) =>
      note.id === selectedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);

    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const deleteNote = (noteToDelete) => {
    const updatedNotes = notes.filter((note) => note.id !== noteToDelete.id);
    setNotes(updatedNotes);
    
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };
  
  const deleteAllNotes = () => {
    if (confirm("Delete all notes?")) {
      setNotes([]);
      localStorage.setItem('notes', JSON.stringify([]));
    }
    
  }

  const handleShowModal = (note) => {
    setShowModal(true);
    setSelectedNote(note);
  }
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedNote({head: '', text: ''});
  }
  
  return (
    <>
      <h1>The Notes</h1>
      <NoteForm 
        onAction={addNote}
        buttonText={<span className="material-symbols-outlined">add</span>}
      />
      <div className="notesContainer">
        {notes.slice().reverse().map((note, index) => (
          <NoteItem key={index} note={note} onDelete={deleteNote} openModal={() => handleShowModal(note)} />
        ))}
      </div>
      <NoteModal show={showModal} handleClose={handleCloseModal} modalNote={selectedNote} onSaveNote={updateNote}/>
      <button onClick={deleteAllNotes} 
      className={`${notes.length > 1 ? 'deleteAllBtnOn' : 'deleteAllBtnOff'}`}>
        <span className="material-symbols-outlined">delete_forever</span><br /><span>Delete all</span></button>
      
    </>
  );
}

export default App