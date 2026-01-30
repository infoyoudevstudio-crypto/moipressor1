import Navbar from '../components/Navbar'
import './Home.css';
import Footer from '../components/Footer';

export default function Home() {
  
  return (
    <div className="home">
      <Navbar />

      <section className="hero flex-center">
        <div className="hero-overlay flex-center">
           <img src="/images/logo2.png" className="hero-logo img-responsive" alt="Logo imprimerie"/>
          <h1 className="hero-title title-responsive">Du fichier au papier, la précision avant tout.</h1>
        </div>
      </section>

      <Footer />
    </div>
  )
}
