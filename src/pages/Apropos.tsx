import { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Apropos.css';
import { useInertiaScroll } from '../hooks/useInertiaScroll';

// Types pour l'accordéon
interface AccordionItemProps {
  value: string;
  title: string;
  children: React.ReactNode;
  openItem: string | null;
  onToggle: (value: string) => void;
}

// Composant Accordéon simple
const AccordionItem = ({ value, title, children, openItem, onToggle }: AccordionItemProps) => {
  const isOpen = openItem === value;
  
  return (
    <div className="accordion-item">
      <button 
        className="accordion-trigger"
        onClick={() => onToggle(value)}
        aria-expanded={isOpen}
      >
        <span className="accordion-title subtitle-responsive">{title}</span>
        <span className={`accordion-indicator ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="accordion-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function Apropos() {
  const chiffresRef = useRef<HTMLDivElement | null>(null);
  const [openItem, setOpenItem] = useState<string | null>('b'); // "b" ouvert par défaut

  // HOOK D'INERTIE avec momentum
  useInertiaScroll(0.1); // 0.1 = fluide, 0.15 = plus rapide

  useEffect(() => {
    const chiffres = [
      { id: 'chiffre-experience', value: 140 },
      { id: 'chiffre-collaborateurs', value: 130 },
    ];

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            chiffres.forEach(chiffre => {
              const duration = 2000;
              const stepTime = Math.max(Math.floor(duration / chiffre.value), 20);
              let current = 0;

              const interval = window.setInterval(() => {
                current += 1;
                if (current > chiffre.value) {
                  current = chiffre.value;
                  clearInterval(interval);
                }
                const el = document.getElementById(chiffre.id);
                if (el) el.innerText = current.toString();
              }, stepTime);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (chiffresRef.current) observer.observe(chiffresRef.current);
    return () => observer.disconnect();
  }, []);

  const handleToggle = (value: string) => {
    setOpenItem(openItem === value ? null : value);
  };

  const accordionItems = [
    {
      value: 'a',
      title: 'Notre histoire',
      content: (
        <>
          <img
            src="/images/siege.jpg"
            alt="Icône histoire"
            className="stack-card-icon img-responsive"
          />
          <p className="text-responsive">
            Principal centre d'impression et d'arts graphiques du canton du Jura et du Jura bernois.
          </p>
          <p className="text-responsive">
            Au bénéfice d'un grand savoir-faire et d'une expérience de plus de cent trente ans dans le domaine des arts graphiques, Pressor est un partenaire reconnu en Suisse romande pour ses prestations de haute qualité.
          </p>
          <p>Spécialiste dans l'impression offset et numérique, mais également dans la réalisation de signalisation et d'objets publicitaires, Pressor est à même de fournir une palette très large de prestations. </p>
        </>
      )
    },
    {
      value: 'b',
      title: 'Notre engagement',
      content: (
        <>
          <p className="text-responsive">
            Les services industriels de la Ville de Delémont ont décerné à Pressor SA les certificats{' '}
            <a href="https://democrate.ch/sites/default/files/pressor_sa-certificats-opale-ambre-2025.pdf" target="_blank" rel="noopener noreferrer" className="groupe-link">
              OPALE et AMBRE
            </a>.
          </p>
          <p className="text-responsive">Ceux-ci attestent de la provenance de l'énergie consommée par l'entreprise.</p>
        </>
      )
    },
    {
      value: 'c',
      title: 'Notre équipe',
      content: (
        <p className="text-responsive">
          Une équipe de professionnels expérimentés, engagés chaque jour à garantir précision, qualité et fiabilité.
        </p>
      )
    }
  ];

  return (
    <div className="apropos">
      <Navbar />

      {/* HERO */}
      <section className="apropos-hero flex-center">
        <div className="apropos-hero-overlay">
          <h2 className="title-responsive">A propos de nous</h2>
        </div>
      </section>

     {/* ACCORDION SECTION + DEMOCRATE MEDIA */}
      <section className="apropos-stack section-padding">
        <div className="container-wide">
          {accordionItems.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              title={item.title}
              openItem={openItem}
              onToggle={handleToggle}
            >
              {item.content}
            </AccordionItem>
          ))}

          {/* DEMOCRATE MEDIA - maintenant dans la même section */}
          <div className="apropos-groupe-content">
            <img src="/images/logo footer4.png" alt="Icone" className="apropos-groupe-icon" />
            <h2 className="subtitle-responsive">Démocrate Media Holding</h2>
            <p className="text-responsive">
              Pressor SA fait partie du groupe familial Démocrate Media Holding (DMH). Situé à Delémont, dans des locaux ultramodernes de plus de 6'000 m2, le groupe DMH occupe 130 collaborateurs. Outre ses activités éditoriales avec la publication du{' '}
              <a href="https://www.lqj.ch/" target="_blank" rel="noopener noreferrer" className="groupe-link">
                Quotidien Jurassien
              </a>
              , DMH intègre l'agence média{' '}
              <a href="https://synerj.ch/" target="_blank" rel="noopener noreferrer" className="groupe-link">
                SynerJ SA
              </a>
              , l'agence de photographie{' '}
              <a href="https://www.skjv.ch/de/bildung/bist" target="_blank" rel="noopener noreferrer" className="groupe-link">
                BIST
              </a>
              {' '}ainsi que les centres d'impression Pressor SA et{' '}
              <a href="https://www.demotec.ch/" target="_blank" rel="noopener noreferrer" className="groupe-link">
                Démotec SA
              </a>
              .
            </p>
            <p className="text-responsive" style={{ marginTop: '15px' }}>
              Plus d'informations sur{' '}
              <a href="https://www.democrate.ch" target="_blank" rel="noopener noreferrer" className="groupe-link">
                www.democrate.ch
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="logos-section section-padding">
        <div className="container">
          <div className="logos-container grid-4">
            <img src="/images/logo.1.jpeg" alt="Logo 1" className="logo-item img-responsive" />
            <img src="/images/New-SynerJ-cmjn-rond-01.png" alt="Logo 2" className="logo-item img-responsive" />
            <img src="/images/logo_quotidien jurassien.png" alt="Logo 3" className="logo-item img-responsive" />
            <img src="/images/logo demotec.png" alt="Logo 4" className="logo-item img-responsive" />
          </div>
        </div>
      </section>

      {/* CHIFFRES */}
<section className="apropos-chiffres section-padding" ref={chiffresRef}>
  <div className="flex-responsive flex-center gap-responsive chiffres-grid">
    
    <div className="chiffre-block">
      <span className="chiffre" id="chiffre-experience">0</span>
      <span className="label">ans d'expérience</span>
    </div>

    <div className="chiffre-block">
      <span className="chiffre" id="chiffre-collaborateurs">0</span>
      <span className="label">collaborateurs</span>
    </div>

    {/* LINKEDIN */}
    <a
      href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A18537565&keywords=Pressor%20SA&origin=ENTITY_SEARCH_HOME_HISTORY&sid=nTL"
      target="_blank"
      rel="noopener noreferrer"
      className="chiffre-block linkedin-block"
      aria-label="Suivez-nous sur LinkedIn"
    >
      <svg
      className="linkedin-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      aria-hidden="true"
    >
  <path
    fill="rgb(255, 255, 255)"
    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
  />
</svg>


      <span className="linkedin-text">Suivez-nous</span>
    </a>

  </div>
</section>


      <Footer />
    </div>
  );
}