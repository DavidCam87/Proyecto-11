import { useEffect, useState } from 'react';
import CharacterCard from '../components/CharacterCard';
import './Characters.css';

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://thronesapi.com/api/v2/Characters')
      .then(response => response.json())
      .then(data => setCharacters(data))
      .catch(error => console.error('Error fetching characters:', error));
  }, []);

  return (
    <div className="characters">
      <h2>Personajes</h2>
      <div className="cards">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default Characters;