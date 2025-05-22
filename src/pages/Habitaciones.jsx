import React, { useState } from 'react';
import {
  FaSnowflake, FaCoffee, FaShower, FaHiking, FaChair, FaWifi,
  FaTimes, FaChevronLeft, FaChevronRight
} from 'react-icons/fa';

import fondoDesktop from '../assets/fondo1.svg';
import fondoMobile from '../assets/celular.svg';
import comedor from '../assets/habitaciones/depto2/comedordepa2.jpg';
import { FaPhone, FaWhatsapp, FaAngleLeft, FaAngleRight, FaUser } from 'react-icons/fa';

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
import balconAlebrije from '../assets/habitaciones/depto1/balcondepa1.webp';

const departamentos = [
  {
    nombre: 'Alebrije',
    imagenes: [alebrije1, alebrije2, salaAlebrije, banoAlebrije, balconAlebrije],
    descripcion: 'Un rincón lleno de color, tranquilidad y detalles artesanales...',
    servicios: [
      { icono: FaSnowflake, texto: 'A/C' },
      { icono: FaWifi, texto: 'WiFi' },
      { icono: FaShower, texto: 'Baño completo' },
      { icono: FaChair, texto: 'Balcón con vista' }
    ],
    caracteristicas: [
      'Alebrije es un espacio acogedor y lleno de carácter, decorado con elementos artesanales que reflejan la cultura local. Ofrece una cama matrimonial cómoda y un sofá cama individual, ideal para descansar tras un día en la playa. La cocineta está equipada con utensilios esenciales, un mini refrigerador y ventilador para mayor confort, además de contar con un closet funcional. Todo esto lo convierte en una excelente opción para quienes buscan una experiencia auténtica y tranquila a pocos pasos del mar.'
    ]
  },
  {
    nombre: 'Arena',
    imagenes: [arena1, comedorArena, comedorArena2, salaArena, salaArena2, balconArena, balconArena2, banoArena],
    descripcion: 'Espacioso, iluminado y con un ambiente fresco...',
    servicios: [
      { icono: FaSnowflake, texto: 'A/C' },
      { icono: FaCoffee, texto: 'Cafetera' },
      { icono: FaWifi, texto: 'WiFi' },
      { icono: FaShower, texto: 'Baño completo' },
      { icono: FaHiking, texto: 'Cerca del mar' },
      { icono: FaChair, texto: 'Balcón con vista' }
    ],
    caracteristicas: [
'Arena es un departamento amplio y luminoso, diseñado para brindar una experiencia fresca y relajante cerca del mar. Cuenta con una cama matrimonial y una cama individual, perfectas para grupos pequeños o familias. Su cocineta equipada, utensilios de cocina y refrigerador grande permiten preparar alimentos con comodidad. Además, incluye ventilador de techo y un closet amplio que aseguran una estancia cómoda y organizada en un ambiente tranquilo y funcional.'      
    ]
  }
];

