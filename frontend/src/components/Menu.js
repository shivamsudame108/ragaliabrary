import React from 'react';
import { useHistory } from 'react-router-dom';

const Menu = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Raga Library</h1>
      <button onClick={() => history.push('/raga')}>Raga</button>
      <button onClick={() => history.push('/tala')}>Tala</button>
      <button onClick={() => history.push('/search')}>Search</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Menu;
