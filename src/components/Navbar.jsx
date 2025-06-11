// ✅ NAVBAR.jsx - Versión con detección JS
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/src/assets/casamariposa.png';

function Navbar({ visible = true }) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint de Tailwind
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    checkMobile(); // Verificar al cargar

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const hiddenClass = visible
    ? 'opacity-100 pointer-events-auto'
    : 'opacity-0 pointer-events-none';

  const navItemClass = (path) =>
    `px-4 py-2 font-semibold transition-colors duration-300 ${
      location.pathname === path
        ? 'text-pink-600'
        : scrolled
        ? 'text-gray-800 hover:text-pink-500'
        : 'text-white hover:text-pink-300'
    }`;

  // Renderizado para móvil
  const renderMobile = () => (
    <div className="flex flex-col items-center py-4">
      <Link to="/" className="mb-3">
        <img src={logo} alt="Logo Casa Mariposa" className="h-16 w-auto object-contain" />
      </Link>
      <div className="flex space-x-4">
        <Link to="/" className={navItemClass('/')}>Inicio</Link>
        <Link to="/habitaciones" className={navItemClass('/habitaciones')}>Habitaciones</Link>
        <Link to="/contacto" className={navItemClass('/contacto')}>Contacto</Link>
      </div>
    </div>
  );

  // Renderizado para desktop (tu versión actual)
  const renderDesktop = () => (
    <div className="flex items-center justify-between py-4">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo Casa Mariposa" className="h-24 w-auto object-contain" />
      </Link>
      <div className="flex space-x-4">
        <Link to="/" className={navItemClass('/')}>Inicio</Link>
        <Link to="/habitaciones" className={navItemClass('/habitaciones')}>Habitaciones</Link>
        <Link to="/contacto" className={navItemClass('/contacto')}>Contacto</Link>
      </div>
    </div>
  );

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out
        ${scrolled ? 'bg-white/1 backdrop-blur-md shadow-md' : 'bg-transparent'} ${hiddenClass}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {isMobile ? renderMobile() : renderDesktop()}
      </div>
    </nav>
  );
}

export default Navbar; 