import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { FaCloud, FaCode, FaGraduationCap } from 'react-icons/fa';
import fotoPerfil from '../assets/foto_perfil.jpeg';

const Hero = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section id="inicio" className="hero-section">
      <article className="container">
        <img src={fotoPerfil} alt="Yudnaris Prado" className="profile-img rounded-circle" />
        <h1 className="text-white fw-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem" }}>
          Yudnaris Prado
        </h1>
        <p className="mb-3 hero-p" style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: t('hero_tagline') }} />
        
        <article className="mb-4 d-flex flex-wrap justify-content-center gap-2">
          <span className="hero-badge"><FaCloud className="me-1" />AWS · Azure · GCP</span>
          <span className="hero-badge"><FaCode className="me-1" />Python · JS</span>
          <span className="hero-badge"><FaGraduationCap className="me-1" /><span>{t('hero_badge_edu')}</span></span>
        </article>
        
        <a href="#proyectos" className="btn-hero me-2 text-decoration-none">{t('hero_btn_proyectos')}</a>
        <a href="#contacto-seccion" className="btn-hero text-decoration-none">{t('hero_btn_contacto')}</a>
      </article>
    </section>
  );
};

export default Hero;
