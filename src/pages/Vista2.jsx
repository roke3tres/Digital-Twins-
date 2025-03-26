import React from 'react';
import CustomNavbar from '../components/Navbar';

const Vista2 = ({ user, goHome, logout }) => {
  return (
    <>
      <CustomNavbar user={user} goHome={goHome} logout={logout} />
      <div style={{ padding: 20 }}>
        <h2>Inicio</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt provident voluptate impedit, asperiores saepe autem esse, perferendis eum repellendus dolorem dignissimos expedita! Nemo, natus? Ratione laborum fuga eum ea tempore?</p>
      </div>
    </>
  );
};

export default Vista2;
