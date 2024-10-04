import React, { useEffect, useState } from 'react';

const Tala = () => {
  const [talas, setTalas] = useState([]);

  useEffect(() => {
    const fetchTalas = async () => {
      const response = await fetch('/api/tala');
      const data = await response.json();
      setTalas(data);
    };

    fetchTalas();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Talas</h2>
      <ul>
        {talas.map((tala) => (
          <li key={tala.id}>{tala.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tala;
