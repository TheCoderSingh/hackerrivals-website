import { IconoirProvider } from 'iconoir-react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <IconoirProvider iconProps={{ width: '2em', height: '2em', color: 'white', strokeWidth: 2 }}>
      <header>
        <Navbar />
      </header>
    </IconoirProvider>
  );
}

export default App;
