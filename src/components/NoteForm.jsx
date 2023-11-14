import { useState } from "react";
import moment from "moment";

export default function NoteForm({ onAction, modalNote = {head: '', text: ''}, modalStyle, buttonText }) {
    const [note, setNote] = useState(modalNote.text);
    const [title, setTitle] = useState(modalNote.head);


    const handleAction = () => {
        if (note.trim() === '') {
            alert("Note can't be empty!");
            return;
        }

        if (modalStyle) {
            modalNote.head = title;
            modalNote.text = note;
            modalNote.updatedDate = moment().format("MMM Do h:mm A");
            
            onAction(modalNote);
        } else {

            const newNote = {
                id: moment().format('X'),
                head: title,
                text: note,
                createdDate: moment().format("MMM Do h:mm A"),
            };

            onAction(newNote);
        }
        
        setNote('');
        setTitle('');
    };

    return (
        <div className={`noteForm ${modalStyle ? 'modalStyleForm' : ''}`}>
            <div className={`noteTitleAndText ${modalStyle ? 'modalStyleTitleAndText' : ''}`}>
                <input className={`noteTitle ${modalStyle ? 'modalStyleTitle' : ''}`}
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea className={`noteText ${modalStyle ? 'modalStyleText' : ''}`}
                    rows='4'
                    placeholder="Your note..."
                    value={note}
                    onChange={e => setNote(e.target.value)}
                />
            </div>
            <button className={`btnAdd ${modalStyle ? 'modalStyleBtn' : ''}`} onClick={handleAction}>
                {buttonText}
            </button>
        </div>
    );
}