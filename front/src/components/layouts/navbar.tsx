import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "../../css/navbar.css";
export const MyNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <Navbar bg="primary" variant="dark" expand="md" className="shadow-sm" fixed="top">
      <Container>
        <Navbar.Brand href="/">MovieBox</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setMenuOpen(!menuOpen)} />
        <Navbar.Collapse id="basic-navbar-nav" className={menuOpen ? "show" : ""}>
          <Nav className="ms-auto">
            <Nav.Link >Inicio</Nav.Link>
            <Nav.Link >Registro</Nav.Link>
            <Nav.Link>Peliculas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

