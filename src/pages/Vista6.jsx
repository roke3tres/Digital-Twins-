import React from 'react';
import CustomNavbar from '../components/Navbar';

const Vista6 = ({ user, goHome, logout }) => {
  return (
    <>
      <CustomNavbar user={user} goHome={goHome} logout={logout} />
    <div style={{ padding: 20 }}>
      <h2>Contactos Importantes</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae esse repellendus laboriosam. Tempore at harum autem fuga iure reiciendis tenetur reprehenderit repudiandae dolor perspiciatis qui sunt, numquam natus quidem totam!</p>
    </div>
    </>
  );
};

export default Vista6;
