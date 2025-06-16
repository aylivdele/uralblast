import React from 'react';
import React, { useEffect, useRef } from 'react';

const VideoBackgroundSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    
    // Функция для запуска видео
    const tryPlayVideo = () => {
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // При блокировке автовоспроизведения - запуск по клику
          const overlay = document.querySelector('.video-overlay');
          if (overlay) {
            overlay.style.cursor = 'pointer';
            overlay.onclick = () => {
              video.play();
              overlay.style.cursor = 'default';
              overlay.onclick = null;
            };
          }
        });
      }
    };

    // Обработчик видимости страницы
    const handleVisibilityChange = () => {
      if (!document.hidden && video.paused) {
        tryPlayVideo();
      }
    };

    tryPlayVideo();
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <section className="video-section">
      <div className="video-container">
        <video 
          ref={videoRef}
          src="/content/video_fon.mp4"
          className="background-video" 
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
        />
        
        <div className="video-overlay" />
        
        <div className="video-content">
          <h1 className="video-title">Компания URALBLAST</h1>
          <p className="video-text">Сделает ваш металл чистым</p>
          <p className="video-text">Отечественная сборка</p>
        </div>

        {/* Анимированные стрелки */}
        <div className="scroll-indicator">
          <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12L12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default VideoBackgroundSection;

// const VideoBackgroundSection = () => {
//   return (
//     <section className="video-section">
//       <div className="video-container">
//         <img 
//           src="/content/videos_page.gif"
//           className="background-video"
//           alt='backgound gif'
//         />
//         <div className="video-overlay" />
        
//         <div className="video-content">
//           <h1 className="video-title">Компания URALBLAST</h1>
//           <p className="video-text">Делает ваш металл чистым</p>
//           {/* <button className="video-button">Подробнее о производстве</button> */}
//         </div>
//       </div>
//     </section>
//   );
// };
// export default VideoBackgroundSection;