export default function Habitaciones({ setNavbarVisible }) {
  const [activo, setActivo] = useState(null);
  const [imagenIndex, setImagenIndex] = useState(0);
  const [infoIndex, setInfoIndex] = useState(0);

  const handlePrev = () => setImagenIndex((prev) =>
    prev === 0 ? departamentos[activo].imagenes.length - 1 : prev - 1
  );

  const handleNext = () => setImagenIndex((prev) =>
    prev === departamentos[activo].imagenes.length - 1 ? 0 : prev + 1
  );

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

      {/* HERO */}
      <div className="h-screen bg-cover bg-center flex items-center justify-start relative" style={{ backgroundImage: `url(${comedor})` }}>
        <div className="bg-black bg-opacity-40 w-full h-full absolute top-0 left-0 z-0" />
        <div className="relative z-10 px-10 max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestras Habitaciones</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Comodidad y descanso junto al mar</h2>
          <p className="text-lg md:text-xl">Explora nuestros departamentos únicos, equipados para una estancia placentera.</p>
        </div>
      </div>

      {/* CUADROS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 md:px-20 py-16">
        {departamentos.map((depa, i) => (
          <div
            key={depa.nombre}
            className="bg-white/70 backdrop-blur-md rounded-xl overflow-hidden shadow-xl cursor-pointer hover:scale-[1.01] transition"
            onClick={() => {
              setActivo(i);
              setImagenIndex(0);
              setInfoIndex(0);
              document.body.style.overflow = 'hidden';
              setNavbarVisible(false); // ⬅️ Oculta el menú al hacer clic
            }}
          >
            <img src={depa.imagenes[0]} alt={depa.nombre} className="w-full h-64 object-cover" />
            <div className="p-4 flex flex-col gap-2">
  <h2 className="text-2xl font-bold text-gray-800">{depa.nombre}</h2>

  {/* 💰 Precio por noche */}
  <p className="text-sm text-gray-700"><strong>$1,200 Mxn</strong> por noche</p>

  {/* 👥 Icono y cantidad de personas */}
  <div className="flex items-center gap-2 text-gray-700 text-sm">
<FaUser className="text-lg" />
<span>Hasta 3 personas</span>
  </div>

  {/* ℹ️ Descripción corta */}
  <p className="italic text-gray-600 text-sm">{depa.descripcion}</p>

  {/* 📎 Texto de acción */}
  <span className="text-xs text-gray-500 mt-2">Haz clic para ver más detalles</span>
</div>

            </div>
          
        ))}
      </div>

      {/* EXPANDIDO */}


      {activo !== null && (
  <div className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm z-50 flex items-center justify-center px-2 sm:px-4">
    <div className={`relative w-full h-screen max-w-5xl max-h-[95vh] rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row ${infoIndex === 1 ? 'bg-[#f8f1e5]' : 'bg-white'}`}>

      {/* ❌ BOTÓN DE CERRAR */}
      <button
        className="absolute top-2 right-3 sm:top-4 sm:right-4 text-red-600 text-3xl z-10"
        onClick={() => {
          setActivo(null);
          document.body.style.overflow = 'auto';
          setNavbarVisible(true);
        }}
      >
        <FaTimes />
      </button>

      {/* 🖼️ IMAGEN + FLECHAS */}
      <div className="relative w-full md:w-2/3 h-[50vh] md:h-auto">
        <img
          src={departamentos[activo].imagenes[imagenIndex]}
          className="w-full h-full object-cover"
          alt="Vista"
        />
        <button onClick={handlePrev} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-40 rounded-full px-2">
          <FaChevronLeft />
        </button>
        <button onClick={handleNext} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-40 rounded-full px-2">
          <FaChevronRight />
        </button>
      </div>

      {/* 📋 CONTENIDO FIJO + SCROLL INTERNO */}
    
      <div className="w-full md:w-1/3 flex flex-col relative h-full">
  <div className="flex-1 px-6 pt-6 pb-4 overflow-hidden">
    <div className="overflow-y-auto max-h-[calc(100vh-200px)] pr-2">
      <h2 className="text-3xl font-bold text-gray-800">{departamentos[activo].nombre}</h2>

      {infoIndex === 0 && (
        <p className="text-gray-700 my-4 text-sm leading-relaxed">
          {departamentos[activo].descripcion}
        </p>
      )}

      {infoIndex === 0 ? (
        <div className="grid grid-cols-3 gap-4 text-center text-gray-700 mt-6">
          {departamentos[activo].servicios.map((servicio, i) => (
            <div key={i} className="flex flex-col items-center">
              <servicio.icono className="text-2xl mb-1" />
              <span className="text-xs">{servicio.texto}</span>
            </div>
          ))}
        </div>
      ) : (
        departamentos[activo].caracteristicas.length === 1 ? (
          <div className="text-gray-700 text-sm mt-6 leading-relaxed">
            {departamentos[activo].caracteristicas[0]}
          </div>
        ) : (
          <ul className="text-gray-700 text-sm mt-6 list-disc list-inside space-y-1">
            {departamentos[activo].caracteristicas.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )
      )}
    </div>
  </div>

  {/* Botones de contacto */}
<div className="absolute bottom-4 left-4 flex flex-row gap-2 text-sm z-10">
  <a
    href="https://wa.me/529516110942?text=Hola%2C%20quiero%20reservar%20el%20departamento%20Alebrije"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 text-white px-4 py-1 rounded shadow hover:bg-green-600 transition flex items-center gap-2"
  >
    <FaWhatsapp /> WhatsApp
  </a>
  <a
    href="tel:+529516110942"
    className="bg-blue-500 text-white px-4 py-1 rounded shadow hover:bg-blue-600 transition flex items-center gap-2"
  >
    <FaPhone /> Llamar
  </a>
</div>

{/* Flechas para alternar info */}
<div className="absolute bottom-4 right-4 flex gap-4 items-center text-xl text-gray-700 z-10">
  <button
    onClick={() => setInfoIndex(0)}
    className={`p-2 rounded-full border ${infoIndex === 0 ? 'bg-black text-white' : 'bg-white'}`}
    aria-label="Servicios"
  >
    <FaAngleLeft />
  </button>
  <button
    onClick={() => setInfoIndex(1)}
    className={`p-2 rounded-full border ${infoIndex === 1 ? 'bg-black text-white' : 'bg-white'}`}
    aria-label="Detalles"
  >
    <FaAngleRight />
  </button>
</div>


</div>

    </div>
  </div>
)}




    {/**/}







    </div>
  );
}
