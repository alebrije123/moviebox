import React, { useState } from "react";
import { Button, Form, Container, Row, Col, InputGroup } from "react-bootstrap";
import "../../css/login.css";

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
    <>
      <Container className="login-container">
        <div className="iconLogin">
          <i className="bi bi-person-circle"></i>
        </div>
        <h2 className="text-center text-white">Iniciar sesión</h2>

        {error && <div className="alert alert-danger text-center">{error}</div>}

        <Form className="container-form" onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail" className="mb-3 input-box">
            <InputGroup>
              <span className="input-icon">
                <i className="bi bi-person-fill"></i>
              </span>
              <Form.Control
                type="email"
                placeholder="Usuario"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-4 input-box">
            <InputGroup>
              <span className="input-icon">
                <i className="bi bi-lock-fill"></i>
              </span>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="input-icon toggle-password">
                <i className="bi bi-eye-slash-fill"></i>
              </span>
            </InputGroup>
          </Form.Group>

          <Button variant="primary" type="submit" className="btn-login">
            Iniciar sesión
          </Button>
        </Form>
      </Container>
    </>
  );
};
