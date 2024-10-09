import React from 'react';
import './FullScreenViewer.css';

const FullScreenViewer = ({ images, currentIndex, onClose, setCurrentIndex }) => {
    // navigate to the previous image
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    // navigate to the next image
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className="fullscreen-viewer">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <button className="nav-btn prev-btn" onClick={handlePrev}>
          &#10094;
        </button>
        <img src={images[currentIndex]} alt="Full Screen View" className="fullscreen-image" />
        <button className="nav-btn next-btn" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    );
  };
  
  export default FullScreenViewer;