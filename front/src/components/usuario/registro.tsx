import React, { useState } from "react";
import { Button, Form, Container, Row, Col, InputGroup } from "react-bootstrap";
import "../../css/registro.css";

export const Registro = () => {
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
      <Container className="registro-container">
        <div className="iconregistro">
          <i className="bi bi-person-circle"></i>
        </div>
        <h2 className="text-center text-white h2-registro">
          Registrar usuario
        </h2>

        {error && <div className="alert alert-danger text-center">{error}</div>}

        <Form className="container-form-registro" onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail" className="mb-3 input-box">
            <InputGroup>
              <span className="input-icon-registro">
                <i className="bi bi-person-fill"></i>
              </span>
              <Form.Control type="text" placeholder="Nombre" />
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3 input-box">
            <InputGroup>
              <span className="input-icon-registro">
                <i className="bi bi-person-fill"></i>
              </span>
              <Form.Control type="text" placeholder="Apellidos" />
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="formDate" className="mb-3 input-box">
            <InputGroup>
              <span className="input-icon-registro">
                <i className="bi bi-cake2-fill"></i>
              </span>
              <Form.Control type="date" placeholder="Fecha de nacimiento" />
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3 input-box">
            <InputGroup>
              <span className="input-icon-registro">
                <i className="bi bi-envelope-fill"></i>
              </span>
              <Form.Control
                type="email"
                placeholder="Correo electronico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3 input-box">
            <InputGroup>
              <span className="input-icon-registro">
                <i className="bi bi-file-earmark-image"></i>
              </span>
              <div className="form-control d-flex align-items-center justify-content-between bg-white position-relative">
                <span className="text-muted">Foto de perfil</span>
                <Form.Control
                  type="file"
                  accept="image/*"
                  className="position-absolute opacity-0"
                  aria-label="Foto de perfil"
                />
              </div>
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3 input-box">
            <InputGroup>
              <span className="input-icon-registro">
                <i className="bi bi-film"></i>
              </span>
              <Form.Control type="text" placeholder="Pelicula favorita" />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formEmail" className="mb-3 input-box">
            <InputGroup>
              <span className="input-icon-registro">
                <i className="bi bi-person-fill"></i>
              </span>
              <Form.Control type="text" placeholder="Usuario" />
            </InputGroup>
          </Form.Group>

          <Form.Group
            controlId="formPassword"
            className="mb-4 input-box-registro"
          >
            <InputGroup>
              <span className="input-icon-registro">
                <i className="bi bi-lock-fill"></i>
              </span>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="input-icon-registro toggle-password">
                <i className="bi bi-eye-slash-fill"></i>
              </span>
            </InputGroup>
          </Form.Group>

          <div className="form-button-container">
            <Button
              variant="primary"
              type="submit"
              className="btn-registro w-75"
            >
              Guardar
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};
