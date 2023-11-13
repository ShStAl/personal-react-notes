export default function NoteItem({ note, onDelete, openModal }) {

  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete your note?');
    if (confirmDelete) {onDelete(note);}
  };

  return (
    <div className="note">
      <div className="noteBody" onClick={openModal}>
        <strong>{note.head}</strong>
        <p>{note.text}</p>
      </div>
      <div className="noteBottom">
        <p className="noteDate">{note.createdDate}</p>
        <button className="btnDel" onClick={handleDelete}>
          <span className="material-symbols-outlined">delete_forever</span>
        </button>
      </div>
    </div>
  );
}



