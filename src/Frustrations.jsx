import { useState, useEffect } from "react"
import './Frustrations.css'
import fire from './static/fire.gif'

//Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css'; // Import the Bootstrap CSS
import { Button, Form, InputGroup } from 'react-bootstrap';

function Frustrations() {
    const [frustrations, setFrustrations] = useState(JSON.parse(localStorage.getItem('frustrations')) || [])
    const [inputValue, setInputValue] = useState('')
    const [fireVisible, setFireVisible] = useState(false)

    useEffect(() => {
        localStorage.setItem('frustrations', JSON.stringify(frustrations))
    }, [frustrations])

    function handleChange(e) {
        setInputValue(() => e.target.value)
    }

    function handleSave() {
        if (inputValue) {
            setFrustrations(() => [...frustrations, inputValue])
            setInputValue(() => '')
        }

    }

    function handleBurn() {
        setFireVisible(true);
        setTimeout(() => {
            setFireVisible(false);
            setFrustrations([])
        }, 2000)
    }

    return (
        <div className="Frustrations">
            <div className={`Frustration-fire ${fireVisible ? 'fire-visible' : ''}`}>
                <img className="Frustrations-fire-image" alt='fire' src={fire} />
            </div>
            <Form className="d-flex flex-column w-75">
                <Form.Text
                    style={{ fontSize: "1.5em" }}
                    className="d-flex justify-content-center flex-column align-items-center"
                >
                    You currently have {frustrations.length} frustration{frustrations.length !== 1 && 's'} you could burn...
                    <br />
                    {/* <span className="d-flex justify-content-center align-content-md-around" style={{ fontSize: "0.5em", fontWeight: "bold" }}>
                        (only in your mind at the moment!)
                    </span> */}
                </Form.Text>
                <div className="mt-3 d-flex justify-content-center align-content-md-around">
                    <InputGroup className="mb-3 w-50">
                        <Form.Control
                            type="text"
                            placeholder="Enter your frustrations here..."
                            value={inputValue}
                            onChange={handleChange}
                        />
                    </InputGroup>
                </div>
                <div className="Frustrations-button-container d-flex justify-content-center align-content-md-around">
                    <Button variant="primary" onClick={handleSave}>Save</Button>
                    <Button variant="warning" onClick={handleBurn}>Burn</Button>
                </div>
            </Form>
        </div>
    )

}

export default Frustrations