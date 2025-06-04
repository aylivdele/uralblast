import React from 'react';

const VideoBackgroundSection = () => {
  return (
    <section className="video-section">
      <div className="video-container">
        <img 
          src="/content/videos.gif"
          className="background-video"
          alt='backgound gif'
        />
        <div className="video-overlay" />
        
        <div className="video-content">
          <h1 className="video-title">Наш производственный процесс</h1>
          <p className="video-text">Посмотрите как мы создаем лучшее оборудование</p>
          {/* <button className="video-button">Подробнее о производстве</button> */}
        </div>
      </div>
    </section>
  );
};
export default VideoBackgroundSection;