import { useState } from "react";
import { Navbar, Nav, Container, Button, Modal, InputGroup, Form } from "react-bootstrap";
import "../../css/navbar.css";
import { Login } from "../usuario/login";

export const MyNavbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <Navbar variant="dark" className="shadow-sm" >
        <Container>
          <Navbar.Brand href="/">MovieBox</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => setShowLogin(true)}>Inicio</Nav.Link>
              <Nav.Link>Registro</Nav.Link>
              <Nav.Link>Peliculas</Nav.Link>
              <Nav.Link>Reseñas</Nav.Link>
            </Nav>
            <Form className="d-flex ms-3">
              <Form.Control
                type="search"
                placeholder="Buscar..."
                className="me-2"
                aria-label="Buscar"
              />
              <Button variant="outline-light">
                <i className="bi bi-search"></i>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        show={showLogin}
        onHide={() => setShowLogin(false)}
        centered
        className="custom-modal"
      >
        <Login />
      </Modal>
    </>
  );
};
