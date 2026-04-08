import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section id="comentarios" className="section-dark">
      <section className="container">
        <article className="text-center mb-4">
          <article className="purple-line"></article>
          <h2 className="section-title">{t('test_titulo')}</h2>
          <p className="section-subtitle">{t('test_sub')}</p>
        </article>
        <section className="row justify-content-center">
          <section className="col-lg-8">
            <section className="carousel-wrapper">
              <article id="testimoniosCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                <section className="carousel-indicators">
                  <button type="button" data-bs-target="#testimoniosCarousel" data-bs-slide-to="0" className="active"></button>
                  <button type="button" data-bs-target="#testimoniosCarousel" data-bs-slide-to="1"></button>
                  <button type="button" data-bs-target="#testimoniosCarousel" data-bs-slide-to="2"></button>
                  <button type="button" data-bs-target="#testimoniosCarousel" data-bs-slide-to="3"></button>
                  <button type="button" data-bs-target="#testimoniosCarousel" data-bs-slide-to="4"></button>
                  <button type="button" data-bs-target="#testimoniosCarousel" data-bs-slide-to="5"></button>
                </section>
                <section className="carousel-inner text-center pb-4">
                  <article className="carousel-item active">
                    <FaQuoteLeft className="mb-3" style={{ color: "var(--primary)", fontSize: "1.5rem" }} />
                    <p className="testimonial-text">{t('test1_txt')}</p>
                    <p className="testimonial-author">{t('test1_autor')}</p>
                    <p className="testimonial-role">{t('test1_rol')}</p>
                  </article>
                  <article className="carousel-item">
                    <FaQuoteLeft className="mb-3" style={{ color: "var(--primary)", fontSize: "1.5rem" }} />
                    <p className="testimonial-text">{t('test2_txt')}</p>
                    <p className="testimonial-author">{t('test2_autor')}</p>
                    <p className="testimonial-role">{t('test2_rol')}</p>
                  </article>
                  <article className="carousel-item">
                    <FaQuoteLeft className="mb-3" style={{ color: "var(--primary)", fontSize: "1.5rem" }} />
                    <p className="testimonial-text">{t('test3_txt')}</p>
                    <p className="testimonial-author">{t('test3_autor')}</p>
                    <p className="testimonial-role">{t('test3_rol')}</p>
                  </article>
                  <article className="carousel-item">
                    <FaQuoteLeft className="mb-3" style={{ color: "var(--primary)", fontSize: "1.5rem" }} />
                    <p className="testimonial-text">{t('test4_txt')}</p>
                    <p className="testimonial-author">{t('test4_autor')}</p>
                    <p className="testimonial-role">{t('test4_rol')}</p>
                  </article>
                  <article className="carousel-item">
                    <FaQuoteLeft className="mb-3" style={{ color: "var(--primary)", fontSize: "1.5rem" }} />
                    <p className="testimonial-text">{t('test5_txt')}</p>
                    <p className="testimonial-author">{t('test5_autor')}</p>
                    <p className="testimonial-role">{t('test5_rol')}</p>
                  </article>
                  <article className="carousel-item">
                    <FaQuoteLeft className="mb-3" style={{ color: "var(--primary)", fontSize: "1.5rem" }} />
                    <p className="testimonial-text">{t('test6_txt')}</p>
                    <p className="testimonial-author">{t('test6_autor')}</p>
                    <p className="testimonial-role">{t('test6_rol')}</p>
                  </article>
                </section>
                <button className="carousel-control-prev" type="button" data-bs-target="#testimoniosCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                  <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#testimoniosCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                  <span className="visually-hidden">Siguiente</span>
                </button>
              </article>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Testimonials;
