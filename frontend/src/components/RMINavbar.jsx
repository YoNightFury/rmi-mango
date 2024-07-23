import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function RMINavbar() {
  return (
    <>
      <Navbar fixed='top' bg="success" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/catalog">Catalog</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/faqs">FAQs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default RMINavbar;