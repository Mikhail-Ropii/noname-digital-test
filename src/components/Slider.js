import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import foto1 from '../images/sliderImg/1.jpg';
import foto2 from '../images/sliderImg/2.jpg';
import foto3 from '../images/sliderImg/3.jpg';
import foto4 from '../images/sliderImg/4.jpg';
import foto5 from '../images/sliderImg/5.jpg';
import foto6 from '../images/sliderImg/6.jpg';
import { SliderImgItem } from 'pages/home/home.styled';

export const ProductSlider = () => {
  return (
    <Slide>
      <SliderImgItem>
        <div>
          <img src={foto1} alt="game1" />
        </div>
      </SliderImgItem>
      <SliderImgItem>
        <div>
          <img src={foto2} alt="game2" />
        </div>
      </SliderImgItem>
      <SliderImgItem>
        <div>
          <img src={foto3} alt="game3" />
        </div>
      </SliderImgItem>
      <SliderImgItem>
        <div>
          <img src={foto4} alt="game4" />
        </div>
      </SliderImgItem>
      <SliderImgItem>
        <div>
          <img src={foto5} alt="game5" />
        </div>
      </SliderImgItem>
      <SliderImgItem>
        <div>
          <img src={foto6} alt="game6" />
        </div>
      </SliderImgItem>
    </Slide>
  );
};
