export default function NoteItem({ note, onDelete, openModal }) {

  const handleDelete = () => {
    const confirmDelete = confirm('Are you sure you want to delete your note?');
    if (confirmDelete) {onDelete(note);}
  };

  return (
    <div className="note">
      <div className="noteBody" onClick={openModal}>
        <strong>{note.head}</strong>
        <p>{note.text}</p>
      </div>
      <div className="noteBottom">
        <p className="noteDate">{note.createdDate}<br />{note.updatedDate && `Updated ${note.updatedDate}`}</p>
        <button className="btnDel" onClick={handleDelete}>
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
}



