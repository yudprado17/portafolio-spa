import React, { useContext, useRef, useState, useEffect } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { QRCodeCanvas } from 'qrcode.react';
import { FaDownload, FaWhatsapp } from 'react-icons/fa';

const QRShare = () => {
  const { t } = useContext(LanguageContext);
  const qrRef = useRef();
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    // Definimos la URL usando la localización actual montada
    setCurrentUrl(window.location.href);
  }, []);

  const downloadQR = () => {
    const canvas = qrRef.current?.querySelector('canvas');
    if (canvas) {
      const link = document.createElement('a');
      link.download = 'portafolio-yudnaris-qr.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  const shareQR = () => {
    const message = encodeURIComponent(`✨ Mira mi portafolio profesional: ${currentUrl}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <section id="qr-section" className="section-dark py-5">
      <section className="container text-center">
        <article className="purple-line mb-3"></article>
        <h2 className="section-title mb-3">{t('qr_titulo')}</h2>
        <p className="about-text mx-auto mb-4" style={{ maxWidth: "500px" }}>
          {t('qr_descripcion')}
        </p>

        <article className="d-flex justify-content-center flex-column align-items-center">
          <article id="qr-code" className="mb-4" ref={qrRef} style={{ background: "white", padding: "15px", borderRadius: "20px", display: "inline-block" }}>
            {currentUrl && (
              <QRCodeCanvas 
                value={currentUrl} 
                size={200} 
                level={"H"} 
                fgColor={"#9d4edd"} 
                bgColor={"#ffffff"} 
              />
            )}
          </article>

          <article className="d-flex gap-3">
            <button onClick={downloadQR} className="btn-descargar" style={{ background: "#6c757d" }}>
              <FaDownload className="me-2" />{t('qr_descargar')}
            </button>
            <button onClick={shareQR} className="btn-descargar" style={{ background: "#25D366" }}>
              <FaWhatsapp className="me-2" />{t('qr_compartir')}
            </button>
          </article>
          <p className="mt-3 text-muted small">{t('qr_nota')}</p>
        </article>
      </section>
    </section>
  );
};

export default QRShare;
