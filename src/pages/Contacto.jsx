import React from 'react';
import carruselImg1 from '../assets/contacto/cinco.jpg';

function Contacto() {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center relative pt-24 pb-12 px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: `url(${carruselImg1})` }}
      >
        {/* Overlay oscuro general para mejorar la legibilidad del fondo */}
        <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />

        {/* Contenedor principal con margen superior añadido */}
        <div className="relative z-10 w-full max-w-6xl mx-auto rounded-2xl shadow-2xl overflow-hidden
                     flex flex-col md:flex-row bg-white bg-opacity-95 mt-8 md:mt-12">

          {/* Bloque Izquierdo: Imagen estática (cinco.jpg) */}
          <div className="hidden md:block md:w-1/2 relative bg-gray-200 min-h-[400px]">
            <img
              src={carruselImg1}
              alt="Imagen de la propiedad"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bloque Derecho: Área de Contacto */}
          <div
            className="w-full md:w-1/2 p-8 md:p-10 lg:p-12 font-sans
                     relative flex flex-col justify-center items-center overflow-hidden"
            style={{
              backgroundImage: `url(${carruselImg1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '1rem',
            }}
          >
            {/* Fondo translúcido */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-70 rounded-2xl md:bg-opacity-50 z-0" />

            <div className="relative z-10 text-white text-center">
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 md:mb-8 border-b-4 border-indigo-600 inline-block pb-2">
                Contáctanos
              </h1>
              <p className="mb-8 text-lg md:text-xl leading-relaxed">
                ¿Tienes alguna duda, consulta o quieres reservar? Nuestro equipo está listo para ayudarte a planificar tu estancia perfecta. Contáctanos por teléfono o WhatsApp, y obtén una atención personalizada.
              </p>

              <div className="flex flex-col gap-6 text-xl md:text-2xl font-semibold mt-10">
                <a
                  href="tel:+529516110942"
                  className="flex items-center justify-center bg-indigo-600 text-white py-4 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300 transform hover:-translate-y-1 hover:scale-105"
                  aria-label="Llamar al número +52 951 874 1799"
                >
                  <span className="mr-3">📞</span> +52 951 874 1799
                </a>
                <a
                  href="https://wa.me/529518741799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-500 text-white py-4 px-6 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 transform hover:-translate-y-1 hover:scale-105"
                  aria-label="Enviar mensaje de WhatsApp al +52 951 611 0942"
                >
                  <span className="mr-3">💬</span> WhatsApp
                </a>
                <a
                  href="https://www.airbnb.mx/users/show/491567245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-red-500 text-white py-4 px-6 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300 transform hover:-translate-y-1 hover:scale-105"
                  aria-label="Reservar en Airbnb"
                >
                  <span className="mr-3">🏠</span> Reservar en Airbnb
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacto;