import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-custom text-center">
      <section className="container">
        <article className="d-flex justify-content-center gap-3 mb-3">
          <a href="https://www.linkedin.com/in/yudprado/" target="_blank" rel="noreferrer" className="social-icon text-decoration-none">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yudprado17/" target="_blank" rel="noreferrer" className="social-icon text-decoration-none">
            <FaGithub />
          </a>
          <a href="mailto:hola@ejemplo.com" className="social-icon text-decoration-none">
            <FaEnvelope />
          </a>
          <a href="tel:+573105004860" className="social-icon text-decoration-none">
            <FaWhatsapp />
          </a>
        </article>
        <p className="mb-0" style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem" }}>
          &copy; {new Date().getFullYear()} Yudnaris Prado. Todos los derechos reservados.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
