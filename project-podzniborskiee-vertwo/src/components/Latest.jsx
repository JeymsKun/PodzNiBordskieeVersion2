import React from 'react';
import '../css/style.css';
import '../css/responsive.css';
import '../App.css';
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

    <div className="display-top-dishes">
        <div className="dish-one">
        <div className="Chicken">
            <div className="img-chicken">
            <img src={dishOneImage} alt="Chicken Adobo" />
            </div>

            <div className="overlay-chicken">
            <div className="text-chicken">Adobong Manok</div>
            </div>
        </div>
        </div>

        <div className="dish-two">
        <div className="Pork">
            <div className="img-pork">
            <img src={dishTwoImage} alt="Pork Adobo" />
            </div>

            <div className="overlay-pork">
            <div className="text-pork">Adobong Baboy</div>
            </div>
        </div>
        </div>

        <div className="dish-three">
        <div className="Beef">
            <div className="img-beef">
            <img src={dishThreeImage} alt="Beef Adobo" />
            </div>

            <div className="overlay-beef">
            <div className="text-beef">Adobong Baka</div>
            </div>
        </div>
        </div>

        <div className="dish-four">
        <div className="Goat">
            <div className="img-goat">
            <img src={dishFourImage} alt="Goat Adobo" />
            </div>

            <div className="overlay-goat">
            <div className="text-goat">Adobong Kambing</div>
            </div>
        </div>
        </div>

        <div className="dish-five">
        <div className="Frog">
            <div className="img-frog">
            <img src={dishFiveImage} alt="Frog Adobo" />
            </div>

            <div className="overlay-frog">
            <div className="text-frog">Adobong Palaka</div>
            </div>
        </div>
        </div>

        <div className="dish-six">
        <div className="Egg">
            <div className="img-egg">
            <img src={dishSixImage} alt="Egg Adobo" />
            </div>

            <div className="overlay-egg">
            <div className="text-egg">Adobong Itlog</div>
            </div>
        </div>
        </div>

        <div className="dish-seven">
        <div className="Fish">
            <div className="img-fish">
            <img src={dishSevenImage} alt="Fish Adobo" />
            </div>

            <div className="overlay-fish">
            <div className="text-fish">Adobong Isda</div>
            </div>
        </div>
        </div>

        <div className="dish-eight">
        <div className="Squid">
            <div className="img-squid">
            <img src={dishEightImage} alt="Squid Adobo" />
            </div>

            <div className="overlay-squid">
            <div className="text-squid">Adobong Pusit</div>
            </div>
        </div>
        </div>
    </div>

  );
}

export default Latest;
