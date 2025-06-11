import React, { useState } from 'react';
import {
  FaSnowflake, FaUtensils, FaShower, FaTv,
  FaWifi, FaTimes, FaChevronLeft, FaChevronRight,
  FaAirbnb, FaUser, FaExpand
} from 'react-icons/fa';

import fondoDesktop from '../assets/contacto/cinco.jpg';
import fondoMobile from '../assets/contacto/cinco.jpg';
import comedor from '../assets/habitaciones/depto2/comedordepa2.jpg';

// IMÁGENES DE ARENA
import arena1 from '../assets/habitaciones/depto2/depa2_1.jpg';
import comedorArena from '../assets/habitaciones/depto2/comedordepa2.jpg';
import comedorArena2 from '../assets/habitaciones/depto2/comedordepa2_1.avif';
import salaArena from '../assets/habitaciones/depto2/saladepa1.jpeg';
import salaArena2 from '../assets/habitaciones/depto2/saladepa1_1.jpeg';
import balconArena from '../assets/habitaciones/depto2/balcondepa2.avif';
import balconArena2 from '../assets/habitaciones/depto2/balcondepa2_1.avif';
import banoArena from '../assets/habitaciones/depto2/baño1.avif';

// IMÁGENES DE ALEBRIJE
import alebrije1 from '../assets/habitaciones/depto1/depa.jpg';
import alebrije2 from '../assets/habitaciones/depto1/depa01.jpg';
import salaAlebrije from '../assets/habitaciones/depto1/saladepa1.1.jpeg';
import banoAlebrije from '../assets/habitaciones/depto1/baño.jpeg';
import balconAlebrije from '../assets/habitaciones/depto1/balcondepa1.png';


//IMAGENES DE CAMILA
import cami1 from '../assets/habitaciones/camila/cami1.jpg';
import cami2 from '../assets/habitaciones/camila/cami2.jpg';
import cami3 from '../assets/habitaciones/camila/cami3.jpg';
import cami4 from '../assets/habitaciones/camila/cami4.jpg';
import camicollage from '../assets/habitaciones/camila/camicollage.jpg';

//IMAGENES DE CARMELO
import proximamente from '../assets/habitaciones/carmelo/proximament.png'; // Reemplazar
//IMAGENES DE BELLA
import bella from '../assets/habitaciones/bella/bella.jpg';
import bella2 from '../assets/habitaciones/bella/bella2.jpg';


