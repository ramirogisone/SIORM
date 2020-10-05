import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HomeCarousel = () => {

    const data = [
      {
       image: require('../../img/imagen11.jpg'), 
       caption:"Imagen 1",
       description:"Aquí una descripción"
      },
      {
        image:require('../../img/imagen22.jpg'), 
        caption:"Imagen 2",
       description:"Aquí una descripción"
       },
       {
        image:require('../../img/imagen33.jpg'), 
        caption:"Imagen 3",
       description:"Aquí una descripción"
       } 
    ];

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return ( 
        // <div className='container-fluid'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {data.map((slide, i) => {
                    return (
                        <Carousel.Item>        
                            <img
                                className="d-block w-100"
                                src={slide.image}
                                alt="slider image"
                                key={i}
                            />
                            <Carousel.Caption>
                                <h3>{slide.caption}</h3>
                                <p>{slide.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )   
                })}
            </Carousel>
        // </div>
     );
}
 
export default HomeCarousel;