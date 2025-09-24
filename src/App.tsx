import { IconoirProvider } from 'iconoir-react';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ESportsSection from './components/ESportsSection';
import Schedule from './components/Schedule';
import VenueInfo from './components/VenueInfo';
import Register from './components/Register';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Team from './components/Team';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import SEOOptimizations from './components/SEOOptimizations';
import { isEventActive } from './constants/eventConfig';

function App() {
  const eventActive = isEventActive();
  const [currentRoute, setCurrentRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Show 404 page if hash is #/404
  if (currentRoute === '#/404') {
    return (
      <IconoirProvider iconProps={{ width: '2em', height: '2em', color: 'white', strokeWidth: 2 }}>
        <NotFound />
      </IconoirProvider>
    );
  }

  return (
    <IconoirProvider iconProps={{ width: '2em', height: '2em', color: 'white', strokeWidth: 2 }}>
      <SEOOptimizations />
      <header>
        <Navbar />
      </header>

      <main id="main-content">
        <Hero />
        <ESportsSection />
        {eventActive && <Schedule />}
        {eventActive && <VenueInfo />}
        <Register />
        <Sponsors />
        <FAQ />
        <Team />
      </main>

      <footer>
        <Footer />
      </footer>
    </IconoirProvider>
  );
}

export default App;
