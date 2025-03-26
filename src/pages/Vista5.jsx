import React from 'react';
import CustomNavbar from '../components/Navbar';

const Vista5 = ({ user, goHome, logout }) => {
  return (
    <>
    <CustomNavbar user={user} goHome={goHome} logout={logout} />
    <div style={{ padding: 20 }}>
      <h2>Información de Unidad</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit voluptate vel optio, laudantium commodi accusamus sint, ea consectetur nisi corporis praesentium adipisci reprehenderit incidunt, eaque sed! Nam esse rem dignissimos?</p>
    </div>
    </>
  );
};

export default Vista5;
