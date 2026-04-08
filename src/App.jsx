import React from 'react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import QRShare from './components/QRShare';
import Footer from './components/Footer';

function App() {

  return (
    <>
        {/* Contenido principal se renderiza aquí */}

      <Navbar />
      
      <main>
        <div className="bg-fondo">
          <Hero />
        </div>
        <About />
        <Projects />
        <Certificates />
        <Testimonials />
        <Contact />
        <QRShare />
      </main>

      <Footer />
    </>
  );
}

export default App;
