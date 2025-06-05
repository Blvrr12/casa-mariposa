import fondoDesktop from '../assets/fondo1.svg';
import fondoMobile from '../assets/celular.svg';
import playaBg from '../assets/backgrounds/playa.png';
import playa2 from '../assets/backgrounds/playa2.png';
import surf from '../assets/backgrounds/surf.png';
import surftrips from '../assets/backgrounds/surftrip.png';
import relax from '../assets/backgrounds/aerea.png';
import snorkel from '../assets/backgrounds/snorkel.jpg';
import ReseñasGoogle from '../components/ReseñasGoogle';
import logo from '../assets/backgrounds/1.png';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


function Home() {
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
    src: snorkel,
    titulo: 'Snorkel en Playa Panteón',
    descripcion: 'Descubre un mundo submarino lleno de coloridos peces y formaciones coralinas en aguas tranquilas y cristalinas.'
  },
  {
    src: surf, // Usa una imagen distinta si tienes
    titulo: 'Tour en bote',
    descripcion: 'Según la temporada, podrás ver ballenas, tortugas marinas, delfines y bancos de peces, además de conocer tres playas inolvidables.'
  },
  {
    src: relax, // Reemplázala por una imagen de amanecer si tienes
    titulo: 'Caminata al amanecer',
    descripcion: 'Comienza tu día con una caminata tranquila mientras ves salir el sol sobre el horizonte costero.'
  },
  {
    src: snorkel, // Reemplázala por una imagen de paddleboard si tienes
    titulo: 'Paddleboard',
    descripcion: 'Recorre las tranquilas aguas de Puerto Ángel de pie sobre una tabla, ideal para ejercitarte y relajarte al mismo tiempo.'
  }
];

  

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % actividades.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + actividades.length) % actividades.length);





const sliderMedia = [
  {
    tipo: 'imagen',
    src: playa2,
    texto: 'Playa Panteón en Puerto Ángel es un lugar tranquilo con aguas cristalinas y arena dorada, perfecto para nadar y relajarse. Rodeada de palmeras y pequeños restaurantes, ofrece una atmósfera acogedora y auténtica para disfrutar el encanto costero de Oaxaca.'
  },
  {
    tipo: 'video',
   // src: videoDemo,
    texto: 'Descubre Playa Panteón desde otra perspectiva con este video: naturaleza, mar y cultura combinados en una experiencia visual cautivadora.'
  },
  {
    tipo: 'imagen',
    src: surf,
    texto: 'Perfecto para quienes desean tomar clases de surf en olas suaves con instructores locales.'
  },
  {
    tipo: 'imagen',
    src: relax,
    texto: 'Un entorno sereno para descansar frente al mar, ideal para leer, meditar o simplemente desconectarte.'
  }
];

const [mediaIndex, setMediaIndex] = useState(0);
const nextMedia = () => setMediaIndex((prev) => (prev + 1) % sliderMedia.length);
const prevMedia = () => setMediaIndex((prev) => (prev - 1 + sliderMedia.length) % sliderMedia.length);








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




{/* PLAYA DESCRIPCIÓN NUEVO SLIDER */}
<section className="relative text-gray-800 py-16 px-6 md:px-20 font-serif">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white bg-opacity-80 p-6 rounded-xl">

    {/* SLIDER MEDIA (imagen o video) */}
    <div className="relative w-full space-y-4">
      <div className="relative h-96 sm:h-96 bg-gray-100 rounded shadow overflow-hidden">
        {sliderMedia[mediaIndex].tipo === 'imagen' ? (
          <img
            src={sliderMedia[mediaIndex].src}
            alt={`Slide ${mediaIndex + 1}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <video controls className="w-full h-full object-cover rounded">
            <source src={sliderMedia[mediaIndex].src} type="video/mp4" />
            Tu navegador no soporta video.
          </video>
        )}

        {/* Botones navegación */}
        <button
          onClick={prevMedia}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl bg-black bg-opacity-40 rounded-full px-2"
        >
          ‹
        </button>
        <button
          onClick={nextMedia}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl bg-black bg-opacity-40 rounded-full px-2"
        >
          ›
        </button>
      </div>
    </div>

    {/* TEXTO DESCRIPCIÓN */}
    <div>
      <h2 className="text-3xl font-bold mb-4">Puerto Ángel, Playa Panteón</h2>
      <p className="text-lg leading-relaxed">{sliderMedia[mediaIndex].texto}</p>
    </div>
  </div>
</section>


       {/* CARRUSEL ACTIVIDADES */}
<section className="py-16 font-serif">
  <h2 className="text-4xl font-bold text-center mb-12">
    Explora Playa Panteón
  </h2>

  <div className="relative max-w-5xl mx-auto">
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.3 }}
        className="md:flex rounded-xl shadow-lg overflow-hidden bg-white bg-opacity-80 relative"
      >
        {/* Botón anterior */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a0a0a0] hover:text-[#ee23fe] text-4xl z-10"
        >
          ‹
        </button>

        {/* Botón siguiente */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#a0a0a0] hover:text-[#ee23fe] text-4xl z-10"
        >
          ›
        </button>

        {/* Imagen */}
        <div className="w-full md:w-2/3 h-72 md:h-96">
          <img
            src={actividades[index].src}
            alt={actividades[index].titulo}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/3 p-6 flex flex-col justify-center text-gray-800">
          <h3 className="text-2xl font-bold text-center mb-4">
            {actividades[index].titulo}
          </h3>
          <p className="text-md leading-relaxed text-justify">
            {actividades[index].descripcion}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
</section>


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
