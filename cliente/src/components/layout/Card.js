import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

const HomeCard = () => {

    const info = [
        {
            imagen: require('../../img/card1.jpg'), 
            titulo:"Card 1",
            descripcion:"Aquí una descripción"
        },
        {
            imagen:require('../../img/card2.jpg'), 
            titulo:"Card 2",
            descripcion:"Aquí una descripción"
        },
        {
            imagen:require('../../img/card3.jpg'), 
            titulo:"Card 3",
            descripcion:"Aquí una descripción"
        },
        {
            imagen: require('../../img/card4.jpg'), 
            titulo:"Card 4",
            descripcion:"Aquí una descripción"
        },
        {
            imagen:require('../../img/card5.jpg'), 
            titulo:"Card 5",
            descripcion:"Aquí una descripción"
        },
        {
        imagen:require('../../img/card6.jpg'), 
        titulo:"Card 6",
        descripcion:"Aquí una descripción"
        }
      ]; 

    return ( 
        <div className='container-fluid'>
            <CardColumns>
                {info.map((card, index) => {
                    return(
                        <Card 
                            border="dark"
                            style={{ width: '30rem' }}
                            key={index}
                            className='box'
                        >
                            <Card.Img variant="top" src={card.imagen} className='imgCard'/>
                                <Card.Body>
                                    <Card.Title>{card.titulo}</Card.Title>
                                        <Card.Text>
                                            {card.descripcion}
                                        </Card.Text>
                                </Card.Body>
                        </Card>
                    )
                })}
            </CardColumns>
        </div>
    );
}
 
export default HomeCard;