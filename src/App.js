import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link, animateScroll as scroll, scroller } from 'react-scroll';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import CountUp from 'react-countup';
import { FaKey, FaGift, FaUtensils, FaUsers, FaBook, FaCode, FaUserTie, FaCertificate, FaTrophy, FaUserCircle, FaShareAlt, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import DDImg from './images/DD.png';
import { Helmet } from 'react-helmet';
import newsletters from './data/newsletters.json';
// import logo from './logo.svg'; // Replace with your logo if available

// --- Navigation Bar ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const isHome = location.pathname === '/';
  return (
    <nav
      className={
        'fixed top-0 left-0 w-full z-50 border-b border-gray-100 transition-all duration-300 ' +
        (scrolled ? 'bg-white/70 backdrop-blur-sm' : 'bg-white')
      }
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <RouterLink to="/" className="flex items-center gap-3 cursor-pointer group">
          <img src={require('./images/logo.png')} alt="Data Drivers Logo" className="h-10 w-10 object-contain group-hover:scale-105 transition-transform" />
          <div className="text-2xl font-bold tracking-tight text-blue-700 group-hover:text-blue-900 transition-colors">Data Drivers</div>
        </RouterLink>
        <div className="space-x-8 hidden md:flex">
          <RouterLink
            to="/about"
            className="cursor-pointer text-gray-700 hover:text-blue-700 font-medium transition-colors"
          >
            Sobre Nosotros
          </RouterLink>
          {isHome ? (
            ['Home', 'Eventos', 'Join'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer text-gray-700 hover:text-blue-700 font-medium transition-colors"
                activeClass="text-blue-700"
                spy={true}
              >
                {item}
              </Link>
            ))
          ) : (
            <RouterLink
              to="/"
              className="cursor-pointer text-gray-700 hover:text-blue-700 font-medium transition-colors"
            >
              Home
            </RouterLink>
          )}
          <RouterLink
            to="/merch"
            className="cursor-pointer text-gray-700 hover:text-blue-700 font-medium transition-colors"
          >
            Merch
          </RouterLink>
          <RouterLink
            to="/newsletter"
            className="cursor-pointer text-gray-700 hover:text-blue-700 font-medium transition-colors"
          >
            Newsletter
          </RouterLink>
        </div>
      </div>
    </nav>
  );
};

// --- Hero Section ---
const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center bg-black"
    style={{ minHeight: '80vh' }}
  >
    <img
      src={require('./images/IMG_3060(2).JPG')}
      alt="Clase Data Drivers"
      className="absolute inset-0 w-full h-full object-cover object-center brightness-75"
      style={{ zIndex: 1 }}
    />
    <div className="absolute inset-0 bg-black/60" style={{ zIndex: 2 }} />
    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Data Drivers Club
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl drop-shadow"
      >
        Impulsando el futuro con IA, programación y análisis de datos en la Universidad de Navarra.
      </motion.p>
    </div>
  </section>
);

// --- About / Mission Section ---
const About = () => (
  <section id="about" className="py-10 bg-gray-50">
    {/* Eliminado el div vacío para reducir el espacio */}
  </section>
);

// --- Features/Benefits Section ---
const features = [
  {
    icon: (
      <FaBook className="w-10 h-10 mx-auto mb-4 text-blue-700" />
    ),
    title: 'Workshops y Sesiones Formativas',
    desc: 'Aprende de forma práctica sobre IA, programación y análisis de datos.'
  },
  {
    icon: (
      <FaCode className="w-10 h-10 mx-auto mb-4 text-blue-700" />
    ),
    title: 'Hackathons y Retos',
    desc: 'Pon a prueba tus habilidades en desafíos reales y colaborativos.'
  },
  {
    icon: (
      <FaUserTie className="w-10 h-10 mx-auto mb-4 text-blue-700" />
    ),
    title: 'Ponencias de Expertos',
    desc: 'Conecta con líderes de la industria y aprende de su experiencia.'
  }
];

