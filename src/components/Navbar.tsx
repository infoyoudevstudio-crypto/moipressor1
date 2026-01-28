import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 400) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`header ${showNavbar ? 'visible' : 'hidden'}`}>
      <nav className="navbar">
        <div className="logo">
          <img src="/images/logo2.png" alt="Logo imprimerie" />
        </div>

        <ul className="nav-links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/apropos">À propos</Link></li>
          <li><Link to="/savoir-faire">Savoir-faire</Link></li>
          <li>
            <a href="https://catalogue.pressor.ch/" target="_blank" rel="noopener noreferrer">
              Notre catalogue
            </a>
          </li>
          <li><Link to="/contact">Contactez-nous</Link></li>
        </ul>
      </nav>

      {/* BANDE BRUNAIRE CMJN */}
      <div className="brunaire">
        <span className="c"></span>
        <span className="m"></span>
        <span className="j"></span>
        <span className="n"></span>
      </div>
    </header>
  )
}
