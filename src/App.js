
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { useContext } from 'react';
import ThemeContext from './context/ThemeContext';

function App() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
