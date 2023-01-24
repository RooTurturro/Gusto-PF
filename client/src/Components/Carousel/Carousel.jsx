import Carousel from 'react-bootstrap/Carousel';
import carrusel1 from '../../assets/carrusel1.jpg'
import carrusel2 from '../../assets/carrusel2.jpg'
import carrusel3 from '../../assets/letrero3.jpg'
// import carrusel3 from '../../assets/carrusel3.jpg'

function Caroucel() {
    return (
        <Carousel style={{ height: '76vh', width: '44%', margin: 'auto ' }}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carrusel1}
                    alt="First slide"
                    style={{ height: '76vh' }}
                />
                <Carousel.Caption>
                    {/* <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carrusel2}
                    alt="Second slide"
                    style={{ height: '76vh' }}
                />
                <Carousel.Caption>
                    {/* <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carrusel3}
                    alt="Third slide"
                    style={{ height: '76vh', width: '40%' }}
                />
                <Carousel.Caption>
                    {/* <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Caroucel;