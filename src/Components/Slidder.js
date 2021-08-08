import {Carousel} from 'react-bootstrap'

function Slidder() {
    return(
        <>
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://image.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Banner Image for Advertisement</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://image.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Banner Image for Advertisement</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Banner Image for Advertisement</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    )
}


export default Slidder;