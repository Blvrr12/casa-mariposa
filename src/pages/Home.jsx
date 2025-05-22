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
      descripcion: 'Aprende con instructores locales en olas suaves ideales para principiantes.'
    },
    {
      src: surftrips,
      titulo: 'Surftrips',
      descripcion: 'Explora otras playas cercanas y vive la emoción del surf en grupo.'
    },
    {
      src: relax,
      titulo: 'Relájate frente al mar',
      descripcion: 'Disfruta la cercanía del mar con brisa suave, ideal para leer o meditar.'
    },
    {
      src: snorkel,
      titulo: 'Snorkel en Playa Panteón',
      descripcion: 'Descubre coloridos peces y corales en una experiencia submarina inolvidable.'
    }
  ];

  

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % actividades.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + actividades.length) % actividades.length);

  // 👉 Ciclo automático
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1400); // Cambia cada 1 segundo

    return () => clearInterval(interval); // Limpieza al desmontar
  }, []);

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

        {/* PLAYA DESCRIPCIÓN */}
        <section className="relative text-gray-800 py-16 px-6 md:px-20 font-serif">
          <div className="grid md:grid-cols-2 gap-10 items-center bg-white bg-opacity-80 p-6 rounded-xl">
            <img src={playa2} alt="Puerto Ángel" className="rounded shadow-lg" />
            <div>
              <h2 className="text-3xl font-bold mb-4">Puerto Ángel, Playa Panteón</h2>
              <p className="text-lg leading-relaxed">
                Playa Panteón en Puerto Ángel es un lugar tranquilo con aguas cristalinas y arena dorada,
                perfecto para nadar y relajarse. Rodeada de palmeras y pequeños restaurantes, ofrece una
                atmósfera acogedora y auténtica para disfrutar el encanto costero de Oaxaca.
              </p>
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
