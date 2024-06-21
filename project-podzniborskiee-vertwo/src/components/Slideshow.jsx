import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import slideshowFirstImage from '../img/1.webp';
import slideshowSecondImage from '../img/2.webp';
import slideshowThirdImage from '../img/3.webp';
import slideshowFourthImage from '../img/4.webp';
import slideshowFifthImage from '../img/5.webp';

function Slideshow() {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const slides = [
    slideshowFirstImage,
    slideshowSecondImage,
    slideshowThirdImage,
    slideshowFourthImage,
    slideshowFifthImage,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedSlide(prevSlide => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [slides.length]); 

  return (
    <div className="slideshow">
      <Helmet>
        <style>{`
          .slideshow {
            position: relative;
            height: 700px;
            overflow: hidden;
            z-index: -1;
          }
          .slide-container {
            display: flex;
            transition: transform 1s ease; 
            transform: translateX(-${selectedSlide * 100}%); 
            height: 100%;
          }
          .slide {
            flex: 0 0 100%; 
            height: 100%;
            overflow: hidden;
          }
          .slide img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}</style>
      </Helmet>

      <div className="slide-container">
        {slides.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
