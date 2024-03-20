import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

const Header: React.FC = () => {
  return (
    <>
    <h1>A(I)dventure</h1>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/">
              <Nav.Link href="/">Home</Nav.Link>
            </Link>

            {/* <Link to="/carousel">
              <Nav.Link href="/carousel">Carousel</Nav.Link>
            </Link>

            <Link to="/collection">
              <Nav.Link href="/collection">Collection</Nav.Link>
            </Link> */}


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header;