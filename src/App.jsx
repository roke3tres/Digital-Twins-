import React, { useState } from 'react';
import Login from './pages/Login';
import Inicio from './pages/Inicio';
import Home from './pages/Home';
import Vista2 from './pages/Vista2';
import Vista4 from './pages/Vista4';
import Vista5 from './pages/Vista5';
import Vista6 from './pages/Vista6';
import Vista7 from './pages/Vista7';
import Vista8 from './pages/Vista8';

function App() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [view, setView] = useState('login');

  const handleLogin = (username) => {
    setUser(username);
    setView('inicio');
  };

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setView('home');
  };

  const goHome = () => {
    setView('home');
  };

  const handleLogout = () => {
    setUser(null);
    setRole(null);
    setView('login');
  };

  const renderView = () => {
    switch (view) {
      case 'login':
        return <Login onLogin={handleLogin} />;
      case 'inicio':
        return <Inicio user={user} onSelectRole={handleRoleSelect} />;
      case 'home':
        return <Home role={role} setView={setView} />;
      case 'vista2':
        return <Vista2 user={user} goHome={goHome} logout={handleLogout} />;
      case 'vista4':
        return <Vista4 user={user} goHome={goHome} logout={handleLogout} />;
      case 'vista5':
        return <Vista5 user={user} goHome={goHome} logout={handleLogout} />;
      case 'vista6':
        return <Vista6 user={user} goHome={goHome} logout={handleLogout} />;
      case 'vista7':
        return <Vista7 user={user} goHome={goHome} logout={handleLogout} />;
      case 'vista8':
        return <Vista8 user={user} goHome={goHome} logout={handleLogout} />;
      default:
        return <Login onLogin={handleLogin} />;
    }
  };

  return <>{renderView()}</>;
}

export default App;
