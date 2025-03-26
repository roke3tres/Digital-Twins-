import React from 'react';
import { ListGroup } from 'react-bootstrap';
import CustomNavbar from '../components/Navbar';

const Home = ({ role, setView, user, goHome, logout }) => {
  const viewOptions = {
    Inquilino: [
      { label: 'Inicio', view: 'vista2' },
      { label: 'Información General', view: 'vista4' },
      { label: 'Información de Unidad', view: 'vista5' },
      { label: 'Contactos Importantes', view: 'vista6' },
    ],
    Propietario: [
      { label: 'Inicio', view: 'vista2' },
      { label: 'Información General', view: 'vista4' },
      { label: 'Información de Unidad', view: 'vista5' },
      { label: 'Contactos Importantes', view: 'vista6' },
      { label: 'Libro de quejas y Reclamos', view: 'vista7' },
    ],
    Administrador: [
      { label: 'Inicio', view: 'vista2' },
      { label: 'Información General', view: 'vista4' },
      { label: 'Información de Unidad', view: 'vista5' },
      { label: 'Contactos Importantes', view: 'vista6' },
      { label: 'Libro de quejas y Reclamos', view: 'vista7' },
      { label: 'Facility Management', view: 'vista8' },
    ],
  };

  return (
    <>
      <CustomNavbar user={user} goHome={goHome} logout={logout} />
      <div style={{ padding: 20 }}>
        <h2>Menú Principal ({role})</h2>
        <ListGroup>
          {viewOptions[role].map(({ label, view }, i) => (
            <ListGroup.Item key={i} action onClick={() => setView(view)}>
              {label.toUpperCase()}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </>
  );
};

export default Home;
