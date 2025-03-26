import React from 'react';
import CustomNavbar from '../components/Navbar';

const Vista4 = ({ user, goHome, logout }) => {
  return (
    <>
     <CustomNavbar user={user} goHome={goHome} logout={logout} />
    <div style={{ padding: 20 }}>
      <h2>Información General</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus soluta nulla, cumque cum vel quibusdam itaque voluptas temporibus hic rerum ex eos, sit vero perferendis! Dolores quam officia sed sint!.</p>
    </div>
    </>
  );
};

export default Vista4;

