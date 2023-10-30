//Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css'; // Import the Bootstrap CSS
import { Navbar, Container } from 'react-bootstrap';


function PageHeader() {
    return (
        <Navbar expand='lg' className="d-flex justify-content-center">
            <Container className='d-flex justify-content-center'>
                <Navbar.Brand>
                    An app to say nice things about yourself!
                </Navbar.Brand>
            </Container>

        </Navbar>
    )
}

export default PageHeader;