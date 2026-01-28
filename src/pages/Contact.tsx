import Navbar from '../components/Navbar';
import { MapPin, Phone, Mail, Printer } from 'lucide-react';
import './Contact.css';
import Footer from '../components/Footer';
import { useInertiaScroll } from '../hooks/useInertiaScroll';

export default function Contact() {
  // HOOK D'INERTIE
  useInertiaScroll(0.1);

  const locations = [
    {
      id: 1,
      title: 'Centre de production',
      address: '6, Rte de Courroux',
      city: 'CH-2800 Delémont',
      phone: '+41 (0) 32 421 19 19',
      phoneLink: '+41324211919',
      fax: '+41 (0) 32 421 19 00',
      email: 'info@pressor.ch',
      type: 'main',
      // backImage: '/images/delemont.jpg' // Ajoutez votre image plus tard
    },
    {
      id: 2,
      title: 'Succursale Saignelégier',
      address: '1A, Rue des Sommêtres',
      city: 'CH-2350 Saignelégier',
      type: 'branch',
      // backImage: '/images/saignelegier.jpg'
    },
    {
      id: 3,
      title: 'Succursale Moutier',
      address: '6, Rue de la Prévôté',
      city: 'CH-2740 Moutier',
      type: 'branch',
      // backImage: '/images/moutier.jpg'
    },
    {
      id: 4,
      title: 'Demotec - Porrentruy',
      address: '5a, Faubourg Saint-Germain',
      city: 'CH-2900 Porrentruy',
      phone: '+41 (0) 32 466 28 28',
      phoneLink: '+41324662828',
      email: 'info@demotec.ch',
      type: 'partner',
      // backImage: '/images/porrentruy.jpg'
    }
  ];

  return (
    <div className="contact">
      <Navbar />

      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <h1>Contactez-nous</h1>
        </div>
      </section>

      <section className="contact-content">
        
        {/* CARTE GOOGLE MAPS avec vos 4 adresses */}
        <div className="contact-map">
          <iframe 
            src="https://www.google.com/maps/d/embed?mid=1UrlgPFG2G2Tx5ddtvAiyrO1Jepn2XwOa&ehbc=2E312F" 
            width="100%" 
            height="500"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen
            loading="lazy"
            title="Carte Pressor - Nos 4 adresses"
          ></iframe>
          <div style={{ 
            textAlign: 'center', 
            fontSize: '0.9rem', 
            color: '#666', 
            marginTop: '15px',
            padding: '10px',
            background: 'white',
            borderRadius: '8px'
          }}>
            <strong>📍 Nos emplacements :</strong> Centre de production (Delémont) • Succursales (Saignelégier, Moutier) • Partenaire Demotec (Porrentruy)
          </div>
        </div>

        {/* GRILLE DES LOCATIONS avec effet flip */}
        <div className="locations-grid">
          {locations.map(location => (
            <div key={location.id} className={`contact-card location-${location.type}`}>
              
              {/* FACE AVANT (RECTO) */}
              <div className="card-front">
                <div className="card-header">
                  <MapPin className="location-icon" size={24} />
                  <h2>{location.title}</h2>
                </div>
                
                <div className="card-content">
                  <p className="address-line">{location.address}</p>
                  <p className="address-line">{location.city}</p>

                  {location.phone && (
                    <p className="contact-line">
                      <Phone size={16} />
                      <span>Tél : <a href={`tel:${location.phoneLink}`}>{location.phone}</a></span>
                    </p>
                  )}

                  {location.fax && (
                    <p className="contact-line">
                      <Printer size={16} />
                      <span>Fax : {location.fax}</span>
                    </p>
                  )}

                  {location.email && (
                    <p className="contact-line">
                      <Mail size={16} />
                      <span>Email : <a href={`mailto:${location.email}`}>{location.email}</a></span>
                    </p>
                  )}
                </div>
              </div>

              {/* FACE ARRIÈRE (VERSO) */}
              <div className="card-back">
                {/* Décommentez quand vous aurez vos images
                {location.backImage ? (
                  <img src={location.backImage} alt={location.title} className="card-back-image" />
                ) : (
                  <div className="card-back-placeholder">
                    Image à venir
                  </div>
                )}
                */}
                <div className="card-back-placeholder">
                  {location.title}
                  <br/>
                  <small style={{fontSize: '0.9rem', opacity: 0.9}}>📸 Image à venir</small>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>
      <Footer />
    </div>
  );
}