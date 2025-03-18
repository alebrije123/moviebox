import React from "react";
import { Container } from "react-bootstrap";
import "../../css/footer.css";
export const Footer = () => {
  return (
    <footer className="footer bg-dark text-light text-center py-3">
      <Container>
        <p className="mb-0">© {new Date().getFullYear()} MovieBox. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
};