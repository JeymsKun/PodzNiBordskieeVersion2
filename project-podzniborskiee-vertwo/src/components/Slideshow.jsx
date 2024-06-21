
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
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
    <div> 
      <Helmet>
        <style>{`
          .slideshow{
            padding: 6rem;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .photo-slider{
              width: 1000px;
              height: 600px;
              border-radius: 20px;
              overflow: hidden;
          }
          .photo-slides{
              width: 500%;
              height: 600px;
              display: flex;
          }
          .photo-slides input{
              display: none;
          }
          .slide{
              width: 20%;
              transition: 2s;
          }
          .slide img{
              width: 1000px;
              height: 600px;
          }
          .navigation-manual{
              position: absolute;
              width: 1000px;
              margin-top: -40px;
              display: flex;
              justify-content: center;
          }
          .manual-btn{
              border: 2px solid #258d2a;
              background: #258d2a;
              padding: 10px;
              border-radius: 10px;
              cursor: pointer;
              transition: 1s;
          }
          .manual-btn:not(:last-child){
              margin-right: 40px;
          }
          .manual-btn:hover{
              background: #89fc0e;
          }
          #radio1:checked ~ .first{
              margin-left: 0;
          }
          #radio2:checked ~ .first{
              margin-left: -20%;
          }
          #radio3:checked ~ .first{
              margin-left: -40%;
          }
          #radio4:checked ~ .first{
              margin-left: -60%;
          }
          #radio5:checked ~ .first{
              margin-left: -80%;
          }
          .navigation-auto{
              position: absolute;
              display: flex;
              width: 1000px;
              justify-content: center;
              margin-top: 560px;
          }
          .navigation-auto div{
              border: 2px solid #258d2a;
              background: #258d2a;
              padding: 10px;
              border-radius: 10px;
              transition: 1s;
          }
          .navigation-auto div:not(:last-child){
              margin-right: 40px;
          }
          #radio1:checked ~ .navigation-auto .auto-btn1{
              background: #0e750e;
          }
          #radio2:checked ~ .navigation-auto .auto-btn2{
              background: #0e750e;
          }
          #radio3:checked ~ .navigation-auto .auto-btn3{
              background: #0e750e;
          }
          #radio4:checked ~ .navigation-auto .auto-btn4{
              background: #0e750e;
          }
          #radio5:checked ~ .navigation-auto .auto-btn4{
              background: #0e750e;
          }
        `}</style>
      </Helmet>
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
    </div> 
  );
}

export default Slideshow;
