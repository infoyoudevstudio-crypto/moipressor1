import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Gestion du scroll pour masquer/afficher la navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll vers le bas et > 100px → Masquer
        setIsVisible(false)
      } else {
        // Scroll vers le haut → Afficher
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
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