import React, { useEffect, useRef } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function ModalHabitacion({ abierto, datos, cerrar, imagenIndex, setImagenIndex, infoIndex, setInfoIndex }) {
  const modalRef = useRef();

  useEffect(() => {
    let startX = 0;
    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };
    const handleTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 100) cerrar(); // Swipe left
    };
    const modal = modalRef.current;
    modal?.addEventListener('touchstart', handleTouchStart);
    modal?.addEventListener('touchend', handleTouchEnd);
    return () => {
      modal?.removeEventListener('touchstart', handleTouchStart);
      modal?.removeEventListener('touchend', handleTouchEnd);
    };
  }, [cerrar]);

  if (!abierto || !datos) return null;

  const handlePrev = () => setImagenIndex((prev) => prev === 0 ? datos.imagenes.length - 1 : prev - 1);
  const handleNext = () => setImagenIndex((prev) => prev === datos.imagenes.length - 1 ? 0 : prev + 1);

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm z-[9999] flex items-center justify-center"
    >
      <div className={`relative w-full h-full max-w-full max-h-screen overflow-y-auto ${infoIndex === 1 ? 'bg-[#f8f1e5]' : 'bg-white'} rounded-none md:rounded-xl shadow-2xl flex flex-col md:flex-row`}>

        {/* Botón X refinado */}
        <button
          className="absolute top-4 right-4 text-red-600 text-3xl font-light z-[10000]"
          onClick={cerrar}
          aria-label="Cerrar"
        >
          <FaTimes />
        </button>

        {/* Carrusel de imágenes */}
        <div className="relative w-full md:w-2/3">
          <img
            src={datos.imagenes[imagenIndex]}
            className="w-full h-96 md:h-full object-cover"
            alt="Vista"
          />
          <button onClick={handlePrev} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl"
        >

            <FaChevronLeft />
          </button>
          <button onClick={handleNext} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl">

            <FaChevronRight />
          </button>
        </div>

        {/* Descripción y contenido */}
        <div className="w-full md:w-1/3 p-6 overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-800">{datos.nombre}</h2>
          <p className="text-gray-700 my-4 text-sm leading-relaxed">{datos.descripcion}</p>

          {infoIndex === 0 ? (
            <div className="grid grid-cols-3 gap-4 text-center text-gray-700 mt-6">
              {datos.servicios.map((servicio, i) => (
                <div key={i} className="flex flex-col items-center">
                  <servicio.icono className="text-2xl mb-1" />
                  <span className="text-xs">{servicio.texto}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-y-auto max-h-48 mt-6">
              <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                {datos.caracteristicas.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex justify-end mt-4 gap-2">
            <button onClick={() => setInfoIndex(0)} className={`px-3 py-1 text-xs rounded ${infoIndex === 0 ? 'bg-black text-white' : 'bg-gray-300'}`}>Servicios</button>
            <button onClick={() => setInfoIndex(1)} className={`px-3 py-1 text-xs rounded ${infoIndex === 1 ? 'bg-black text-white' : 'bg-gray-300'}`}>Detalles</button>
          </div>
        </div>
      </div>
    </div>
  );
}
