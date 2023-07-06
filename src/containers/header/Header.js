import React from 'react';
import './header.css';
import Carousel from 'react-bootstrap/Carousel'
import Img1 from "./C1.jpg";
import Img2 from "./C2.jpg";
import Img3 from "./C3.jpg";


export default function Header() {

  return (
  <>
  

  <div className='carousal'>
    <Carousel fade >
      <Carousel.Item style={{height:'70vh'}}>
        <img
          className="d-block w-100"
          src={Img1}
          alt="First slide"
          style={{height:'70vh'}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'70vh'}}>
        <img
          className="d-block w-100"
          src={Img2}
          style={{height:'70vh'}}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'70vh'}}>
        <img
          className="d-block w-100"
          src={Img3}
          alt="Third slide"
          style={{height:'70vh'}}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    
     
   

   </div> 
 
  </>
  )
}
