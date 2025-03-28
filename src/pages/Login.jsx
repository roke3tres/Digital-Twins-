import React, { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import '../index.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username);
    }
  };

  return (
    <>
      {/* Fondo blanco y negro difuminado */}
      <div style={{
           backgroundImage: "url('/torrehuergo.jpg')",    
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'grayscale(100%) blur(4px)',
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: -1
      }} />

      {/* Contenido centrado */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        zIndex: 1,
        padding: '0 1rem',
        textAlign: 'center'
      }}>
        <h1 style={{
          color: 'white',
          fontSize: '9.5rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          maxWidth: '100vw'
        }}>
          TORRE HUERGO
        </h1>

        <Card style={{ padding: 30, minWidth: 300 }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Button variant="primary" type="submit">Login</Button>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Login;
