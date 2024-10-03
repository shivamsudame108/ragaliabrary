import React, { useEffect, useState } from 'react';

const Raga = () => {
  const [ragas, setRagas] = useState([]);
  const [selectedRaga, setSelectedRaga] = useState(null);

  useEffect(() => {
    const fetchRagas = async () => {
      const response = await fetch('/api/raga');
      const data = await response.json();
      setRagas(data);
    };

    fetchRagas();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Ragas</h2>
      <ul>
        {ragas.map((raga) => (
          <li key={raga.id} onClick={() => setSelectedRaga(raga)}>
            {raga.name}
          </li>
        ))}
      </ul>
      {selectedRaga && (
        <div>
          <h3>{selectedRaga.name}</h3>
          <p>{selectedRaga.description}</p>
        </div>
      )}
    </div>
  );
};

export default Raga;
