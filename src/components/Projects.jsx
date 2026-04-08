import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { FaGithub } from 'react-icons/fa';
import proy1 from '../assets/proyecto1.jpeg';
import proy2 from '../assets/proyecto2.jpeg';
import proy3 from '../assets/proyecto3.jpeg';

const Projects = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section id="proyectos" className="section-dark">
      <section className="container">
        <article className="text-center mb-4">
          <article className="purple-line"></article>
          <h2 className="section-title">{t('proy_titulo')}</h2>
          <p className="section-subtitle">{t('proy_sub')}</p>
        </article>
        <section className="row g-4">
          <section className="col-12 col-md-6 col-lg-4">
            <section className="project-card">
              <img src={proy1} className="card-img-top" alt="Gestión de Parqueadero" />
              <article className="card-body">
                <h5 className="card-title">{t('proy1_tit')}</h5>
                <p className="card-text">{t('proy1_desc')}</p>
              </article>
              <article className="px-3 pb-3">
                <a href="https://github.com/yudprado17/ParqueaderoCarro.py" target="_blank" rel="noreferrer" className="btn-github text-decoration-none">
                  <FaGithub className="me-1" /><span>{t('github_btn')}</span>
                </a>
              </article>
            </section>
          </section>
          <section className="col-12 col-md-6 col-lg-4">
            <section className="project-card">
              <img src={proy2} className="card-img-top" alt="Mundial de Fútbol" />
              <article className="card-body">
                <h5 className="card-title">{t('proy2_tit')}</h5>
                <p className="card-text">{t('proy2_desc')}</p>
              </article>
              <article className="px-3 pb-3">
                <a href="https://github.com/yudprado17/Mundial.py" target="_blank" rel="noreferrer" className="btn-github text-decoration-none">
                  <FaGithub className="me-1" /><span>{t('github_btn')}</span>
                </a>
              </article>
            </section>
          </section>
          <section className="col-12 col-md-6 col-lg-4">
            <section className="project-card">
              <img src={proy3} className="card-img-top" alt="Bingo" />
              <article className="card-body">
                <h5 className="card-title">{t('proy3_tit')}</h5>
                <p className="card-text">{t('proy3_desc')}</p>
              </article>
              <article className="px-3 pb-3">
                <a href="https://github.com/yudprado17/Bingo_Python_yud" target="_blank" rel="noreferrer" className="btn-github text-decoration-none">
                  <FaGithub className="me-1" /><span>{t('github_btn')}</span>
                </a>
              </article>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Projects;
