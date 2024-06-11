import '../css/style.css';
import '../css/responsive.css';
import React, { useState, useEffect } from 'react';
import '../App.css';
import slideshowFirstImage from '../img/1.webp';
import slideshowSecondImage from '../img/2.webp';
import slideshowThirdImage from '../img/3.webp';
import slideshowFourthImage from '../img/4.webp';
import slideshowFifthImage from '../img/5.webp';

function Slideshow() {
  const [selectedRadio, setSelectedRadio] = useState("radio1");

  const changeSelection = (radioId) => {
    setSelectedRadio(radioId);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      changeSelection((prev) => {
        let nextNum = parseInt(prev.replace("radio", "")) + 1;
        if (nextNum > 5) nextNum = 1;
        return "radio" + nextNum;
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slideshow">
      <div className="photo-slider">
        <div className="photo-slides">
          {[...Array(5)].map((_, index) => {
            const radioId = `radio${index + 1}`;
            return (
              <input
                key={radioId}
                type="radio"
                name="radio-btn"
                id={radioId}
                checked={selectedRadio === radioId}
                onChange={() => changeSelection(radioId)}
                readOnly
              />
            );
          })}

          {[
            slideshowFirstImage,
            slideshowSecondImage,
            slideshowThirdImage,
            slideshowFourthImage,
            slideshowFifthImage,
          ].map((image, index) => (
            <div key={index} className={`slide ${index === 0 ? "first" : ""}`}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}

          <div className="navigation-auto">
            {[...Array(5)].map((_, index) => (
              <div key={index} className={`auto-btn${index + 1}`}></div>
            ))}
          </div>
        </div>

        <div className="navigation-manual">
          {[...Array(5)].map((_, index) => {
            const radioId = `radio${index + 1}`;
            return (
              <label
                key={index}
                htmlFor={radioId}
                className="manual-btn"
                onClick={() => changeSelection(radioId)}
              ></label>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
