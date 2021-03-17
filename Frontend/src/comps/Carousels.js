import React , { useState }from 'react'
import {Carousel} from  'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import  "./carousels.css";
import Over1 from '../assets/img/Over1.jpg'
import Over2 from '../assets/img/Over2.jpg'
import Over3 from '../assets/img/Over3.jpg'

    const Carousels = () => {

            const [index, setIndex] = useState(0);

            const handleSelect = (selectedIndex, e) => {
                setIndex(selectedIndex);
            };

            return (
                <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Over3}
                    alt="First slide"
                    />
                     <Carousel.Caption>
                    <h3 className="tp-caption">BIENVENUE</h3>
                    <div className="tp-title" >
                        <h3 className="title-content">Lycée Technique Ibn Alhaytam</h3>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Over2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Over3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            );
            }

export default Carousels;
