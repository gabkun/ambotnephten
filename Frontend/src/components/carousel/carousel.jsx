import React from 'react';
import Carousel from 'react-elastic-carousel';
import image3 from './image-school.jpg';
import image2 from './image2.png';
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './image6.png';
import './carousel.css';

function CarouselComponent() {
  const items = [
    { id: 1, image: image3 },
    { id: 2, image: image2 },
    { id: 3, image: image4 },
    { id: 4, image: image5 },
    { id: 5, image: image6 }
  ];

  return (
    <Carousel>
      {items.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={`Image ${item.id}`} />
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;