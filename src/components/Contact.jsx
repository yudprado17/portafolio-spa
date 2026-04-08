import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { FaFileDownload } from 'react-icons/fa';

const Contact = () => {
  const { t } = useContext(LanguageContext);

  return (
    <>
      <section id="contacto-seccion" className="section-darker py-5">
        <section className="container text-center">
          <section className="row justify-content-center">
            <article className="col-lg-8 col-md-10">
              <article className="purple-line mb-1"></article>
              <h1 className="section-title text-center mb-1">{t('contacto_titulo')}</h1>
              <h3 className="trabajemos-juntos mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.6rem" }}>{t('contacto_sub')}</h3>
              <p className="about-text mx-auto mb-5" style={{ maxWidth: "650px" }}>{t('contacto_text')}</p>
              <article className="d-flex justify-content-center flex-wrap gap-3 mt-4">
                <a href="/CV YUDNARIS PRADO-ES.pdf" download="CV YUDNARIS PRADO-ES.pdf" className="btn-descargar text-decoration-none">
                  <FaFileDownload className="me-2" /><span>{t('btn_cv')}</span>
                </a>
              </article>
            </article>
          </section>
        </section>
      </section>
    </>
  );
};

export default Contact;
