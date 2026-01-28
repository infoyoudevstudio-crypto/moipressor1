import { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import './Savoirfaire.css'
import Footer from '../components/Footer'

export default function Savoirfaire() {
  const [showButton, setShowButton] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)
  const isScrolling = useRef(false)
  const totalSections = 16 // 1 hero + 15 images
  const [isFreeScroll, setIsFreeScroll] = useState(false) // NOUVEAU : mode scroll libre
  
  const scrollDuration = 1500

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }

      // NOUVEAU : Détecter si on est dans la zone compétences/footer
      const competencesSection = document.querySelector('.competences-section')
      if (competencesSection) {
        const rect = competencesSection.getBoundingClientRect()
        if (rect.top <= window.innerHeight) {
          setIsFreeScroll(true)
        } else {
          setIsFreeScroll(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const smoothScrollTo = (targetPosition: number, duration: number) => {
    const startPosition = window.scrollY
    const distance = targetPosition - startPosition
    const startTime = performance.now()

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 
        ? 4 * t * t * t 
        : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    const animation = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = easeInOutCubic(progress)

      window.scrollTo(0, startPosition + distance * easeProgress)

      if (progress < 1) {
        requestAnimationFrame(animation)
      } else {
        isScrolling.current = false
      }
    }

    requestAnimationFrame(animation)
  }

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // NOUVEAU : Si on est en mode scroll libre, ne rien bloquer
      if (isFreeScroll) {
        return
      }

      if (isScrolling.current) {
        e.preventDefault()
        return
      }

      e.preventDefault()
      isScrolling.current = true

      const direction = e.deltaY > 0 ? 1 : -1
      const nextSection = Math.max(0, Math.min(totalSections - 1, currentSection + direction))

      if (nextSection !== currentSection) {
        setCurrentSection(nextSection)
        
        // NOUVEAU : Si on arrive à la dernière image, activer le scroll libre
        if (nextSection === totalSections - 1 && direction > 0) {
          const competencesSection = document.querySelector('.competences-section')
          if (competencesSection) {
            smoothScrollTo(competencesSection.getBoundingClientRect().top + window.scrollY - 100, scrollDuration)
            setIsFreeScroll(true)
          }
        } else {
          smoothScrollTo(nextSection * window.innerHeight, scrollDuration)
        }
      } else {
        isScrolling.current = false
      }

      setTimeout(() => {
        isScrolling.current = false
      }, scrollDuration + 100)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [currentSection, totalSections, scrollDuration, isFreeScroll])

  const scrollToTop = () => {
    setCurrentSection(0)
    setIsFreeScroll(false)
    isScrolling.current = true
    smoothScrollTo(0, scrollDuration)
  }

  return (
    <div className="savoirfaire">
      <Navbar />

      {/* HERO / FOND D'ÉCRAN INTERMÉDIAIRE */}
      <section className="sf-background">
        <div className="sf-background-overlay">
          <h2>Notre Savoir Faire</h2>
        </div>
      </section>

      {/* IMAGES STACK */}
      <section className="sf-images">
        <div className="sf-image">
          <img src="/images/roto6.jpg" alt="Impression rotative" />
        </div>

        <div className="sf-image">
          <img src="/images/façonnage3.jpeg" alt="Impression numérique" />
        </div>

        <div className="sf-image">
          <img src="/images/façonnage1.jpeg" alt="Finition & façonnage" />
        </div>

        <div className="sf-image">
          <img src="/images/façonnage2.jpeg" alt="Signalétique grand format" />
        </div>

        <div className="sf-image">
          <img src="/images/façonnage4.jpeg" alt="Supports variés" />
        </div>

        <div className="sf-image">
          <img src="/images/signalisation2.jpg" alt="Supports variés" />
        </div>

        <div className="sf-image">
          <img src="/images/signalisation3.jpg" alt="Supports variés" />
        </div>

        <div className="sf-image">
          <img src="/images/signalisation4.jpg" alt="Supports variés" />
        </div>

        <div className="sf-image">
          <img src="/images/signalisation5.jpg" alt="Supports variés" />
        </div>

        <div className="sf-image">
          <img src="/images/signalisation6.jpg" alt="Supports variés" />
        </div>

        <div className="sf-image">
          <img src="/images/vehicule1.jpg" alt="Supports variés" />
        </div>

        <div className="sf-image">
          <img src="/images/marquage bus1.JPG" alt="Supports variés" />
        </div>

        <div className="sf-image">
          <img src="/images/marquage bus2.JPG" alt="Supports variés" />
        </div>

        <div className="sf-image">
          <img src="/images/stylo.JPG" alt="Supports variés" />
        </div>

        <div className="sf-image">
          <img src="/images/textile.JPG" alt="Supports variés" />
        </div>
      </section>

      {/* ===== SECTION COMPÉTENCES ===== */}
      <section className="competences-section">
        <div className="competences-container">
          <div className="competence">
            <h3>Services</h3>
            <ul>
              <li>Conception graphique</li>
              <li>Composition</li>
              <li>Mise en page</li>
              <li>Relecture et correction</li>
              <li>Retouche d'images</li>
              <li>Gestion de mailing / d'abonnés</li>
              <li>Routage postal</li>
              <li>Gestion de stock clients</li>
              <li>Formalités postales et douanières</li>
              <li>Livraison</li>
              <li>Marquage de véhicules</li>
              <li>Étiquettes</li>
              <li>Signalisation</li>
              <li>Drapeaux</li>
              <li>Bâches</li>
              <li>Panneaux</li>
              <li>Roll-up</li>
              <li>Autocollants</li>
              <li>Objets publicitaires</li>
            </ul>
          </div>
          <div className="competence">
            <h3>Techniques</h3>
            <ul>
              <li>Impression offset H-UV et numérique</li>
              <li>Adressage</li>
              <li>Découpe à l'emporte-pièces</li>
              <li>Dorure</li>
              <li>Encartage</li>
              <li>Gaufrage</li>
              <li>Laminage</li>
              <li>Mise sous enveloppes</li>
              <li>Numérotation</li>
              <li>Rainage / Perforation</li>
              <li>Reliure</li>
              <li>Trous classeur</li>
              <li>Impression numérique grands formats</li>
              <li>Découpe et façonnage</li>
              <li>Sérigraphie</li>
              <li>Transferts</li>
            </ul>
          </div>
          <div className="competence">
            <h3>Conseils</h3>
            <ul>
              <li>Étude et conseil</li>
              <li>Identité visuelle</li>
              <li>Choix des supports</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />

      {/* BOUTON RETOUR EN HAUT */}
      {showButton && (
        <button 
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Retour en haut"
        >
          ↑
        </button>
      )}
    </div>
  )
}