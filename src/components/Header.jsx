import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header">
      <h1>Juego de Tronos</h1>
      <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <NavLink to="/" activeclassname="active" onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/characters" activeclassname="active" onClick={() => setIsOpen(false)}>
          Personajes
        </NavLink>
        <NavLink to="/houses" activeclassname="active" onClick={() => setIsOpen(false)}>
          Casas
        </NavLink>
      </nav>
      {/* Ícono de menú hamburguesa */}
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
    </header>
  );
}

export default Header;