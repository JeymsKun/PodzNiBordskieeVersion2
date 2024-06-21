import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import dishOneImage from '../img/Chicken-Adobo.webp';
import dishTwoImage from '../img/Pork-Adobo.webp';
import dishThreeImage from '../img/Beef-Adobo.webp';
import dishFourImage from '../img/Goat-Adobo.webp';
import dishFiveImage from '../img/Frog-Adobo.webp';
import dishSixImage from '../img/Egg-Adobo.webp';
import dishSevenImage from '../img/Fish-Adobo.webp';
import dishEightImage from '../img/Squid-Adobo.webp';

function Latest() {
  return (
    <div>
        <Helmet>
            <style>{`
                .display-top-dishes{display:flex;justify-content:center}
                .overlay-chicken,.overlay-pork,.overlay-beef,.overlay-goat,.overlay-frog,.overlay-egg,.overlay-fish,.overlay-squid{position:absolute;bottom:0;overflow:hidden;width:100%;height:0;background-color:rgba(0,0,0,0.5);transition:.5s ease}
                .dish-one,.dish-two,.dish-three,.dish-four,.dish-five,.dish-six,.dish-seven,.dish-eight{position:relative;justify-content:center;align-items:center;display:flex}
                .Chicken img,.Pork img,.Beef img,.Goat img,.Frog img,.Egg img,.Fish img,.Squid img{position:relative;border-radius:25px;width:350px;height:350px;transition:transform .3s ease-in-out}
                .text-chicken,.text-pork,.text-beef,.text-goat,.text-frog,.text-egg,.text-fish,.text-squid{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;font-size:1.1rem;font-weight:700;font-family:'Poppins',sans-serif;color:#fff;text-decoration: none}
                .Chicken:hover img,.Pork:hover img,.Beef:hover img,.Goat:hover img,.Frog:hover img,.Egg:hover img,.Fish:hover img,.Squid:hover img{border:3px solid #01e21f;box-shadow:0 0 8px #258d2a;transform:scale(1.1)}
                .Chicken:hover .overlay-chicken,.Pork:hover .overlay-pork,.Beef:hover .overlay-beef,.Goat:hover .overlay-goat,.Frog:hover .overlay-frog,.Egg:hover .overlay-egg,.Fish:hover .overlay-fish,.Squid:hover .overlay-squid{height:30%;border-radius:25px}
                .Chicken{position:absolute;top:0;right:0;padding:0 auto;margin-top:25rem;margin-right:5rem}
                .Pork{position:absolute;top:0;left:0;padding:0 auto;margin-top:25rem;margin-left:5rem}
                .Beef{position:absolute;top:0;right:0;padding:0 auto;margin-top:55rem;margin-right:5rem}
                .Goat{position:absolute;top:0;left:0;padding:0 auto;margin-top:55rem;margin-left:5rem}
                .Frog{position:absolute;top:0;right:0;padding:0 auto;margin-top:85rem;margin-right:5rem}
                .Egg{position:absolute;top:0;left:0;padding:0 auto;margin-top:85rem;margin-left:5rem}
                .Fish{position:absolute;top:0;right:0;padding:0 auto;margin-top:115rem;margin-right:5rem}
                .Squid{position:absolute;top:0;left:0;padding:0 auto;margin-top:115rem;margin-left:5rem}             
           `}</style>
        </Helmet>

        <div className="display-top-dishes">
            <div className="dish-one">
            <div className="Chicken">
                <div className="img-chicken">
                <img src={dishOneImage} alt="Chicken Adobo" />
                </div>

                <div className="overlay-chicken">
                <Link to='/food-details/11' className='text-chicken'>Adobong Manok</Link>
                </div>
            </div>
            </div>

            <div className="dish-two">
            <div className="Pork">
                <div className="img-pork">
                <img src={dishTwoImage} alt="Pork Adobo" />
                </div>

                <div className="overlay-pork">
                <Link to='/food-details/12' className='text-pork'>Adobong Baboy</Link>
                </div>
            </div>
            </div>

            <div className="dish-three">
            <div className="Beef">
                <div className="img-beef">
                <img src={dishThreeImage} alt="Beef Adobo" />
                </div>

                <div className="overlay-beef">
                <Link to='/food-details/13' className='text-beef'>Adobong Baka</Link>
                </div>
            </div>
            </div>

            <div className="dish-four">
            <div className="Goat">
                <div className="img-goat">
                <img src={dishFourImage} alt="Goat Adobo" />
                </div>

                <div className="overlay-goat">
                <Link to='/food-details/18' className='text-goat'>Adobong Kambing</Link>
                </div>
            </div>
            </div>

            <div className="dish-five">
            <div className="Frog">
                <div className="img-frog">
                <img src={dishFiveImage} alt="Frog Adobo" />
                </div>

                <div className="overlay-frog">
                <Link to='/food-details/17' className='text-frog'>Adobong Palaka</Link>
                </div>
            </div>
            </div>

            <div className="dish-six">
            <div className="Egg">
                <div className="img-egg">
                <img src={dishSixImage} alt="Egg Adobo" />
                </div>

                <div className="overlay-egg">
                <Link to='/food-details/14' className='text-egg'>Adobong Itlog</Link>
                </div>
            </div>
            </div>

            <div className="dish-seven">
            <div className="Fish">
                <div className="img-fish">
                <img src={dishSevenImage} alt="Fish Adobo" />
                </div>

                <div className="overlay-fish">
                <Link to='/food-details/16' className='text-fish'>Adobong Isda</Link>
                </div>
            </div>
            </div>

            <div className="dish-eight">
            <div className="Squid">
                <div className="img-squid">
                <img src={dishEightImage} alt="Squid Adobo" />
                </div>

                <div className="overlay-squid">
                <Link to='/food-details/15' className='text-squid'>Adobong Pusit</Link>
                </div>
            </div>
            </div>
        </div>
    </div>

  );
}

export default Latest;
