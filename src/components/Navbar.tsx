import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo2.png" alt="Logo imprimerie" />
      </div>

      {/* Burger Menu Mobile */}
      <button
        className={`burger ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
       

        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link>
        </li>
        <li>
          <Link to="/apropos" onClick={() => setMenuOpen(false)}>À propos</Link>
        </li>
        <li>
          <Link to="/savoir-faire" onClick={() => setMenuOpen(false)}>Savoir-faire</Link>
        </li>
        <li>
          <a href="https://catalogue.pressor.ch/" target="_blank" rel="noopener noreferrer">
            Notre catalogue
          </a>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contactez-nous</Link>
        </li>
      </ul>
    </header>
  )
}
