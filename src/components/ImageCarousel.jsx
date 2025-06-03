import { useState, useEffect, useRef, useCallback } from "react";
import { useMediaQuery } from 'react-responsive'


const ImageCarousel = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const intervalRef = useRef(null);
  const delayedIntervalRef = useRef(null);
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const [countOfPages, setCountOfPages] = useState(isPortrait ? (images.length ?? 1) : Math.ceil((images.length ?? 1) / 3));

  const startCarousel = useCallback((withDelay) => {
    if (countOfPages <= 1) return;
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
          setCurrentIndex((prev) => (prev + 1) % countOfPages);
      }, 5000);
    }
    
  }, [images, countOfPages]);

  useEffect(() => {
    const pages = isPortrait ? (images.length ?? 1) : Math.ceil((images.length ?? 1) / 3);
    setCountOfPages(pages);
    if (pages <= 1) {
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
    setCurrentIndex((prev) => (prev === 0 ? countOfPages - 1 : prev - 1));
    startCarousel(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % countOfPages);
    startCarousel(true);
  };

  if (!images) {
    return null;
  }

  const imagesPerPage = Math.ceil(images.length / countOfPages);

  const renderItem = (url, index) => (
    <div className={`carousel-item ${isPortrait ? 'portrait' : ''}`} key={index}>
      <img src={url} alt={`carousel-${index}`} onClick={() => setFullscreenImage(url)} />
    </div>
  );

  return (
    <>
      <div className="carousel-container appear">
        <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {
            (images ?? []).reduce((acc, image, index) => {
              if (index % imagesPerPage === 0) {
                acc.push([]);
              }
              acc[Math.floor(index / imagesPerPage)].push(renderItem(image.url, index))
              return acc;
            }, []).map((items, index) => (
              <div className="page" key={index}>
                {items}
              </div>
            ))
          }
          {(images ?? []).map((img, index) => (
            <div className={`carousel-item ${isPortrait ? 'portrait' : ''}`} key={index}>
              <img src={img.url} alt={`carousel-${index}`} onClick={() => setFullscreenImage(img.url)} />
            </div>
          ))}
        </div>
        { countOfPages > 1 ? <>
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