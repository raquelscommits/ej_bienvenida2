import React, { useState } from 'react';
import '.././App.css';

const CarouselPage: React.FC = () => {
  const images = ['https://i.imgur.com/eDCfhRt.jpg', 'https://i.imgur.com/OO5T5SF.jpg', 'https://i.imgur.com/rkjE30m.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="gallery-container">
      <div className="gallery">
        <button className="nav-button" id="prevButton" onClick={goToPrevious}>←</button>
        <img src={images[currentIndex]} alt={`Serie ${currentIndex + 1}`} className="gallery-img" />
        <button className="nav-button" id="nextButton" onClick={goToNext}>→</button>
      </div>
    </div>
  );
};

export default CarouselPage;
