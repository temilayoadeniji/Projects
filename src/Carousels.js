import React from 'react'
import {Carousel} from 'react-bootstrap'

const Carousels =()=>{
  return(
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/bored1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Ogboriefon</h3>
          <p>I make  money moves</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/bored2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Eveentuaryy</h3>
          <p>Haq Haq Haq.. You dont know what is going on .</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/bored2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>2014 forest hills drive</h3>
          <p>Last Last Owu go Blow.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}


export default Carousels
