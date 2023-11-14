import Modal from 'react-bootstrap/Modal';
import NoteForm from './NoteForm';

export default function NoteModal({ show, handleClose, modalNote, onSaveNote}) {

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <p className='modalTitle'>
            Created: {modalNote.createdDate}
            <br />{modalNote.updatedDate && `Updated: ${modalNote.updatedDate}`}
          </p>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <NoteForm
            modalStyle={true}
            modalNote={modalNote}
            onAction={onSaveNote}
            buttonText={<span className="material-symbols-outlined">save</span>}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
