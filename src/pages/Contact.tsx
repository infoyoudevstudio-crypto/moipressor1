import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Printer } from 'lucide-react';
import './Contact.css';
import { useInertiaScroll } from '../hooks/useInertiaScroll';

export default function Contact() {
  useInertiaScroll(0.1);

  const locations = [
    { id: 1, title: 'Centre de production', address: '6, Rte de Courroux', city: 'CH-2800 Delémont', phone: '+41 (0) 32 421 19 19', phoneLink: '+41324211919', fax: '+41 (0) 32 421 19 00', email: 'info@pressor.ch', type: 'main' },
    { id: 2, title: 'Succursale Saignelégier', address: '1A, Rue des Sommêtres', city: 'CH-2350 Saignelégier', type: 'branch' },
    { id: 3, title: 'Succursale Moutier', address: '6, Rue de la Prévôté', city: 'CH-2740 Moutier', type: 'branch' },
    { id: 4, title: 'Demotec - Porrentruy', address: '5a, Faubourg Saint-Germain', city: 'CH-2900 Porrentruy', phone: '+41 (0) 32 466 28 28', phoneLink: '+41324662828', email: 'info@demotec.ch', type: 'partner' }
  ];

  return (
    <div className="contact">
      <Navbar />

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <h1>Une question, un projet ? Contactez-nous</h1>
        </div>
      </section>

      <section className="contact-content">
        {/* MAP */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1UrlgPFG2G2Tx5ddtvAiyrO1Jepn2XwOa&ehbc=2E312F"
            width="100%"
            height="500"
            style={{ border: 0, borderRadius: '12px' }}
            loading="lazy"
            title="Carte Pressor"
          />
        </div>

        {/* CARTES */}
        <div className="locations-grid">
          {locations.map(loc => (
            <div key={loc.id} className={`contact-card location-${loc.type}`}>
              {/* Chaque carte a sa perspective isolée */}
              <div className="card-inner">
                
                {/* RECTO */}
                <div className="card-front">
                  <div className="card-header">
                    <MapPin size={24} />
                    <h2>{loc.title}</h2>
                  </div>
                  <div className="card-content">
                    <p>{loc.address}</p>
                    <p>{loc.city}</p>
                    {loc.phone && <p className="contact-line"><Phone size={16} /><a href={`tel:${loc.phoneLink}`}>{loc.phone}</a></p>}
                    {loc.fax && <p className="contact-line"><Printer size={16} />{loc.fax}</p>}
                    {loc.email && <p className="contact-line"><Mail size={16} /><a href={`mailto:${loc.email}`}>{loc.email}</a></p>}
                  </div>
                </div>

                {/* VERSO */}
                <div className="card-back">
                  <img src="/images/logo2.png" alt={loc.title} className="card-back-image" />
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
