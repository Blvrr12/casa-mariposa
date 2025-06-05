import React from 'react';
import DiseñoResponsive from '../pages/components/FondoResponsive'; // la ruta que usas
import balcondepa2_1 from '../assets/habitaciones/depto2/depa2_1.jpg';

function Contacto() {
  return (
    <>
      <DiseñoResponsive />

      <div
        className="h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${balcondepa2_1})` }}
      >
        {/* Overlay oscuro para mejorar la legibilidad */}
        <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0 z-0" />

        {/* Contenedor del contenido */}
        <div className="relative z-10 p-10 max-w-md w-full bg-white bg-opacity-90 rounded-xl shadow-xl text-gray-900 font-sans">
          <h1 className="text-4xl font-extrabold mb-6 border-b-4 border-indigo-600 inline-block pb-2">
            Contáctanos
          </h1>
          <p className="mb-8 text-lg leading-relaxed">
            ¿Tienes alguna duda, consulta o quieres reservar? Nuestro equipo está listo para ayudarte a planificar tu estancia perfecta. Contáctanos por teléfono o WhatsApp, y obtén una atención personalizada.
          </p>

          <div className="flex flex-col gap-6 text-xl font-semibold">
            <a
              href="tel:+529516110942"
              className="hover:text-indigo-700 transition-colors"
              aria-label="Llamar al número +52 951 611 0942"
            >
              📞 <span className="underline">+52 951 611 0942</span>
            </a>
            <a
              href="https://wa.me/529516110942"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 transition-colors"
              aria-label="Enviar mensaje de WhatsApp al +52 951 611 0942"
            >
              💬 <span className="underline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacto;
