import React from 'react';

const VideoBackgroundSection = () => {
  return (
    <section className="video-section">
      <div className="video-container">
        <video 
          autoPlay 
          muted 
          loop 
          className="background-video"
        >
          <source src="/content/videos.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео тег.
        </video>
        <div className="video-overlay" />
        
        <div className="video-content">
          <h2 className="video-title">Наш производственный процесс</h2>
          <p className="video-text">Посмотрите как мы создаем лучшее оборудование</p>
          <button className="video-button">Подробнее о производстве</button>
        </div>
      </div>
    </section>
  );
};
export default VideoBackgroundSection;