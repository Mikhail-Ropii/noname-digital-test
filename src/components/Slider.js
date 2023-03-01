import Slider from 'react-slick';

export const ProductSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="./src/images/sliderImg/1.jpg" alt="game1" />
      </div>
      <div>
        <img src="../../assets/images/sliderImg/1.jpg" alt="game1" />
      </div>
      <div>
        <img src="../../assets/images/sliderImg/1.jpg" alt="game1" />
      </div>
      <div>
        <img src="../../assets/images/sliderImg/1.jpg" alt="game1" />
      </div>
      <div>
        <img src="../../assets/images/sliderImg/1.jpg" alt="game1" />
      </div>
      <div>
        <img src="../../assets/images/sliderImg/1.jpg" alt="game1" />
      </div>
    </Slider>
  );
};
