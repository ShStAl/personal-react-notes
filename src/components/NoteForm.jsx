import { useState } from "react";
import moment from "moment";

export default function NoteForm({ onAddNote }) {
    const [note, setNote] = useState('');
    const [title, setTitle] = useState('');

    const handleAddNote = () => {
        if (note.trim() === '') return;

        const newNote = {
            head: title,
            text: note,
            createdDate: moment().format("MMM Do h:mm A"),
        };

        onAddNote(newNote);

        setNote('');
        setTitle('');
    };

    return (
        <div className="noteForm">
            <div className="noteTitleAndText">
                <input className="noteTitle"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea className="noteText"
                    rows='4'
                    placeholder="Your note..."
                    value={note}
                    onChange={e => setNote(e.target.value)}
                />
            </div>
            <button className="btnAdd" onClick={handleAddNote}>
                <span className="material-symbols-outlined">add</span>
            </button>
        </div>
    );
}