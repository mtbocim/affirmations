
//Bootstrap imports
import { Button, Modal } from 'react-bootstrap';

function FullAffirmationsListModal({ affirmations, changeDisplayModal, show }) {
    return (
        <div className="FullAffirmationsListModal">
            <Modal
                show={show}
                keyboard={false}
                backdrop="static"
                onHide={changeDisplayModal}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>All the positive you saved:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {affirmations.map((affirmation, index) => (
                        <div key={index}>{affirmation}</div>
                    ))}
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

export default FullAffirmationsListModal