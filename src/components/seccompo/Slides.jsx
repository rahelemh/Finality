import { useState, useEffect } from 'react';
import './ii.css';

import PropTypes from 'prop-types';

const ImageSlider = ({ images, autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      goToNext();
    }, interval);
    
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval]);

  const goToPrevious = () => {
    setCurrentIndex(prev => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prev => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={image.id || index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image.url})` }}
            aria-hidden={index !== currentIndex}
          >
            {image.caption && <div className="caption">{image.caption}</div>}
          </div>
        ))}
      </div>
      
      <button className="prev-btn" onClick={goToPrevious} aria-label="Previous slide">
        ❮
      </button>
      <button className="next-btn" onClick={goToNext} aria-label="Next slide">
        ❯
      </button>
      
      <div className="dots-container">
        {images.map((image, index) => (
          <button
            key={image.id || index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      url: PropTypes.string.isRequired,
      caption: PropTypes.string
    })
  ).isRequired,
  autoPlay: PropTypes.bool,
  interval: PropTypes.number
};

export default ImageSlider;