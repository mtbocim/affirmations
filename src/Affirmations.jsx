import React, { useState, useEffect } from "react";
import AffirmationModal from "./AffirmationModal";
import FullAffirmationsListModal from "./FullAffirmationsListModal";
import './Affirmations.css'

//Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css'; // Import the Bootstrap CSS
import { Button, Form, InputGroup } from 'react-bootstrap';

function Affirmations() {
    const [affirmations, setAffirmations] = useState(JSON.parse(localStorage.getItem('affirmations')) || []);
    const [inputValue, setInputValue] = useState('');
    const [displayModal, setDisplayModal] = useState(false);
    const [modalAffirmation, setModalAffirmation] = useState('');
    const [displayFullList, setDisplayFullList] = useState(false)

    useEffect(() => {
        localStorage.setItem('affirmations', JSON.stringify(affirmations));
    }, [affirmations]);

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    function handleSave(e) {
        e.preventDefault()
        if (inputValue){
            setAffirmations([...affirmations, inputValue]);
            setInputValue('');
        }
    }

    function handleShowRandom() {
        if (affirmations.length > 0) {
            const randomIndex = Math.floor(Math.random() * affirmations.length);
            const randomAffirmation = affirmations[randomIndex];
            setModalAffirmation(randomAffirmation);
            setDisplayModal(true);
        }
    }

    function handleShowAll() {
        affirmations.length > 0 && setDisplayFullList(true)
    }

    function changeDisplayModal() {
        setDisplayModal(!displayModal);
    }

    function changeFullDisplayModal() {
        setDisplayFullList(!displayFullList);
    }

    return (
        <div className="Affirmations">
            {displayModal && <AffirmationModal affirmation={modalAffirmation} changeDisplayModal={changeDisplayModal} show={displayModal} />}
            {displayFullList && <FullAffirmationsListModal affirmations={affirmations} changeDisplayModal={changeFullDisplayModal} show={displayFullList} />}
            <Form className="d-flex flex-column w-75" onSubmit={handleSave}>
                <Form.Text
                    style={{ fontSize: "1.5em" }}
                    className="d-flex justify-content-center"
                >
                    You currently have&nbsp;
                    <span 
                        onClick={handleShowAll}
                        style={{
                            cursor:'pointer',
                            fontWeight:'bold'
                        }}
                        title="Click me to see all the things!"
                    >
                        {affirmations.length}
                    </span>
                    &nbsp;nice thing{affirmations.length !== 1 && 's'} you've said about yourself!
                </Form.Text>
                <div className="mt-3 d-flex justify-content-center align-content-md-around">
                    <InputGroup className="mb-3 w-50">
                        <Form.Control
                            type="text"
                            placeholder="Say something nice about yourself!"
                            value={inputValue}
                            onChange={handleChange}
                        />
                    </InputGroup>
                </div>
                <div className="Affirmations-button-container d-flex justify-content-center align-content-md-around">
                    <Button variant="primary" onClick={handleSave}>Save</Button>
                    <Button variant="success" onClick={handleShowRandom}>Random</Button>
                </div>

            </Form>
        </div>
    );
}

export default Affirmations;
