import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import fotoPerfil from '../assets/foto_perfil.jpeg'; // Vamos a mover las carpetas de imágenes
import { ThemeContext } from '../context/ThemeContext';
import { FaMoon, FaSun, FaGlobe } from 'react-icons/fa';

const Navbar = () => {
  const { toggleLanguage, language, t } = useContext(LanguageContext);
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <section className="navbar navbar-expand-lg fixed-top shadow-sm py-2">
      <section className="container">
        <a className="navbar-brand fw-bold text-decoration-none" href="#">
          <img src={fotoPerfil} alt="YP" className="nav-avatar" />
          YP.
        </a>
        <button className="navbar-toggler border-secondary" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <article className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-1">
            <li className="nav-item"><a className="nav-link text-decoration-none" href="#inicio">{t('nav_inicio')}</a></li>
            <li className="nav-item"><a className="nav-link text-decoration-none" href="#sobre-mi">{t('nav_sobre')}</a></li>
            <li className="nav-item"><a className="nav-link text-decoration-none" href="#proyectos">{t('nav_proyectos')}</a></li>
            <li className="nav-item"><a className="nav-link text-decoration-none" href="#certificados">{t('nav_cert')}</a></li>
            <li className="nav-item"><a className="nav-link text-decoration-none" href="#comentarios">{t('nav_comentarios')}</a></li>
            <li className="nav-item"><a className="nav-link text-decoration-none" href="#contacto-seccion">{t('nav_contacto')}</a></li>
            <li className="nav-item d-flex align-items-center gap-2 ms-lg-3 mt-3 mt-lg-0">
              <button onClick={toggleTheme} className="theme-btn text-decoration-none">
                {theme === 'light' ? <FaSun /> : <FaMoon />}
                <span className="ms-1">{theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}</span>
              </button>
              <button onClick={toggleLanguage} className="lang-btn text-decoration-none">
                <FaGlobe />
                <span className="ms-1">{language === 'es' ? 'English' : 'Español'}</span>
              </button>
            </li>
          </ul>
        </article>
      </section>
    </section>
  );
};

export default Navbar;
