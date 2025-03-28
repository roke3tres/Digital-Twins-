import React from 'react';
import CustomNavbar from '../components/Navbar';

const Inicio = ({ user, onSelectRole }) => {
  return (
    <div>
      {/* Navbar */}
      <CustomNavbar user={user} goHome={() => {}} logout={() => window.location.reload()} />

      {/* Fondo blanco y negro con textos en fila */}
      <div style={{
        backgroundImage: "url('/torrehuergo.jpg')",        
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'grayscale(100%)',
        height: 'calc(100vh - 56px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'flex',
          gap: '4rem',
          flexDirection: 'row'
        }}>
          <span
            style={{
              color: 'white',
              fontSize: '6.5rem',
              cursor: 'pointer',
              fontWeight: '300'
            }}
            onClick={() => onSelectRole('Inquilino')}
          >
            Inquilino
          </span>

          <span
            style={{
              color: 'white',
              fontSize: '6.5rem',
              cursor: 'pointer',
              fontWeight: '300'
            }}
            onClick={() => onSelectRole('Propietario')}
          >
            Propietario
          </span>

          <span
            style={{
              color: 'white',
              fontSize: '6.5rem',
              cursor: 'pointer',
              fontWeight: '300'
            }}
            onClick={() => onSelectRole('Administrador')}
          >
            Administrador
          </span>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