const departamentos = [
  {
    nombre: 'Alebrije',
    imagenes: [alebrije1, alebrije2, salaAlebrije, banoAlebrije, balconAlebrije],
    descripcion: ' Alebrije es un espacio lleno de color y tranquilidad, cuidadosamente decorado con detalles artesanales que reflejan la cultura local. Ofrece una cama matrimonial y una cama individual, garantizando un descanso placentero. La cocina está completamente equipada con utensilios esenciales y un mini refrigerador. Además, cuenta con aire acondicionado, WiFi Starlink, baño completo y closet, lo que lo convierte en una opción ideal para una estancia auténtica y cómoda, a solo unos metros de la playa.'
    ,servicios: [
      { icono: FaSnowflake, texto: 'Aire acondicionado' },
      { icono: FaUtensils, texto: 'Cocina equipada' },
      { icono: FaShower, texto: 'Baño completo' },
      { icono: FaTv, texto: 'Televisión' },
      { icono: FaWifi, texto: 'WiFi Starlink' }
    ],
    airbnbLink: 'https://www.airbnb.mx/rooms/1394264673627582250'
  },
  {
    nombre: 'Arena',
    imagenes: [arena1, comedorArena, comedorArena2, salaArena, salaArena2, balconArena, balconArena2, banoArena],
    descripcion: 'Arena es un departamento espacioso, iluminado y con un ambiente fresco, diseñado para una relajante escapada cerca del mar. Dispone de una cómoda cama matrimonial y una cama individual, ideal para familias pequeñas o grupos. Su cocina está totalmente equipada con utensilios y refrigerador, facilitando la preparación de comidas. Ofrece aire acondicionado, WiFi Starlink, baño completo y televisión para tu confort. Su cercanía a la playa lo hace perfecto para quienes buscan comodidad.'
     ,servicios: [
      { icono: FaSnowflake, texto: 'Aire acondicionado' },
      { icono: FaUtensils, texto: 'Cocina equipada' },
      { icono: FaShower, texto: 'Baño completo' },
      { icono: FaTv, texto: 'Televisión' },
      { icono: FaWifi, texto: 'WiFi Starlink' }
    ],
    airbnbLink: 'https://www.airbnb.mx/rooms/782629556146528636'
  },

  // NUEVAS HABITACIONES (ESTRUCTURA - COMPLETA CON TUS DATOS)
  {
    nombre: 'Camila',
    imagenes: [camicollage,cami2,cami3,cami4,cami1],
    descripcion: 'Habitación Camila amplia para familias o amigos para no estar separados.',
    servicios: [
      { icono: FaWifi, texto: 'WiFi Starlink' },
      // ... otros servicios específicos
      { icono: FaWifi, texto: 'WiFi Starlink' },
      { icono: FaUtensils, texto: 'Cocina compartida' },
      { icono: FaShower, texto: '2 Baños compartidos' }
    ],
    airbnbLink: 'LINK_AIRBNB_CAMILA'
  },
  {
    nombre: 'Carmelo',
    imagenes: [proximamente],
    descripcion: 'Habitación Carmelo con [describe]. Capacidad: 4 personas.',
    servicios: [
      { icono: FaSnowflake, texto: 'Aire acondicionado' },
      // servicios adicionales
      { icono: FaWifi, texto: 'WiFi Starlink' },
      { icono: FaUtensils, texto: 'Cocina compartida' },
      { icono: FaShower, texto: '2 Baños compartidos' }
    ],
    airbnbLink: 'https://www.airbnb.mx/rooms/1200011469900113807?source_impression_id=p3_1749671674_P3CrUz_pTFPvN8zd'
  },
  {
    nombre: 'Bella',
    imagenes: [bella2, bella],
    descripcion: 'Habitación Bella con [describe]. Capacidad: 2 personas.',
    servicios: [
      // servicios adicionales
      { icono: FaWifi, texto: 'WiFi Starlink' },
      { icono: FaUtensils, texto: 'Cocina compartida' },
      { icono: FaShower, texto: '2 Baños compartidos' }
    ],
    airbnbLink: 'LINK_AIRBNB_BELLA'
  }
];

