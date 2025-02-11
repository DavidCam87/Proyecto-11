import { useEffect, useState } from 'react';
import HouseCard from '../components/HouseCard';
import './Houses.css';

function Houses() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch('https://thronesapi.com/api/v2/Characters')
      .then(response => response.json())
      .then(data => {
        //!Se filtran solo las casas
        const filteredHouses = [...new Set(
          data.filter(char => char.family).map(char => char.family)
        )];
        setHouses(filteredHouses);
      })
      .catch(error => console.error('Error fetching houses:', error));
  }, []);

  return (
    <div className="houses">
      <h2>Casas</h2>
      <div className="cards">
        {houses.length > 0 ? (
          houses.map((house, index) => <HouseCard key={index} house={house} />)
        ) : (
          <p>No se encontraron casas.</p>
        )}
      </div>
    </div>
  );
}

export default Houses;