import { IconoirProvider } from 'iconoir-react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ESportsSection from './components/ESportsSection';
import Schedule from './components/Schedule';
import VenueInfo from './components/VenueInfo';
import Register from './components/Register';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <IconoirProvider iconProps={{ width: '2em', height: '2em', color: 'white', strokeWidth: 2 }}>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <ESportsSection />
        <Schedule />
        <VenueInfo />
        <Register />
        <Sponsors />
        <FAQ />
      </main>

      <footer>
        <Footer />
      </footer>
    </IconoirProvider>
  );
}

export default App;
