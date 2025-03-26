import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const CustomNavbar = ({ user, goHome, logout }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand style={{ cursor: 'pointer' }} onClick={goHome}>
          CRIBA | Torre Huergo
        </Navbar.Brand>
        <div className="d-flex align-items-center ms-auto gap-3">
          <Navbar.Text className="d-flex align-items-center">
            <i className="bi bi-person-circle me-2"></i> {user}
          </Navbar.Text>
          <i
            className="bi bi-box-arrow-right"
            style={{ fontSize: '1.2rem', cursor: 'pointer' }}
            title="Logout"
            onClick={logout}
          ></i>
        </div>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
