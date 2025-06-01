import { useState, useEffect, useRef, useCallback } from "react";
import { useMediaQuery } from 'react-responsive'


const ImageCarousel = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const intervalRef = useRef(null);
  const delayedIntervalRef = useRef(null);
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  const startCarousel = useCallback((withDelay) => {
    if (!isPortrait) return;
    if (withDelay) {
      if (intervalRef.current != null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (delayedIntervalRef.current != null) {
        clearTimeout(delayedIntervalRef.current);
      }
      delayedIntervalRef.current = setTimeout(startCarousel, 3000);
    } else {
      delayedIntervalRef.current = null;
      intervalRef.current = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 5000);
    }
    
  }, [images, isPortrait]);

  useEffect(() => {
    if (!isPortrait) {
      setCurrentIndex(0);
      if (intervalRef.current != null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (delayedIntervalRef.current != null) {
        clearTimeout(delayedIntervalRef.current);
      }
      return;
    }
    startCarousel();
    return () => {
      if (intervalRef.current != null) {
        clearInterval(intervalRef.current);
      }
    }
  }, [images.length, isPortrait]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    startCarousel(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    startCarousel(true);
  };

  return (
    <>
      <div className="carousel-container">
        <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {(images ?? []).map((img, index) => (
            <div className="carousel-item" key={index}>
              <img src={img.url} alt={`carousel-${index}`} onClick={() => setFullscreenImage(img.url)} />
            </div>
          ))}
        </div>
        { isPortrait ? <>
        <button className="carousel-arrow left" onClick={handlePrev}>&lt;</button>
        <button className="carousel-arrow right" onClick={handleNext}>&gt;</button>
        </> : null}
      </div>
      
        {fullscreenImage && (
          <div className="fullscreen-overlay" onClick={() => setFullscreenImage(null)}>
            <img src={fullscreenImage} alt="fullscreen" />
          </div>
        )}
    </>
  )
};

export default ImageCarousel;