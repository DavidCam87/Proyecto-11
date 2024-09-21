import { useEffect, useState } from 'react';
import CharacterCard from '../components/CharacterCard';
import HouseCard from '../components/HouseCard';
import './Home.css';

function Home() {
  const [characters, setCharacters] = useState([]);
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch('https://thronesapi.com/api/v2/Characters')
      .then(response => response.json())
      .then(data => {
        const shuffled = data.sort(() => 0.6 - Math.random());
        setCharacters(shuffled.slice(0, 6));
        const uniqueHouses = [...new Set(data.map(char => char.family))];
        const shuffledHouses = uniqueHouses.sort(() => 0.6 - Math.random());
        setHouses(shuffledHouses.slice(0, 6));
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="home">
      <h2>Bienvenido al Mundo de Juego de Tronos</h2>
      <div className="sections">
        <section className='charactersHome'>
          <h3>Personajes</h3>
          <div className="cards">
            {characters.map(character => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        </section>
        <section className='housesHome'>
          <h3>Casas</h3>
          <div className="cards">
            {houses.map((house, index) => (
              <HouseCard key={index} house={house} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;