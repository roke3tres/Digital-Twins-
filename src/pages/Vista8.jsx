import React from 'react';
import CustomNavbar from '../components/Navbar';

const Vista8 = ({ user, goHome, logout }) => {
  return (
    <>
      <CustomNavbar user={user} goHome={goHome} logout={logout} />
    <div style={{ padding: 20 }}>
      <h2>Facility Management</h2>
      <p>Plataforma personalizada</p>
      <p>Modelo Tandem</p>
    </div>
    </>
  );
};

export default Vista8;
