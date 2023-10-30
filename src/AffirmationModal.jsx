import './AffirmationModal.css'

//Bootstrap imports
import { Button, Modal } from 'react-bootstrap';

function AffirmationModal({ affirmation = 'test', changeDisplayModal, show }) {
    return (
        <div className="AffirmationModal">
            <Modal
                show={show}
                keyboard={false}
                backdrop="static"
                onHide={changeDisplayModal}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Something positive you saved:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {affirmation}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={changeDisplayModal}>
                    Close
                </Button>
                </Modal.Footer>

            </Modal>
        </div>
    )
}

export default AffirmationModal