import { useState } from 'react';
import ImageCarousel from './ImageCarousel';

const NewsPage = () => {
  const [visibleReports, setVisibleReports] = useState(3);
  const [modalImage, setModalImage] = useState(null);
  const [reports] = useState([
    {
      id: 1,
      date: '11.06.2222',
      title: 'Запуск печи 500 кг 400 кВт, в г. Ярославле',
      description: 'Произвели запуск двух печей в г.Ярославль, 500 кг каждая по стали, пусконаладочные работы были произведены в срок',
      images: [{id: 1, url: '/images/photo_2025-05-12_15-12-31 (2).jpg'}, {id: 2, url: '/images/photo_2025-05-12_15-12-29.jpg'}, {id: 3, url: '/images/photo_2025-05-12_15-12-31.jpg'}]
    },
    // Добавьте больше отчётов
  ]);

  return (
    <div className="container block-otchety">
      {/* Шапка */}
      <header className="header">
        <h2 className="title">Новости</h2>
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

export default NewsPage;