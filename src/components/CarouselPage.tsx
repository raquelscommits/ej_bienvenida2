import React, { useState } from 'react';

const CarouselPage: React.FC = () => {
  const images = ['https://i.imgur.com/eDCfhRt.jpg', 'https://i.imgur.com/a4H6EJ2.jpg', 'https://i.imgur.com/rkjE30m.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <button onClick={goToPrevious}>Anterior</button>
      <img src={images[currentIndex]} alt={`Serie ${currentIndex + 1}`} />
      <button onClick={goToNext}>Siguiente</button>
    </div>
  );
};

export default CarouselPage;