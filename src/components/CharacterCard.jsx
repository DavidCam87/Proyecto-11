/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import '../components/CharacterCard.css';

// eslint-disable-next-line react/prop-types
function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img src={character.imageUrl} alt={character.fullName} />
      <h4>{character.fullName}</h4>
      <p>{character.title}</p>
      <Link to={`/characters/${character.id}`}>Ver Detalles</Link>
    </div>
  );
}

export default CharacterCard;