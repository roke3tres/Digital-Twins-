import React from 'react';
import CustomNavbar from '../components/Navbar';

const Vista7 = ({ user, goHome, logout }) => {
  return (
    <>
      <CustomNavbar user={user} goHome={goHome} logout={logout} />
    <div style={{ padding: 20 }}>
      <h2>Libro de quejas y Reclamos</h2>
      <p>Modelo Tandem</p>
    </div>
    </>
  );
};

export default Vista7;
