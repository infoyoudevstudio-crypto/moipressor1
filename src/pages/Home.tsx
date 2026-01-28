import Navbar from '../components/Navbar'
import './Home.css';
import Footer from '../components/Footer';
export default function Home() {
  
  return (
    <div className="home">
      <Navbar />

      <section className="hero">
        <div className="hero-overlay">
           <img src="/images/logo2.png" className="hero-logo" alt="Logo imprimerie"/>
          <h1 className="hero-title">Du fichier au papier, la précision avant tout.</h1>
        </div>
      </section>
      {/* FOOTER en bas */}
      <Footer />
    </div>
  )
}

