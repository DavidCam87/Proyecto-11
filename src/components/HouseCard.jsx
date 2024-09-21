import { Link } from 'react-router-dom';
import './HouseCard.css';
import Arryn from '../../public/assets/Arryn.jpg';
import Greyjoy from '../../public/assets/Greyjoy.jpg';
import Martell from '/assets/Martell.jpg';
import Stark from '/assets/Stark.jpg';
import Targaryen from '/assets/Targaryen.jpg';
import Tyrell from '/assets/Tyrell.jpg';
import Baratheon from '/assets/Baratheon.jpg';
import Lannister from '/assets/Lannister.jpg';
import Tully from '/assets/Tully.jpg';
import Clegane from '/assets/Clegane.jpg';
import Bolton from '/assets/Bolton.jpg';
import Mormont from '/assets/Mormont.jpg';
import Tarly from '/assets/Tarly.webp';
import Baelish from '/assets/Baelish.webp';
import Generica from '/assets/Generica.jpg';

const houseImages = {
  'House Arryn': Arryn,
  'Greyjoy': Greyjoy,
  'House Greyjoy': Greyjoy,
  'House Martell': Martell,
  'House Stark': Stark,
  'House Targaryen': Targaryen,
  'Targaryan': Targaryen,
  'Tyrell': Tyrell,
  'House Tyrell': Tyrell,
  'Baratheon': Baratheon,
  'House Baratheon': Baratheon,
  'House Lannister': Lannister,
  'Lannister': Lannister,
  'House Lanister': Lannister,
  'House Tully': Tully,
  'House Clegane': Clegane,
  'Bolton': Bolton,
  'Mormont': Mormont,
  'House Tarly': Tarly,
  'House Baelish': Baelish

};

// eslint-disable-next-line react/prop-types
function HouseCard({ house }) {
  const houseImage = houseImages[house] || Generica;

  return (
    <div className="house-card">
      <img src={houseImage} alt={house} />
      <h4>{house}</h4>
      <Link to={`/houses/${encodeURIComponent(house)}`}>Ver Detalles</Link>
    </div>
  );
}

export default HouseCard;