export default function Habitaciones({ setNavbarVisible }) {
  const [activo, setActivo] = useState(null);
  const [imagenIndex, setImagenIndex] = useState(0);
  const [expandedImageSrc, setExpandedImageSrc] = useState(null);

  const handlePrev = () => setImagenIndex((prev) => 
    prev === 0 ? departamentos[activo].imagenes.length - 1 : prev - 1
  );

  const handleNext = () => setImagenIndex((prev) => 
    prev === departamentos[activo].imagenes.length - 1 ? 0 : prev + 1
  );

  const openExpandedImage = (src) => setExpandedImageSrc(src);
  const closeExpandedImage = () => setExpandedImageSrc(null);


  
  return (
    <div className="w-full min-h-screen font-serif relative z-0 overflow-hidden">
      {/* FONDO RESPONSIVO */}
      <div
        className="sm:hidden fixed inset-0 -z-10"
        style={{ backgroundImage: `url(${fondoMobile})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div
        className="hidden sm:block fixed inset-0 -z-10"
        style={{ backgroundImage: `url(${fondoDesktop})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* HERO SECTION */}
      <div className="h-screen bg-cover bg-center flex items-center justify-start relative" style={{ backgroundImage: `url(${comedor})` }}>
        <div className="bg-black bg-opacity-40 w-full h-full absolute top-0 left-0 z-0" />
        <div className="relative z-10 px-10 max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestras Habitaciones</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Comodidad y descanso junto al mar</h2>
          <p className="text-lg md:text-xl">Explora nuestros departamentos únicos, equipados para una estancia placentera.</p>
        </div>
      </div>

      {/* TARJETAS DE HABITACIONES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 md:px-20 py-16">
        {departamentos.map((depa, i) => (
          <div
            key={depa.nombre}
            className="bg-white/70 backdrop-blur-md rounded-xl overflow-hidden shadow-xl cursor-pointer hover:scale-[1.01] transition"
            onClick={() => {
              setActivo(i);
              setImagenIndex(0);
              document.body.style.overflow = 'hidden';
              setNavbarVisible(false);
            }}
          >
            <div className="relative">
              <img src={depa.imagenes[0]} alt={depa.nombre} className="w-full h-64 object-cover" />
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white p-1 rounded text-xs flex items-center gap-1">
                <FaExpand size={10} /> Clic para agrandar
              </div>
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-gray-800">{depa.nombre}</h2>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <FaUser className="text-lg" />
                <span>Máximo 3 personas</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {depa.servicios.slice(0, 4).map((servicio, i) => (
                  <div key={i} className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded">
                    <servicio.icono className="text-xs" />
                    <span>{servicio.texto}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL DE DETALLES */}
      {activo !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm z-50 flex items-center justify-center px-2 sm:px-4">
          <div className="relative w-full h-screen max-w-5xl max-h-[95vh] rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row bg-white">
            {/* BOTÓN CERRAR */}
            <button
              className="absolute top-2 right-3 sm:top-4 sm:right-4 text-red-600 text-3xl z-20"
              onClick={() => {
                setActivo(null);
                document.body.style.overflow = 'auto';
                setNavbarVisible(true);
              }}
              aria-label="Cerrar detalles del departamento"
            >
              <FaTimes />
            </button>

            {/* GALERÍA DE IMÁGENES */}
            <div className="relative w-full md:w-2/3 h-[50vh] md:h-auto">
              <img
                src={departamentos[activo].imagenes[imagenIndex]}
                className="w-full h-full object-cover cursor-zoom-in"
                alt="Vista del departamento"
                onClick={() => openExpandedImage(departamentos[activo].imagenes[imagenIndex])}
              />
              <button 
                onClick={handlePrev} 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-40 rounded-full px-2 py-1" 
                aria-label="Imagen anterior"
              >
                <FaChevronLeft />
              </button>
              <button 
                onClick={handleNext} 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-40 rounded-full px-2 py-1" 
                aria-label="Imagen siguiente"
              >
                <FaChevronRight />
              </button>
            </div>

            {/* DETALLES Y BOTÓN DE RESERVA */}
            <div className="w-full md:w-1/3 flex flex-col relative h-full p-6">
              <div className="flex-1 overflow-y-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{departamentos[activo].nombre}</h2>
                <p className="text-gray-700 mb-6">{departamentos[activo].descripcion}</p>
              </div>

              {/* BOTÓN DE RESERVA */}
              <div className="mt-auto flex justify-end">
                <a
                  href={departamentos[activo].airbnbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition flex items-center gap-2 text-sm font-semibold"
                  aria-label={`Reservar ${departamentos[activo].nombre} en Airbnb`}
                >
                  <FaAirbnb className="text-lg" /> Reservar
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE IMAGEN AMPLIADA */}
      {expandedImageSrc && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[100]"
          onClick={closeExpandedImage}
        >
          <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={expandedImageSrc}
              alt="Imagen expandida"
              className="max-w-full max-h-screen object-contain cursor-zoom-out"
            />
            <button
              onClick={closeExpandedImage}
              className="absolute top-4 right-4 text-white text-4xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition"
              aria-label="Cerrar imagen"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}