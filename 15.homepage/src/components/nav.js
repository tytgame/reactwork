import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">옷팝니다</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈으로</Nav.Link>
            <Nav.Link href="#features">특징</Nav.Link>
            <Nav.Link href="#pricing">가격</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default ColorSchemesExample;