import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { FaBriefcase, FaGraduationCap, FaLaptopCode, FaSyncAlt, FaBrain, FaUsers, FaPuzzlePiece, FaSearch, FaCheckDouble } from 'react-icons/fa';

const About = () => {
  const { t } = useContext(LanguageContext);

  return (
    <>
      <section id="sobre-mi" className="section-dark">
        <section className="container">
          <article className="text-center mb-4">
            <article className="purple-line"></article>
            <h2 className="section-title">{t('sobre_titulo')}</h2>
            <p className="section-subtitle">{t('sobre_subtitulo')}</p>
          </article>
          <section className="row justify-content-center mb-5">
            <article className="col-lg-8">
              <p className="about-text">{t('sobre_text1')}</p>
              <p className="about-text">{t('sobre_text2')}</p>
            </article>
          </section>
        </section>
      </section>

      <section id="formacion" className="section-darker">
        <section className="container">
          <article className="text-center mb-4">
            <article className="purple-line"></article>
            <h2 className="section-title">{t('formacion_titulo')}</h2>
            <p className="section-subtitle">{t('formacion_sub')}</p>
          </article>
          <section className="row justify-content-center mb-5">
            <section className="col-lg-8">
              <article className="timeline-item">
                <article className="timeline-icon"><FaBriefcase /></article>
                <section className="timeline-content">
                  <h6>{t('exp1_titulo')}</h6>
                  <p>{t('exp1_desc')}</p>
                  <span className="badge-status">{t('exp1_badge')}</span>
                </section>
              </article>
              <section className="timeline-item">
                <article className="timeline-icon"><FaGraduationCap /></article>
                <article className="timeline-content">
                  <h6>{t('edu1_titulo')}</h6>
                  <p>{t('edu1_desc')}</p>
                  <span className="badge-status">{t('edu1_badge')}</span>
                </article>
              </section>
              <section className="timeline-item">
                <article className="timeline-icon"><FaLaptopCode /></article>
                <section className="timeline-content">
                  <h6>{t('edu2_titulo')}</h6>
                  <p>{t('edu2_desc')}</p>
                  <span className="badge-status">{t('edu2_badge')}</span>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>

      <section id="habilidades-blandas" className="section-dark">
        <section className="container">
          <article className="text-center mb-4">
            <article className="purple-line"></article>
            <h2 className="section-title">{t('soft_titulo')}</h2>
            <p className="section-subtitle">{t('soft_sub')}</p>
          </article>
          <section className="row justify-content-center mb-5">
            <article className="col-lg-8 text-center d-flex flex-wrap justify-content-center">
              <span className="badge-soft"><FaSyncAlt className="me-1" /><span>{t('soft1')}</span></span>
              <span className="badge-soft"><FaBrain className="me-1" /><span>{t('soft2')}</span></span>
              <span className="badge-soft"><FaUsers className="me-1" /><span>{t('soft3')}</span></span>
              <span className="badge-soft"><FaPuzzlePiece className="me-1" /><span>{t('soft4')}</span></span>
              <span className="badge-soft"><FaSearch className="me-1" /><span>{t('soft5')}</span></span>
              <span className="badge-soft"><FaCheckDouble className="me-1" /><span>{t('soft6')}</span></span>
            </article>
          </section>
        </section>
      </section>

      <section id="habilidades-tecnicas" className="section-darker">
        <section className="container">
          <section className="text-center mb-4">
            <article className="purple-line"></article>
            <h2 className="section-title">{t('tech_titulo')}</h2>
            <p className="section-subtitle">{t('tech_sub')}</p>
          </section>
          <section className="row justify-content-center">
            <section className="col-lg-8">
              <article className="skill-label"><span>{t('skill1_nombre')}</span><span>90%</span></article>
              <article className="progress">
                <article className="progress-bar" role="progressbar" style={{ width: "90%" }}></article>
              </article>
              <p className="skill-context">{t('skill1_ctx')}</p>
              
              <article className="skill-label"><span>{t('skill2_nombre')}</span><span>85%</span></article>
              <article className="progress">
                <article className="progress-bar" role="progressbar" style={{ width: "85%" }}></article>
              </article>
              <p className="skill-context">{t('skill2_ctx')}</p>
              
              <article className="skill-label"><span>{t('skill3_nombre')}</span><span>80%</span></article>
              <article className="progress">
                <article className="progress-bar" role="progressbar" style={{ width: "80%" }}></article>
              </article>
              <p className="skill-context">{t('skill3_ctx')}</p>
              
              <article className="skill-label"><span>{t('skill4_nombre')}</span><span>80%</span></article>
              <article className="progress">
                <article className="progress-bar" role="progressbar" style={{ width: "80%" }}></article>
              </article>
              <p className="skill-context">{t('skill4_ctx')}</p>
              
              <article className="skill-label"><span>{t('skill5_nombre')}</span><span>75%</span></article>
              <article className="progress">
                <article className="progress-bar" role="progressbar" style={{ width: "75%" }}></article>
              </article>
              <p className="skill-context">{t('skill5_ctx')}</p>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default About;
