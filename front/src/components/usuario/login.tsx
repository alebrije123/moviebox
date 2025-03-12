import React, { useState } from "react";
import { Button, Form, Container, Row, Col, InputGroup } from "react-bootstrap";
import '../../css/login.css'; 

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Por favor, complete todos los campos.");
    } else {
      setError("");
      alert("¡Iniciado sesión correctamente!");
    }
  };

  return (
    <Container className="login-container">
      <h2>Iniciar sesión</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="formEmail" className="mb-3">
          <Col sm="12">
            <InputGroup>
              <InputGroup.Text>
                <i className="bi bi-person-fill"></i>
              </InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Usuario"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPassword" className="mb-4">
          <Col sm="12">
            <InputGroup>
              <InputGroup.Text>
                <i className="bi bi-lock-fill"></i>
              </InputGroup.Text>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputGroup.Text>
                <i className="bi bi-eye-slash-fill"></i>
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Iniciar sesión
        </Button>
      </Form>
    </Container>
  );
};
