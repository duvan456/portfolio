import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css';

interface CarouselProps {
  items: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const settings: Settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    dots: true, // Habilita los puntos indicadores
    dotsClass: 'slick-dots', // Clase personalizada para los puntos indicadores
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index} className="p-4">
          {/* Contenido del item */}
          {item}
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;