const Features = () => (
  <section id="features" className="pt-6 pb-20 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-10">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className="bg-gray-50 rounded-lg p-8 text-center border border-gray-100"
          >
            {f.icon}
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{f.title}</h3>
            <p className="text-gray-600 text-base">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const MemberBenefits = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <section ref={ref} className="py-20 bg-blue-50 border-t border-b border-blue-100">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center md:text-left">Beneficios para Miembros</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-3">
              <FaKey className="w-7 h-7 text-blue-700" />
              Licencias de software premium (Datacamp, IBM, etc.)
            </li>
            <li className="flex items-center gap-3">
              <FaGift className="w-7 h-7 text-blue-700" />
              Regalos y sorteos exclusivos
            </li>
            <li className="flex items-center gap-3">
              <FaUtensils className="w-7 h-7 text-blue-700" />
              Comida y eventos sociales
            </li>
            <li className="flex items-center gap-3">
              <FaUsers className="w-7 h-7 text-blue-700" />
              Networking y acceso a ponentes y empresas
            </li>
            <li className="flex items-center gap-3">
              <FaCertificate className="w-7 h-7 text-blue-700" />
              Convalidación de ECTS por participación activa
            </li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="bg-white rounded-2xl shadow-lg px-10 py-8 flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-2">
              <CountUp end={inView ? 50 : 0} duration={2.5} suffix="+" />
            </span>
            <span className="text-lg text-gray-700 font-medium">Miembros en el club</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Gallery Section ---
const galleryImages = [
  { src: require('./images/IMG_3169.JPG'), alt: 'IMG_3169.JPG' },
  { src: require('./images/IMG_7623(1).JPG'), alt: 'IMG_7623(1).JPG' },
  { src: require('./images/IMG_7641.JPG'), alt: 'IMG_7641.JPG' },
  { src: require('./images/IMG_7692(1).JPG'), alt: 'IMG_7692(1).JPG' },
  { src: require('./images/IMG_7628.JPG'), alt: 'IMG_7628.JPG' },
  { src: require('./images/IMG_1067(1).jpg'), alt: 'IMG_1067(1).jpg' },
  { src: require('./images/img1.jpg'), alt: 'img1' },
  { src: require('./images/img2.jpg'), alt: 'img2' },
  { src: require('./images/Copy of IMG_0247.JPG'), alt: 'Copy of IMG_0247.JPG' },
  { src: require('./images/Copy of IMG_0232.jpg'), alt: 'Copy of IMG_0232.jpg' },
  // Puedes añadir más imágenes aquí
];

const Gallery = () => (
  <section id="gallery" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Galería</h2>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="break-inside-avoid"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full rounded-lg border border-blue-100 mb-2 object-cover"
            />
            {/* <span className="text-gray-500 text-sm text-center block">{img.alt}</span> */}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- Updated Events Section with Photos ---
const events = [
  {
    title: 'MiniReto Isla Sicilia x Data Drivers',
    desc: 'Desafío analítico real aplicado al ámbito empresarial. Colaboración con Isla Sicilia y Pallapizza.',
    date: 'Abril 2025',
    img: require('./images/event_isla_sicilia.jpg'),
  },
  {
    title: 'Sesión Formativa: Python, NumPy, Pandas y Matplotlib',
    desc: 'Consolidando competencias en análisis de datos moderno.',
    date: 'Marzo 2025',
    img: require('./images/event_python.jpg'),
  },
  {
    title: 'AI & Mainframe con IBM',
    desc: 'Sesión con Rubén Crespo, IBM Champion 2025, sobre mainframe, IA y cifrado cuántico.',
    date: 'Febrero 2025',
    img: require('./images/event_ibm.jpg'),
  },
];

const Events = () => (
  <section id="eventos" className="py-20 bg-gray-50">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Eventos Recientes</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {events.map((e, i) => (
          <motion.div
            key={e.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className="bg-white border border-gray-100 rounded-lg p-8 text-center flex flex-col items-center shadow-md"
          >
            <img
              src={e.img}
              alt={e.title}
              className="w-full h-60 object-cover rounded-md mb-6 border border-blue-100"
            />
            <h3 className="text-2xl font-bold text-blue-700 mb-3">{e.title}</h3>
            <p className="text-lg text-gray-600 mb-3">{e.desc}</p>
            <span className="text-base text-gray-400">{e.date}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- Call to Action (Join) Section ---
const Join = () => (
  <section id="join" className="py-24 bg-blue-700 text-white text-center">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-3xl md:text-4xl font-bold mb-6"
    >
      ¿Listo para impulsar tu futuro con datos?
    </motion.h2>
    <motion.button
      disabled
      whileHover={{ scale: 1.0 }}
      whileTap={{ scale: 1.0 }}
      className="inline-block px-10 py-4 bg-gray-300 text-blue-700 rounded-full font-semibold text-lg transition-colors cursor-not-allowed opacity-70"
    >
      Únete al Club
    </motion.button>
    <p className="mt-4 text-white/80 text-lg">El formulario de inscripción estará disponible el <b>1 de septiembre</b>.</p>
    {/* Cuando esté disponible, reemplaza el botón por un enlace al formulario o integra el formulario aquí. */}
  </section>
);

// --- Merch Section ---
const merchItems = [
  {
    name: 'Camiseta Data Drivers',
    desc: 'Camiseta oficial del club, perfecta para eventos y el día a día.',
    img: require('./images/merch1.png'),
  },
  {
    name: 'Taza Data Drivers',
    desc: 'Empieza tu día con energía y estilo Data Drivers.',
    img: require('./images/merch2.png'),
  },
  // Puedes añadir más productos aquí
];

const wallpapers = [
  {
    nombre: 'Fondo iPhone 1',
    archivo: 'wallpaper1.png',
    tipo: 'iPhone',
  },
  {
    nombre: 'Fondo iPhone 2',
    archivo: 'wallpaper2.png',
    tipo: 'iPhone',
  },
  {
    nombre: 'Fondo iPhone 3',
    archivo: 'wallpaper3.png',
    tipo: 'iPhone',
  },
];

const FondosPantalla = () => (
  <section id="fondos" className="py-24 bg-white">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center tracking-tight">Fondos de Pantalla</h2>
      <p className="text-base text-gray-500 text-center mb-12">Descarga fondos exclusivos de Data Drivers para tu móvil o PC. Haz clic en el botón para obtener la imagen en máxima calidad.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {wallpapers.map((w, i) => (
          <div key={i} className="flex flex-col items-center">
            <img
              src={require(`./images/${w.archivo}`)}
              alt={w.nombre}
              className="w-full max-w-2xl h-[32rem] object-cover rounded-3xl mb-8"
            />
            <span className="font-medium text-gray-900 mb-2 text-lg text-center">{w.nombre}</span>
            <span className="text-xs text-gray-400 mb-4">{w.tipo === 'pc' ? 'PC' : 'Móvil'}</span>
            <a
              href={require(`./images/${w.archivo}`)}
              download={w.nombre.replace(/ /g, '_')}
              className="px-10 py-3 bg-black text-white rounded-full text-base font-semibold hover:bg-gray-800 transition"
            >
              Descargar
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Merch = () => (
  <section id="merch" className="py-24 bg-white">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center tracking-tight">Merchandising</h2>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-xl mb-12 text-center text-base font-medium">
        El merchandising de Data Drivers es exclusivo para los miembros más participativos. Conforme te involucres y participes en el club, podrás acceder a estos productos como reconocimiento. Todo está sujeto a disponibilidad y stock limitado, ya que no tenemos ánimo de lucro ni grandes recursos. ¡Participa y gana tu merch oficial!
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {merchItems.map((item, i) => (
          <div
            key={item.name}
            className="flex flex-col items-center"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full max-w-2xl h-[32rem] object-contain mb-8 rounded-3xl"
            />
            <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">{item.name}</h3>
            <p className="text-gray-500 text-center text-base mb-4">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Location Section ---
const Location = () => (
  <section id="ubicacion" className="py-24 bg-gradient-to-b from-blue-50 via-white to-white border-t border-b border-gray-100">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Ubicación</h2>
      <p className="text-lg text-gray-700 mb-10">Estamos en la <b>Facultad de Económicas</b> de la Universidad de Navarra, Pamplona.</p>
      <div className="mx-auto max-w-xl rounded-3xl shadow-xl border border-blue-200 bg-white overflow-hidden">
        <iframe
          title="Facultad de Económicas - Universidad de Navarra"
          src="https://www.google.com/maps?q=Facultad+de+Econ%C3%B3micas,+Universidad+de+Navarra,+Pamplona&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <img
        src={require('./images/unav.png')}
        alt="Universidad de Navarra Logo"
        className="w-40 h-40 object-contain mx-auto mt-6"
      />
    </div>
  </section>
);

// --- Footer ---
const Footer = () => {
  // Detectar si estamos en la home
  const isHome = window.location.pathname === '/';
  // Función para scroll suave o redirección
  const handleNewsletterClick = (e) => {
    e.preventDefault();
    if (isHome) {
      scroller.scrollTo('newsletter-teaser', { smooth: true, duration: 700, offset: -80 });
    } else {
      window.location.href = '/#newsletter-teaser';
    }
  };
  return (
    <footer className="py-8 bg-white border-t border-gray-100 text-center text-gray-500 text-sm">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <span>Contacto: <a href="mailto:datadriversunav@gmail.com" className="text-blue-700 hover:underline">datadriversunav@gmail.com</a></span>
        <span className="hidden md:inline">|</span>
        <span className="flex gap-2 items-center justify-center">
          <a href="https://www.linkedin.com/company/data-drivers-unav/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 ml-1">LinkedIn</a>
          <a href="https://chat.whatsapp.com/your-invite-link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500 text-white font-medium hover:bg-green-600 transition-colors ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.37L4 29l7.824-2.05A11.94 11.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.77 0-3.47-.46-4.95-1.33l-.35-.21-4.65 1.22 1.24-4.53-.23-.36A9.94 9.94 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.71c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.67.15-.2.29-.77.94-.95 1.13-.17.2-.35.22-.64.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.53.15-.18.2-.31.3-.51.1-.2.05-.38-.02-.53-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.53.08-.81.38-.28.3-1.07 1.05-1.07 2.56 0 1.5 1.09 2.95 1.24 3.16.15.2 2.14 3.28 5.19 4.47.73.31 1.3.5 1.75.64.74.24 1.41.21 1.94.13.59-.09 1.81-.74 2.07-1.45.26-.71.26-1.32.18-1.45-.08-.13-.26-.2-.55-.35z"/></svg>
            WhatsApp
          </a>
          <a
            href="#newsletter-teaser"
            onClick={handleNewsletterClick}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors ml-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            Newsletter
          </a>
        </span>
        <span className="hidden md:inline">|</span>
        <span>&copy; {new Date().getFullYear()} Data Drivers | UNAV</span>
      </div>
    </footer>
  );
};

// --- Merch Page ---
const MerchPage = () => (
  <div className="font-sans bg-white min-h-screen">
    <Navbar />
    <main>
      <Merch />
      <FondosPantalla />
    </main>
    <Footer />
  </div>
);

// --- Colaboradores Section ---
const collaborators = [
  {
    name: 'Microsoft',
    img: require('./images/microsoft.png'),
    desc: 'Colaboración en formación y eventos de tecnología.'
  },
  {
    name: 'Datacamp',
    img: require('./images/datacamp.png'),
    desc: 'Patrocinio y recursos para formación en data science.'
  },
  {
    name: 'Denodo',
    img: require('./images/denodo.png'),
    desc: 'Colaboración en workshops y master classes.'
  },
  {
    name: 'IBM',
    img: require('./images/ibm.png'),
    desc: 'Charlas, ponencias y apoyo en IA y mainframe.'
  },
  // Puedes añadir más empresas aquí
];

const Colaboradores = () => (
  <section id="colaboradores" className="py-20 bg-white border-t border-b border-gray-100">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Empresas Colaboradoras</h2>
      <p className="text-lg text-gray-700 mb-10">Estas son algunas de las empresas con las que hemos contado para apoyarnos, impartir ponencias y colaborar en actividades del club.</p>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {collaborators.map((c) => (
          <div key={c.name} className="bg-gray-50 rounded-xl border border-gray-200 p-6 flex flex-col items-center w-full md:w-72 shadow-sm">
            <img src={c.img} alt={c.name} className="w-24 h-24 object-contain mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{c.name}</h3>
            <p className="text-gray-600 text-center text-base">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- About Us Page ---
const destacadosAsistencia = [
  { name: 'Constanza Castella', value: '100%' },
  { name: 'Marta Diaz Sanchez', value: '94%' },
  { name: 'Beñat Berasaluze', value: '88%' },
  { name: 'Agustin Pilco', value: '88%' },
  { name: 'Alba Amann Queralt', value: '88%' },
  { name: 'Sebastián del Olmo', value: '82%' },
];
const destacadosDataCamp = [
  { name: 'Diego Monge', value: '93.635 XP' },
  { name: 'Hanna Garcia Gonzalez', value: '82.350 XP' },
  { name: 'Alejandro Vanderlinde Juarez', value: '71.251 XP' },
  { name: 'Leonardo Sanchez', value: '65.008 XP' },
  { name: 'Fernando Castro del Hierro', value: '39.950 XP' },
];

const PodiumRow = ({ idx, name, value }) => {
  let rowClass = '';
  if (idx === 0) rowClass = 'bg-yellow-100 font-bold';
  else if (idx === 1) rowClass = 'bg-gray-100 font-semibold';
  else if (idx === 2) rowClass = 'bg-orange-100 font-semibold';
  return (
    <tr className={`transition-colors hover:bg-blue-50 ${rowClass}`}> 
      <td className="px-4 py-2">{idx + 1}</td>
      <td className="px-4 py-2">{name}</td>
      <td className="px-4 py-2">{value}</td>
    </tr>
  );
};

const AboutUsPage = () => (
  <div className="font-sans bg-white min-h-screen">
    <Navbar />
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 text-center mb-10 drop-shadow-lg tracking-tight">
        Fundadores & Visión
      </h1>
      <div className="flex flex-col items-center mb-12">
        <img src={require('./images/IMG_0285(1).JPG')} alt="Fundadores Data Drivers" className="w-full max-w-2xl rounded-3xl object-cover border-4 border-blue-100 mb-4 shadow-2xl" style={{ minHeight: '320px', maxHeight: '480px' }} />
        <span className="text-gray-600 text-lg mt-2 text-center">Miguel, Dante y Marco — Fundadores de Data Drivers</span>
        <p className="text-lg text-gray-700 mt-8 text-center max-w-2xl">
          Nuestra visión es crear una comunidad universitaria vibrante y colaborativa, donde los estudiantes puedan aprender, compartir y crecer juntos en el mundo de los datos y la tecnología. Creemos en el poder de la comunidad para impulsar el talento, la innovación y el futuro profesional de cada miembro.
        </p>
      </div>
      <section className="mb-12 bg-gradient-to-br from-yellow-50 via-white to-blue-50 rounded-3xl border-2 border-yellow-300 shadow-lg p-8 flex flex-col items-center">
        <FaTrophy className="w-16 h-16 text-yellow-400 mb-2 drop-shadow" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-700 mb-2 text-center tracking-tight">Miembros Destacados 24-25</h2>
        <p className="text-lg text-blue-700 mb-6 text-center font-medium">Reconocemos el esfuerzo, la constancia y la pasión por los datos.<br />¡Enhorabuena a los más comprometidos!</p>
        <div className="w-full grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-700 mb-2">Asistencia</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-gray-700">#</th>
                    <th className="px-4 py-2 text-left text-gray-700">Nombre</th>
                    <th className="px-4 py-2 text-left text-gray-700">Asistencia</th>
                  </tr>
                </thead>
                <tbody>
                  {destacadosAsistencia.map((m, idx) => (
                    <PodiumRow key={m.name} idx={idx} name={m.name} value={m.value} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-700 mb-2">DataCamp</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-gray-700">#</th>
                    <th className="px-4 py-2 text-left text-gray-700">Nombre</th>
                    <th className="px-4 py-2 text-left text-gray-700">XP</th>
                  </tr>
                </thead>
                <tbody>
                  {destacadosDataCamp.map((m, idx) => (
                    <PodiumRow key={m.name} idx={idx} name={m.name} value={m.value} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

// --- Vaquero Section ---
const VaqueroSection = () => (
  <section className="relative w-full py-20 bg-black flex flex-col items-center justify-center">
    <h2 className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg text-center mb-4 z-10 relative">
      Espíritu Data Drivers
    </h2>
    <h3 className="text-lg text-white/90 mb-8 text-center max-w-2xl z-10 relative">
      "Innovar, aprender y disfrutar del camino juntos. Vaquero Data Drivers"
    </h3>
    <div className="relative w-full flex justify-center">
      <img
        src={require('./images/vaquero.png')}
        alt="Vaquero Data Drivers"
        className="w-full max-h-[500px] object-cover object-center grayscale"
        style={{ opacity: 0.85 }}
      />
    </div>
  </section>
);

// --- Testimonios Section ---
const testimonios = [
  {
    nombre: 'Lucía Fernández',
    frase: 'Gracias al club he conseguido mi primera beca en IA. ¡La comunidad es increíble!',
    img: require('./images/IMG_3169.JPG'),
  },
  {
    nombre: 'Carlos Pérez',
    frase: 'Nunca pensé que aprender Python y datos sería tan divertido. ¡Repetiría sin dudarlo!',
    img: require('./images/IMG_7623(1).JPG'),
  },
  {
    nombre: 'Sofía Martínez',
    frase: 'Los eventos y retos me han dado confianza para buscar prácticas en empresas top.',
    img: require('./images/IMG_7641.JPG'),
  },
];

const Testimonios = () => (
  <section id="testimonios" className="py-20 bg-gradient-to-b from-blue-50 via-white to-white border-t border-b border-blue-100">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-10">Testimonios de Miembros</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonios.map((t, i) => (
          <motion.div
            key={t.nombre}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7, type: 'spring', bounce: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-blue-100 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <img src={t.img} alt={t.nombre} className="w-24 h-24 rounded-full object-cover border-4 border-blue-200 mb-4" />
            <p className="text-lg text-gray-700 italic mb-2">“{t.frase}”</p>
            <span className="font-bold text-blue-700">{t.nombre}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- Chatbot DD ---
function getSaludoHora() {
  const h = new Date().getHours();
  if (h < 7) return '¡Hola noctámbulo! 🌙';
  if (h < 13) return '¡Buenos días! ☀️';
  if (h < 20) return '¡Buenas tardes!';
  return '¡Buenas noches!';
}

const DD_BOT_RESPONSES = [
  // Saludo contextual
  { match: /^(hola|buenas|hey|holi|hello)$/i, resp: () => getSaludoHora() + ' Soy DD. ¿Listo para descubrir el club más innovador de la UNAV?' },
  { match: /gracias|thank/i, resp: '¡De nada! Para eso estoy, para ayudarte a surfear el mundo de los datos 🚀.' },
  { match: /adios|bye|hasta luego/i, resp: '¡Nos vemos! 😎' },

  // Sobre el club y lo que se hace
  { match: /evento|actividades|próximos|pasados/i, resp: { text: 'Puedes ver todos los eventos y actividades aquí.', action: 'scroll', target: 'eventos' } },
  { match: /aprender|contenido|qué hacéis|temas/i, resp: 'En el club exploramos análisis de datos, Python, R, visualización, IA, machine learning y más. Mira la sección "Qué hacemos".' },
  { match: /beneficio|ventaja|por qué/i, resp: { text: 'Consulta los beneficios aquí.', action: 'scroll', target: 'memberbenefits' } },
  { match: /crédito|ects|convalid/i, resp: '¡Sí! Participando activamente puedes convalidar ECTS cada semestre. Mira los beneficios.' },
  { match: /empleo|trabajo|salidas|carrera|futuro/i, resp: 'El club te conecta con empresas, proyectos reales, y oportunidades como hackathones y datathons. ¡Un boost a tu CV!' },
  { match: /colabora|empresas|externo|patrocina/i, resp: 'Colaboramos con empresas como IBM, Celonis y otras startups para que vivas experiencias reales. Más detalles en la sección "Partners".' },
  { match: /material|grabaciones|recursos|videos/i, resp: 'Algunos workshops tienen grabaciones disponibles. Están en la sección "Recursos" o escríbenos si no encuentras lo que buscas.' },
  { match: /premio|datathon|ganasteis|logros/i, resp: '¡Sí! Hemos ganado datathones como el Celonis Datathon y participado en eventos internacionales. Consulta "Logros del Club".' },

  // Participación y comunidad
  { match: /inscrip|apuntar|unir|formulario|alta/i, resp: { text: 'La inscripción se hace aquí.', action: 'scroll', target: 'join' } },
  { match: /quién puede|requisitos|perfil|estudio/i, resp: 'Cualquier estudiante de UNAV interesado en datos puede unirse: ADE, Ingeniería, ISSA, Medicina… ¡La diversidad suma!' },
  { match: /horario|cuándo|reuniones|quedadas/i, resp: 'Nos reunimos cada dos semanas los miércoles a las 14:00 en el aula 14 del Edificio de Económicas. ¡Pero revisa la sección "Eventos" por si hay cambios!' },

  // Sobre el equipo y ubicación
  { match: /fundador|quién|lead|líder|founder/i, resp: 'Miguel, Dante y Marco son los fundadores y líderes del club. Cada uno aporta su talento: Miguel lidera la visión, Dante es el mago de la automatización y Marco es el estratega de los datathones. ¡Juntos forman el dream team de Data Drivers!' },
  { match: /miguel|dante|marco/i, resp: '¿Uno de los líderes? ¡Los cracks del club! Miguel te inspira a ir más allá, Dante automatiza hasta el café y Marco ya está resolviendo el siguiente datathon antes de que empiece 😎.' },
  { match: /ubicación|dónde|localización|mapa/i, resp: 'Estamos en la Facultad de Económicas, Universidad de Navarra. Mira la sección de ubicación para el mapa.' },

  // Contacto y ayuda
  { match: /contacto|email|correo/i, resp: 'Puedes escribirnos a datadriversunav@gmail.com o por LinkedIn/WhatsApp (en el pie de página).' },
  { match: /no se|no sabes|ayuda|perdido|duda/i, resp: '¡No te preocupes! Explora el menú o pregúntame por cualquier sección. ¡Aquí nadie se queda atrás!' },
  { match: /eres|quién eres|qué eres/i, resp: '¡Soy DD! Tu asistente digital del club Data Drivers. Estoy aquí para ayudarte a sacar el máximo partido al club 💡' },

  // Fallback para entradas no reconocidas
  { match: /.*/, resp: 'Mmm... eso no lo tengo aún, pero puedes explorar el menú de la web o escribirme con otras palabras 😊' }
];

function DDChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: '¡Hola! Soy DD, tu asistente. ¿En qué puedo ayudarte?' }
  ]);

  function handleSend() {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    const found = DD_BOT_RESPONSES.find(r => r.match.test(input));
    let botMsg;
    if (found) {
      if (typeof found.resp === 'function') {
        botMsg = { from: 'bot', text: found.resp() };
      } else if (typeof found.resp === 'object' && found.resp.action === 'scroll') {
        botMsg = { from: 'bot', text: found.resp.text, action: found.resp.action, target: found.resp.target };
      } else {
        botMsg = { from: 'bot', text: found.resp };
      }
    } else {
      botMsg = { from: 'bot', text: '¡No tengo la respuesta exacta, pero explora el menú o pregúntame por cualquier sección. ¡Aquí nadie se queda sin ayuda! 🚀' };
    }
    setMessages(msgs => [...msgs, userMsg, botMsg]);
    setInput('');
    // Si hay acción de scroll
    if (botMsg.action === 'scroll' && botMsg.target) {
      setTimeout(() => {
        const el = document.getElementById(botMsg.target);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 500);
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleSend();
  }

  return (
    <>
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed z-50 bottom-6 right-6 bg-white rounded-full shadow-lg p-2 border-2 border-blue-300 hover:scale-105 transition-transform"
        style={{ width: 64, height: 64 }}
        aria-label="Abrir chat DD"
      >
        <img src={DDImg} alt="Mascota DD" className="w-full h-full object-contain" />
      </button>
      {open && (
        <div className="fixed z-50 bottom-24 right-6 w-80 max-w-xs bg-white rounded-2xl shadow-2xl border-2 border-blue-200 flex flex-col overflow-hidden animate-fade-in">
          <div className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2">
            <img src={DDImg} alt="Mascota DD" className="w-8 h-8 rounded-full border border-white" />
            <span className="font-bold">DD Asistente</span>
          </div>
          <div className="flex-1 p-3 space-y-2 overflow-y-auto max-h-64 bg-blue-50">
            {messages.map((msg, i) => (
              <div key={i} className={msg.from === 'bot' ? 'text-left' : 'text-right'}>
                <span className={msg.from === 'bot' ? 'inline-block bg-white text-blue-700 rounded-lg px-3 py-1 mb-1 shadow' : 'inline-block bg-blue-600 text-white rounded-lg px-3 py-1 mb-1 shadow'}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex border-t border-blue-100">
            <input
              className="flex-1 px-3 py-2 outline-none text-sm"
              placeholder="Escribe tu pregunta..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
            <button
              onClick={handleSend}
              className="px-4 text-blue-700 font-bold hover:text-blue-900"
              aria-label="Enviar"
            >
              &rarr;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// --- Newsletter Teaser (Home) ---
const NewsletterTeaser = ({ onOpen }) => {
  const newsletter = newsletters[0];
  return (
    <section id="newsletter-teaser" className="py-16 bg-white border-t border-b border-blue-100">
      <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        {newsletter.portada && (
          <img src={require(`./images/${newsletter.portada}`)} alt="Portada newsletter" className="w-40 h-40 object-cover rounded-2xl border-2 border-blue-200 shadow-md" />
        )}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-blue-800 mb-2">{newsletter.titulo}</h2>
          <span className="text-sm text-gray-500 mb-2 block">{new Date(newsletter.fecha).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <p className="text-base text-gray-700 mb-4 line-clamp-2">{newsletter.resumen}</p>
          <button
            onClick={onOpen}
            className="inline-flex items-center gap-2 px-5 py-2 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition-colors shadow"
          >
            Leer más <FaShareAlt />
          </button>
        </div>
      </div>
    </section>
  );
};

// --- NewsletterPage y modal mejorado ---
const NewsletterPage = () => {
  const [selected, setSelected] = useState(null);
  // Filtrar solo enero y recap junio
  let filteredNewsletters = newsletters.filter(nl => {
    const fecha = new Date(nl.fecha);
    // Enero de cualquier año
    const isEnero = fecha.getMonth() === 0;
    // Recap de junio 2025
    const isRecap = nl.fecha === '2025-06-01';
    return isEnero || isRecap;
  });
  // Ordenar por fecha descendente (más reciente primero)
  filteredNewsletters = filteredNewsletters.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  // Compartir
  function handleCopyLink() {
    navigator.clipboard.writeText(window.location.origin + '/newsletter');
  }
  function handleShareWhatsApp() {
    window.open(`https://wa.me/?text=Lee%20la%20newsletter%20de%20Data%20Drivers%20Club%20UNAV:%20${encodeURIComponent(window.location.origin + '/newsletter')}`);
  }
  return (
    <div className="font-sans bg-white min-h-screen">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 text-center mb-10 drop-shadow-lg tracking-tight">Newsletter</h1>
        <p className="text-lg text-gray-700 text-center mb-8">Consulta aquí la newsletter de enero y el recap anual del club.</p>
        <div className="space-y-10">
          {filteredNewsletters.map((nl, idx) => (
            <button
              key={idx}
              className="w-full text-left bg-blue-50 rounded-2xl border-2 border-blue-100 shadow p-6 hover:bg-blue-100 transition-colors"
              onClick={() => setSelected(nl)}
              aria-label={`Abrir ${nl.titulo}`}
            >
              <h2 className="text-2xl font-bold text-blue-800 mb-1">{nl.titulo}</h2>
              <span className="text-sm text-gray-500 mb-2 block">{new Date(nl.fecha).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <p className="text-base text-gray-700 mb-2 line-clamp-2">{nl.resumen}</p>
              <span className="text-blue-700 font-medium underline">Leer completa</span>
            </button>
          ))}
        </div>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-blue-200 max-w-lg w-full p-8 relative animate-zoom-in">
              <button
                className="absolute top-3 right-3 text-blue-700 text-2xl font-bold hover:text-blue-900"
                onClick={() => setSelected(null)}
                aria-label="Cerrar newsletter"
              >
                ×
              </button>
              {/* Mostrar portada solo si NO es el recap de junio 2025 */}
              {selected.fecha !== '2025-06-01' && (selected.foto ? (
                <img src={selected.foto} alt="Imagen noticia principal" className="w-full h-40 object-cover rounded-xl mb-4 border border-blue-100" />
              ) : selected.portada && (
                <img src={require(`./images/${selected.portada}`)} alt="Portada newsletter" className="w-full h-40 object-cover rounded-xl mb-4 border border-blue-100" />
              ))}
              <h2 className="text-3xl font-bold text-blue-800 mb-1">{selected.titulo}</h2>
              <span className="text-sm text-gray-500 mb-4 block">{new Date(selected.fecha).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <p className="text-base text-gray-700 mb-4">{selected.resumen}</p>
              <ul className="list-disc list-inside space-y-3 mb-6">
                {selected.noticias.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.enlace} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline font-medium">{item.texto}</a>
                  </li>
                ))}
              </ul>
              {selected.pdf && (
                <div className="my-6">
                  <iframe
                    src={require(`./images/${selected.pdf}`)}
                    title="Póster Recap Data Drivers"
                    className="w-full h-96 rounded-xl border"
                  />
                </div>
              )}
              <div className="flex items-center justify-between mt-6">
                {selected.autor && (
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <FaUserCircle className="w-5 h-5 text-blue-400" />
                    <span>Autor: {selected.autor}</span>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <button onClick={handleCopyLink} className="text-blue-700 hover:text-blue-900" title="Copiar enlace"><FaShareAlt className="w-5 h-5" /></button>
                  <button onClick={handleShareWhatsApp} className="text-blue-700 hover:text-blue-900" title="Compartir en WhatsApp"><FaWhatsapp className="w-5 h-5" /></button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

// --- Panel de administración sencillo (solo frontend, genera JSON) ---
const AdminNewsletter = () => {
  const [form, setForm] = useState({
    titulo: '', fecha: '', autor: '', genero: 'hombre', portada: '', resumen: '', noticias: [{ texto: '', enlace: '' }]
  });
  const [json, setJson] = useState('');
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleNoticiaChange(idx, field, value) {
    const noticias = [...form.noticias];
    noticias[idx][field] = value;
    setForm({ ...form, noticias });
  }
  function addNoticia() {
    setForm({ ...form, noticias: [...form.noticias, { texto: '', enlace: '' }] });
  }
  function removeNoticia(idx) {
    setForm({ ...form, noticias: form.noticias.filter((_, i) => i !== idx) });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setJson(JSON.stringify([form], null, 2));
  }
  return (
    <div className="font-sans bg-white min-h-screen">
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold text-blue-700 mb-8">Panel de Administración de Newsletter</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-blue-50 p-6 rounded-xl border border-blue-100">
          <input name="titulo" value={form.titulo} onChange={handleChange} placeholder="Título" className="w-full p-2 rounded border" required />
          <input name="fecha" value={form.fecha} onChange={handleChange} placeholder="Fecha (YYYY-MM-DD)" className="w-full p-2 rounded border" required />
          <input name="autor" value={form.autor} onChange={handleChange} placeholder="Autor" className="w-full p-2 rounded border" required />
          <select name="genero" value={form.genero} onChange={handleChange} className="w-full p-2 rounded border">
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
          </select>
          <input name="portada" value={form.portada} onChange={handleChange} placeholder="Nombre de la imagen de portada (opcional)" className="w-full p-2 rounded border" />
          <textarea name="resumen" value={form.resumen} onChange={handleChange} placeholder="Resumen" className="w-full p-2 rounded border" required />
          <div className="space-y-3">
            {form.noticias.map((n, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                <input value={n.texto} onChange={e => handleNoticiaChange(idx, 'texto', e.target.value)} placeholder="Titular de la noticia" className="flex-1 p-2 rounded border" required />
                <input value={n.enlace} onChange={e => handleNoticiaChange(idx, 'enlace', e.target.value)} placeholder="Enlace" className="flex-1 p-2 rounded border" required />
                <button type="button" onClick={() => removeNoticia(idx)} className="text-red-500 font-bold">×</button>
              </div>
            ))}
            <button type="button" onClick={addNoticia} className="text-blue-700 font-bold">+ Añadir noticia</button>
          </div>
          <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded font-semibold hover:bg-blue-800">Generar JSON</button>
        </form>
        {json && (
          <div className="mt-8">
            <h2 className="text-lg font-bold mb-2">Copia este JSON en newsletters.json:</h2>
            <pre className="bg-gray-100 p-4 rounded text-xs overflow-x-auto border border-gray-200">{json}</pre>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

// --- Main App ---
function App() {
  return (
    <Router>
      <Helmet>
        <title>Data Drivers Club UNAV</title>
        <meta name="description" content="Club universitario de datos, IA y tecnología en la Universidad de Navarra. Workshops, eventos, networking y más." />
        <meta property="og:title" content="Data Drivers Club UNAV" />
        <meta property="og:description" content="Club universitario de datos, IA y tecnología en la Universidad de Navarra. Workshops, eventos, networking y más." />
        <meta property="og:image" content="/logo192.png" />
        <meta property="og:type" content="website" />
      </Helmet>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <div className="font-sans bg-white min-h-screen">
            <Navbar />
            <main>
              <Hero />
              <Features />
              <MemberBenefits />
              <Colaboradores />
              <Events />
              <Testimonios />
              <Join />
              <VaqueroSection />
              <NewsletterTeaser onOpen={() => window.location.href='/newsletter'} />
              <Gallery />
              <Location />
            </main>
            <Footer />
            <DDChatbot />
          </div>
        } />
        <Route path="/merch" element={<MerchPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
        <Route path="/admin-newsletter" element={<AdminNewsletter />} />
      </Routes>
    </Router>
  );
}

export default App;
