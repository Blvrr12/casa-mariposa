import fondoDesktop from '../assets/contacto/cinco.jpg';
import fondoMobile from '../assets/contacto/cinco.jpg';
import playaBg from '../assets/backgrounds/playa.png';
import surf from '../assets/backgrounds/surf.png';
import surftrips from '../assets/backgrounds/surftrip.png';
import relax from '../assets/contacto/uno.png';
import snorkel from '../assets/pad1.jpg';
import ReseñasGoogle from '../components/ReseñasGoogle';
import logo from '../assets/backgrounds/logo.png';
import dron1 from '../assets/dron.jpg';
import dron from '../assets/dronuno.jpg';
import tour from '../assets/backgrounds/tour1.png';
import SectionYoutubeShorts from '../pages/components/SectionYoutubeShorts'; // Importa el componente de YouTube Shorts

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import amancer from '../assets/amancer.jpg';


// Función de utilidad para obtener la URL de incrustación de YouTube
// Esta función se puede usar en cualquier parte donde necesites incrustar un video de YouTube.
const getYouTubeEmbedUrl = (url) => {
    try {
        // Asegura que la URL comience con https://
        const cleanUrl = url.startsWith('http') ? url : `https://${url}`;

        // Extrae el ID ya sea de shorts, watch?v= o youtu.be
        // El regex busca el ID de 11 caracteres después de 'shorts/', 'watch?v=' o 'youtu.be/'
        const match = cleanUrl.match(/(?:shorts\/|watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);

        if (match && match[1]) {
            // Retorna la URL de incrustación estándar de YouTube
            return `https://www.youtube.com/embed/${match[1]}`;
        }
    } catch (error) {
        console.error('URL de YouTube inválida:', url, error);
    }
    return ''; // Retorna una cadena vacía si la URL no es válida
};


function Home() {
    // Array de videos para el componente SectionYoutubeShorts
    // Aquí puedes poner tus URLs de YouTube Shorts o videos normales que quieras destacar
    //Estan entre el ultimo slide y arriba del footer/comentarios/opiniones
    const myYoutubeVideos = [
        { url: 'https://www.youtube.com/shorts/ZKI8WlUyfBk'  },
        { url: 'httpsnosirvewww.youtube.com/watch?v=J1fdV3XlMzQ' },
        { url: 'https://www.youtube.com/shorts/nPjr9_bTz1M' }, 
        { url: 'https://www.youtube.com/shorts/RGhisSfcYfc' },
        { url: 'https://www.youtube.com/shorts/yw96YQaxJaY' },
        { url: 'https://www.youtube.com/shorts/0KU9AK9juDM' }
    ];

    // Array de actividades con URLs de YouTube limpias
    const actividades = [
        {
            src: surf,
            titulo: 'Clases de surf',
            descripcion: 'Aprende a surfear con instructores locales sobre olas suaves, perfectas para principiantes que buscan confianza y diversión.'
        },
        {
            src: surftrips,
            titulo: 'Surftrips',
            descripcion: 'Explora playas cercanas con otros surfistas y vive emocionantes aventuras sobre las olas en grupo.'
        },
        {
            src: relax,
            titulo: 'Relájate frente al mar',
            descripcion: 'Disfruta del sonido de las olas, una brisa suave y un entorno sereno para leer, meditar o simplemente desconectar.'
        },
        {
            tipo: 'youtube',
            // URL de YouTube limpia, sin ?si=...
            url: 'https://www.youtube.com/shorts/ZKI8WlUyfBk',
            titulo: 'Paddleboard en Puerto Ángel',
            descripcion: 'Recorre las tranquilas aguas de Puerto Ángel de pie sobre una tabla, ideal para ejercitarte y relajarte al mismo tiempo. Disfruta de la vista desde una nueva perspectiva.',
        },
        {
            src: tour,
            titulo: 'Tour en bote',
            descripcion: 'Según la temporada, podrás ver ballenas, tortugas marinas, delfines y bancos de peces, además de conocer tres playas inolvidables.'
        },
        {
            src: relax,
            titulo: 'Caminata al amanecer',
            descripcion: 'Comienza tu día con una caminata tranquila mientras ves salir el sol sobre el horizonte costero.'
        },
        {
            src: snorkel,
            titulo: 'Snorkel en Playa Panteón',
            descripcion: 'Descubre un mundo submarino lleno de coloridos peces y formaciones coralinas en aguas tranquilas y cristalinas.'
        },
        {
            tipo: 'youtube',
            titulo: 'Padleboard desde el cielo',
            texto: 'Rema sobre las aguas tranquilas de Playa Panteón.',
            // URL de YouTube limpia, sin ?si=...
            url: 'https://www.youtube.com/shorts/RGhisSfcYfc',
        },
        {
            tipo: 'youtube',
            titulo: 'Vista aérea de Playa Panteón',
            texto: 'Un pedacito mágico capturado en pocos segundos.',
            // URL de YouTube limpia
            url: 'https://www.youtube.com/shorts/0KU9AK9juDM',
        }
    ];

    // Array de medios para el slider principal con URLs de YouTube limpias
    const sliderMedia = [
        {
            tipo: 'imagen',
            src: dron,
            titulo: 'Puerto Ángel, Playa Panteón',
            texto: 'Playa Panteón en Puerto Ángel es un lugar tranquilo con aguas cristalinas y arena dorada, perfecto para nadar y relajarse. Rodeada de palmeras y pequeños restaurantes, ofrece una atmósfera acogedora y auténtica para disfrutar el encanto costero de Oaxaca.'
        },
        {
            tipo: 'imagen',
            src: dron1,
            titulo: 'Vista Aérea de Playa Panteón',
            texto: 'Contempla la majestuosidad de Playa Panteón desde lo alto, revelando sus aguas turquesas, su suave arena y la exuberante vegetación que la rodea.'
        },
        {
            tipo: 'youtube',
            // URL de YouTube limpia
            url: 'https://www.youtube.com/shorts/RGhisSfcYfc',
            titulo: 'Un Viaje por Playa Panteón ',
            texto: 'Descubre Playa Panteón desde otra perspectiva con este video de YouTube: naturaleza, mar y cultura combinados en una experiencia visual cautivadora. Sumérgete en la belleza de este rincón paradisíaco de Oaxaca.'
        },
        {
            tipo: 'youtube',
            // URL de YouTube limpia
            url: 'https://www.youtube.com/shorts/yw96YQaxJaY',
            titulo: 'Navegando por Playa Panteón',
            texto: 'Disfruta de un recorrido en padleboard por las tranquilas aguas de Playa Panteón, donde la serenidad del mar y la belleza del paisaje se unen para ofrecerte una experiencia única.'
        },
        {
            tipo: 'imagen',
            src: amancer,
            titulo: 'Amaneceres y Atardeceres en la Playa',
            texto: 'Captura la magia de los amaneceres y atardeceres en Playa Panteón, donde los colores del cielo se funden con el mar en un espectáculo inolvidable. Un lugar ideal para la fotografía y la contemplación.'
        }
    ];

    const [index, setIndex] = useState(0);
    const nextSlide = () => setIndex((prev) => (prev + 1) % actividades.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + actividades.length) % actividades.length);

    const [mediaIndex, setMediaIndex] = useState(0);
    const nextMedia = () => setMediaIndex((prev) => (prev + 1) % sliderMedia.length);
    const prevMedia = () => setMediaIndex((prev) => (prev - 1 + sliderMedia.length) % sliderMedia.length);

    const [expandedImageSrc, setExpandedImageSrc] = useState(null);
    const openExpandedImage = (src) => setExpandedImageSrc(src);
    const closeExpandedImage = () => setExpandedImageSrc(null);

    return (
        <>
            {/* FONDO RESPONSIVO */}
            <div
                className="sm:hidden fixed inset-0 -z-10"
                style={{
                    backgroundImage: `url(${fondoMobile})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <div
                className="hidden sm:block fixed inset-0 -z-10"
                style={{
                    backgroundImage: `url(${fondoDesktop})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            <div className="w-full min-h-screen">
                {/* HERO SECCIÓN */}
                <div
                    className="h-screen bg-cover bg-center flex items-center relative"
                    style={{ backgroundImage: `url(${playaBg})` }}
                >
                    <div className="bg-black bg-opacity-40 w-full h-full absolute top-0 left-0 z-0"></div>
                    <div className="relative z-10 px-10 max-w-2xl text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Descansa en el paraíso:
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                            Habitaciones y apartamentos a pasos de la playa
                        </h2>
                        <p className="text-lg md:text-xl">
                            Disfruta tu estancia junto al mar, donde cada momento cuenta.
                        </p>
                    </div>
                </div>

                <section className="w-full text-gray-800 font-serif">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center">

                        {/* SLIDER MEDIA (imagen o video/youtube) - Con animación */}
                        <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={mediaIndex}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    {sliderMedia?.[mediaIndex]?.tipo === 'imagen' ? (
                                        <img
                                            src={sliderMedia?.[mediaIndex]?.src}
                                            alt={sliderMedia?.[mediaIndex]?.titulo}
                                            className="w-full h-full object-cover cursor-pointer"
                                            onClick={() => openExpandedImage(sliderMedia?.[mediaIndex]?.src)}
                                        />
                                    ) : sliderMedia?.[mediaIndex]?.tipo === 'video' ? (
                                        <video controls className="w-full h-full object-cover">
                                            <source src={sliderMedia?.[mediaIndex]?.src} type="video/mp4" />
                                            Tu navegador no soporta video.
                                        </video>
                                    ) : sliderMedia?.[mediaIndex]?.tipo === 'youtube' ? (
                                        <iframe
                                            // Usa la función global getYouTubeEmbedUrl para incrustar el video
                                            src={getYouTubeEmbedUrl(sliderMedia[mediaIndex].url)}
                                            title={sliderMedia?.[mediaIndex]?.titulo}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full"
                                        />
                                    ) : null}
                                </motion.div>
                            </AnimatePresence>

                            {/* Botones navegación */}
                          
                     
        <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#000000] hover:text-[#ee23fe] text-6xl z-10"
            onClick={prevMedia}
            aria-label="Anterior elemento"
        >
          ‹
                            </button>
                <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#000000] hover:text-[#ee23fe] text-6xl z-10"
            onClick={nextMedia}
            aria-label="Siguiente elemento"
            >       
            ›
                            </button>
                        </div>

                        {/* TEXTO */}
                        <div className="p-6 md:p-10 bg-white bg-opacity-80">
                            <h2 className="text-3xl font-bold mb-4">{sliderMedia?.[mediaIndex]?.titulo}</h2>
                            <p className="text-lg leading-relaxed">{sliderMedia?.[mediaIndex]?.texto}</p>
                        </div>
                    </div>
                </section>

                {expandedImageSrc && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                        onClick={closeExpandedImage}
                    >
                        <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
                            <img src={expandedImageSrc} alt="Imagen expandida" className="max-w-full max-h-screen object-contain" />
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

                <section className="w-full font-serif">
                    <div className="w-full mt-16 py-8 text-center">
                        <div className="">
                            <h2 className="text-4xl font-bold text-black mb-4">
                                Explora Playa Panteón
                            </h2>
                        </div>
                    </div>

                    {/* Carrusel a pantalla completa - Con animación */}
                    <div className="relative w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="md:flex rounded-xl shadow-lg overflow-hidden bg-white bg-opacity-80 relative"
                            >
                   

                                        {/* Botón anterior */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#000000] hover:text-[#ee23fe] text-6xl z-10"
                            aria-label="Anterior actividad"
                        >
                            ‹
                        </button>

                        {/* Botón siguiente */}
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#000000] hover:text-[#ee23fe] text-6xl z-10"
                            aria-label="Siguiente actividad"
                        >
                            ›
                        </button>


                                {/* Contenedor de la actividad (imagen o video/youtube) */}
                                <div className="w-full md:w-2/3 h-[500px] md:h-[600px] overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={actividades?.[index]?.src || actividades?.[index]?.url}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="w-full h-full"
                                        >
                                            {actividades?.[index]?.tipo === 'youtube' ? (
                                                <iframe
                                                    // Usa la función global getYouTubeEmbedUrl para incrustar el video
                                                    src={getYouTubeEmbedUrl(actividades[index].url) + "?autoplay=0&controls=1&modestbranding=1&rel=0"}
                                                    title={actividades?.[index]?.titulo}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    className="w-full h-full"
                                                ></iframe>
                                            ) : (
                                                <img
                                                    src={actividades?.[index]?.src}
                                                    alt={actividades?.[index]?.titulo}
                                                    className="w-full h-full object-cover"
                                                />
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Texto con fondo claro */}
                                <div className="w-full md:w-1/3 p-6 flex flex-col justify-center bg-white bg-opacity-80">
                                    <h3 className="text-2xl font-bold text-left mb-4">
                                        {actividades?.[index]?.titulo}
                                    </h3>
                                    <p className="text-md leading-relaxed text-left">
                                        {actividades?.[index]?.descripcion || actividades?.[index]?.texto}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </section>

                {/* Sección de YouTube Shorts - Pasándole los videos */}
                <SectionYoutubeShorts videos={myYoutubeVideos} />

                {/* RESEÑAS */}
                <ReseñasGoogle />

                {/* FOOTER */}
                <footer className="bg-gray-800 text-white py-6 px-4 text-center font-serif text-sm mt-16">
                    <div className="mb-2">
                        <p className="text-lg font-semibold">Casa Mariposa {new Date().getFullYear()}</p>
                        <p className="text-sm italic text-gray-300">Cerca del mar</p>
                    </div>

                    <motion.div
                        className="flex items-center justify-center gap-2 mt-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.15 } },
                        }}
                    >
                        <motion.p
                            className="text-sm"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        >
                            Designed by Losky
                        </motion.p>

                        <motion.img
                            src={logo}
                            alt="Logo Losky"
                            className="h-6 w-auto"
                            variants={{ hidden: { opacity: 0, y: 30, rotate: -20 }, visible: { opacity: 1, y: 0, rotate: 0 } }}
                        />
                    </motion.div>
                </footer>
            </div>
        </>
    );
}

export default Home;
