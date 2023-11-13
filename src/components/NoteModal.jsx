import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function NoteModal({ show, handleClose, modalInfo }) {
    
    return (
      <>  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{modalInfo.head}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalBody">{modalInfo.text}</Modal.Body>
        </Modal>
      </>
    );  
}
