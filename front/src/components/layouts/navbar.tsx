import { useState } from "react";
import { Navbar, Nav, Container, Button, Modal, Form } from "react-bootstrap";
import "../../css/navbar.css";
import { Login } from "../usuario/login";
import { Home } from "../home/home";

interface MyNavbarProps {
  homeRef: React.RefObject<HTMLDivElement | null>;
}

export const MyNavbar = ({ homeRef }: MyNavbarProps) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="header-container-navbar">
        <Navbar variant="dark" className="shadow-sm">
          <Container>
            <Navbar.Brand href="/">MovieBox</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link onClick={() => setShowLogin(true)}>Inicio</Nav.Link>
                <Nav.Link>Registro</Nav.Link>
                <Nav.Link>Peliculas</Nav.Link>
                <Nav.Link>Reseñas</Nav.Link>
                <Nav.Link>Chat</Nav.Link>
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
        <section className="titles">
          <h1>MovieBox</h1>
          <p>
            Las películas son historias que nos acompañan para siempre.
            Encuentra las tuyas aquí.
          </p>
        </section>
        <div className="section-icon aboutme" data-anchor="aboutme">
          <i className="bi bi-caret-down-fill" onClick={scrollToHome}></i>
        </div>
      </div>

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
