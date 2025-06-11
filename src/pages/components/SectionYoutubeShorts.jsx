import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react'; // Necesitas tener lucide-react instalado

export default function SectionYoutubeShorts({ videos }) {
    const [mediaIndex, setMediaIndex] = useState(0);

    const nextMedia = () => {
        setMediaIndex((prevIndex) =>
            prevIndex === videos.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevMedia = () => {
        setMediaIndex((prevIndex) =>
            prevIndex === 0 ? videos.length - 1 : prevIndex - 1
        );
    };

    // Función de utilidad para obtener la URL de incrustación de YouTube
    // (Esta función ahora es una copia de la que está en Home.jsx para que el componente sea autónomo)
    const getYouTubeEmbedUrl = (url) => {
        try {
            const cleanUrl = url.startsWith('http') ? url : `https://${url}`;
            const match = cleanUrl.match(/(?:shorts\/|watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);

            if (match && match[1]) {
                return `https://www.youtube.com/embed/${match[1]}`;
            }
        } catch (error) {
            console.error('URL de YouTube inválida en SectionYoutubeShorts:', url, error);
        }
        return '';
    };

    return (
        <section className="py-12 px-4 md:px-0"> {/* Agregado padding horizontal para móviles */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2 text-black-800">YouTube Shorts</h2>
                <p className="text-lg text-black-600">
                    Mira nuestros últimos videos en YouTube Shorts
                </p>
            </div>

            <div className="relative max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg"> {/* Contenedor principal con estilos */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={mediaIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="aspect-video w-full" // Asegura la relación de aspecto del video
                    >
                        {/* Renderiza el iframe solo si hay videos y la URL es válida */}
                        {videos && videos.length > 0 && videos[mediaIndex] && (
                            <iframe
                                src={getYouTubeEmbedUrl(videos[mediaIndex].url)}
                                title={videos[mediaIndex].alt}
                                className="w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                        {/* Mensaje de carga o error si no hay videos */}
                        {(!videos || videos.length === 0 || !videos[mediaIndex]) && (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                                Cargando video...
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Flechas de navegación */}
                {videos && videos.length > 1 && ( // Muestra las flechas solo si hay más de un video
                    <>
                        <button
                            onClick={prevMedia}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            aria-label="Anterior video"
                        >
                            <ArrowLeft size={24} />
                        </button>
                        <button
                            onClick={nextMedia}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            aria-label="Siguiente video"
                        >
                            <ArrowRight size={24} />
                        </button>
                    </>
                )}
            </div>

            {/* Thumbnails opcionales / Indicadores de puntos */}
            {videos && videos.length > 1 && ( // Muestra los puntos solo si hay más de un video
                <div className="flex justify-center mt-4 space-x-2">
                    {videos.map((media, idx) => (
                        <button
                            key={idx}
                            onClick={() => setMediaIndex(idx)}
                            className={`w-4 h-4 rounded-full transition-colors duration-200 ${
                                idx === mediaIndex ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Ver video ${idx + 1}`}
                        ></button>
                    ))}
                </div>
            )}
        </section>
    );
}
