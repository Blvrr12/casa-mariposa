import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';
import Habitaciones from './pages/Habitaciones';
import Contacto from './pages/Contacto';

function App() {
  const [navbarVisible, setNavbarVisible] = useState(true); // Estado que controla si se muestra o no

  return (
    <>
      <SplashScreen />
      {navbarVisible && <Navbar />} {/* Solo se muestra si está activo */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habitaciones" element={<Habitaciones setNavbarVisible={setNavbarVisible} />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;
