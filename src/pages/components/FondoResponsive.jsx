// src/components/FondoResponsive.jsx
import fondoDesktop from '../assets/contacto/cinco.jpg';
import fondoMobile from '../assets/contacto/cinco.jpg';

function FondoResponsive() {
  return (
    <>
      {/* Fondo móvil */}
      <div
        className="sm:hidden fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${fondoMobile})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Fondo escritorio */}
      <div
        className="hidden sm:block fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${fondoDesktop})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </>
  );
}

export default FondoResponsive;
