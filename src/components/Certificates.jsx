import React, { useContext, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { FaTimes } from 'react-icons/fa';

// Importar imágenes reales
import cert1Img from '../assets/Certificados/Cátedra Ser Emprendedor.jpeg';
import cert2Img from '../assets/Certificados/Computación Básica.png';
import cert3Img from '../assets/Certificados/Basic English Course A1.png';
import cert4Img from '../assets/Certificados/Inglés Básico A1 Presente Simple.png';
import cert5Img from '../assets/Certificados/Inglés Básico A1 VerboTo Be.png';
import cert6Img from '../assets/Certificados/Ingles Básico A1 Verbos Comunes.png';
import cert7Img from '../assets/Certificados/MongoDB.png';
import cert8Img from '../assets/Certificados/Ef level 1.png';
import cert9Img from '../assets/Certificados/lenguage market.png';

const Certificates = () => {
  const { t } = useContext(LanguageContext);
  const [selectedCert, setSelectedCert] = useState(null);

  const certs = [
    { id: 1, name: 'cert1', img: cert1Img },
    { id: 2, name: 'cert2', img: cert2Img },
    { id: 3, name: 'cert3', img: cert3Img },
    { id: 4, name: 'cert4', img: cert4Img },
    { id: 5, name: 'cert5', img: cert5Img },
    { id: 6, name: 'cert6', img: cert6Img },
    { id: 7, name: 'cert7', img: cert7Img },
    { id: 8, name: 'cert8', img: cert8Img },
    { id: 9, name: 'cert9', img: cert9Img },
  ];

  const handleOpen = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden'; 
  };

  const handleClose = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="certificados" className="section-darker">
      <div className="container">
        <article className="text-center mb-4">
          <article className="purple-line"></article>
          <h2 className="section-title">{t('cert_titulo')}</h2>
          <p className="section-subtitle">{t('cert_sub')}</p>
        </article>

        <div id="certsCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#certsCarousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#certsCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#certsCarousel" data-bs-slide-to="2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row justify-content-center">
                {certs.slice(0, 3).map(cert => (
                  <div key={cert.id} className="col-10 col-md-4">
                    <div className="cert-card" onClick={() => handleOpen(cert)}>
                      <img src={cert.img} alt={t(cert.name)} className="cert-img" />
                      <div className="cert-info">
                        <p className="cert-name">{t(cert.name)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="carousel-item">
              <div className="row justify-content-center">
                {certs.slice(3, 6).map(cert => (
                  <div key={cert.id} className="col-10 col-md-4">
                    <div className="cert-card" onClick={() => handleOpen(cert)}>
                      <img src={cert.img} alt={t(cert.name)} className="cert-img" />
                      <div className="cert-info">
                        <p className="cert-name">{t(cert.name)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="carousel-item">
              <div className="row justify-content-center">
                {certs.slice(6, 9).map(cert => (
                  <div key={cert.id} className="col-10 col-md-4">
                    <div className="cert-card" onClick={() => handleOpen(cert)}>
                      <img src={cert.img} alt={t(cert.name)} className="cert-img" />
                      <div className="cert-info">
                        <p className="cert-name">{t(cert.name)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <button className="carousel-control-prev" type="button" data-bs-target="#certsCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#certsCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="cert-modal-overlay" onClick={handleClose}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={handleClose}>
              <FaTimes />
            </button>
            <img src={selectedCert.img} alt={t(selectedCert.name)} className="cert-modal-img" />
            <div className="text-center mt-2 text-white">
              <h5 className="modal-cert-title">{t(selectedCert.name)}</h5>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;


