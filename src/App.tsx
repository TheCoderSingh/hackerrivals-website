import { IconoirProvider } from 'iconoir-react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Schedule from './components/Schedule';

function App() {
  return (
    <IconoirProvider iconProps={{ width: '2em', height: '2em', color: 'white', strokeWidth: 2 }}>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <Schedule />
      </main>
    </IconoirProvider>
  );
}

export default App;
