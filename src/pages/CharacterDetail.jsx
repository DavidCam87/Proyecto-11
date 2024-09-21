import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CharacterDetail.css';

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
      .then(response => response.json())
      .then(data => setCharacter(data))
      .then(() => setLoading(false))
      .catch(error => {
        console.error('Error fetching character details:', error)
        setError('Hubo un problema al cargar los datos');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>{error}</p>;


  return (
    <div className="character-detail">
      {character ? (
        <>
          <img src={character.imageUrl} alt={character.fullName} />
          <h2>{character.fullName}</h2>
          <p><strong>Título:</strong> {character.title}</p>
          <p><strong>Casa:</strong> {character.family}</p>
        </>
      ) : (
        <p>No se encontraron miembros</p>
      )}
    </div>
  );

}

export default CharacterDetail;