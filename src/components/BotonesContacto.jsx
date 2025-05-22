import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

export default function BotonesContacto({ nombreDepto, className = '' }) {
  const mensaje = `Hola, me gustaría saber más información sobre el departamento ${nombreDepto}`;

  return (
    <div className={`w-full flex gap-2 justify-between ${className}`}>
      <a
        href={`https://wa.me/5219516110942?text=${encodeURIComponent(mensaje)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-16 py-3 text-base w-full sm:w-auto rounded shadow hover:bg-green-600 transition flex items-center justify-center gap-2 md:px-4 md:py-1.5 md:text-sm"
      >
        <FaWhatsapp className="text-lg" /> <span className="hidden sm:inline">WhatsApp</span>
      </a>
      <a
        href="tel:+529516110942"
        className="bg-blue-500 text-white px-12 py-3 text-base w-full sm:w-auto rounded shadow hover:bg-blue-600 transition flex items-center justify-center gap-2 md:px-4 md:py-1.5 md:text-sm"
      >
        <FaPhone className="text-lg" /> <span className="hidden sm:inline">Llamar</span>
      </a>
    </div>
  );
}
