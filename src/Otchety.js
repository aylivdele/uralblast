import { useState, useEffect } from 'react';

const ReportsPage = () => {
  const [visibleReports, setVisibleReports] = useState(3);
  const [modalImage, setModalImage] = useState(null);
  const [reports] = useState([
    {
      id: 1,
      date: '11.06.2222',
      title: 'Запуск печи 500 кг 400 кВт, в г. Ярославле',
      description: 'Произвели запуск двух печей в г.Ярославль, 500 кг каждая по стали, пусконаладочные работы были произведены в срок',
      images: ['/images/photo_2025-05-12_15-12-31 (2).jpg', '/images/photo_2025-05-12_15-12-29.jpg', '/images/photo_2025-05-12_15-12-31.jpg']
    },
    // Добавьте больше отчётов
  ]);

  // Карусель изображений компонент
  const ImageCarousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
      <div className="carousel">
        <div className="carousel-inner">
          <img 
            src={images[currentImageIndex]} 
            alt="Карусель" 
            onClick={() => setModalImage(images[currentImageIndex])}
          />
          {images.length > 1 && (
            <>
              <button 
                className="carousel-button prev"
                onClick={() => setCurrentImageIndex(
                  (prev) => (prev > 0 ? prev - 1 : images.length - 1)
                )}
              >‹</button>
              <button 
                className="carousel-button next"
                onClick={() => setCurrentImageIndex(
                  (prev) => (prev < images.length - 1 ? prev + 1 : 0)
                )}
              >›</button>
              <div className="carousel-dots">
                {images.map((_, index) => (
                  <span 
                    key={index}
                    className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="container block-otchety">
      {/* Шапка */}
      <header className="header">
        <button className="back-button">
          <span className="arrow">‹</span> Назад
        </button>
        <h1 className="title">Отчёты</h1>
      </header>

      {/* Список отчётов */}
      <main className="reports-list">
        {reports.slice(0, visibleReports).map((report) => (
          <article key={report.id} className="report-item">
            <ImageCarousel images={report.images} />
            <div className="report-content">
              <time className="report-date">{report.date}</time>
              <h2 className='othet_header'>{report.title}</h2>
              <p className='description_header'>{report.description}</p>
            </div>
          </article>
        ))}
      </main>

      {visibleReports < reports.length && (
        <button 
          className="load-more"
          onClick={() => setVisibleReports(prev => prev + 3)}
        >
          Показать ещё
        </button>
      )}

      {/* Модальное окно */}
      {modalImage && (
        <div className="modal" onClick={() => setModalImage(null)}>
          <img src={modalImage} alt="Полноразмерное изображение" />
        </div>
      )}
    </div>
  );
};

export default ReportsPage;