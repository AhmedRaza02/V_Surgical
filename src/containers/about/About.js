import React from 'react';
import Img1 from './C2.jpg';
import './about.css';

export default function About() {
  return (
  <>
  <div id='about' className='col-md-12'>
    <div  className='row'>
    <div   className='col-md-6'>
      <img src={Img1}
          alt="First slide"/>
      
    </div>
    <div  className='col-md-6'>
      <h1>About Verniva Surgicals</h1>
      <p>Verniva Surgicals is a manufacturing and export company for all kind of Surgical, Dental, Beauty, Veterinary, Arthroscopic and Laparoscopic instruments. We are exporting life saving instruments for almost 20 years and its been really great experience for our customers.

        We diversify our business scope by developing new manufacturing lines to meet market needs. Capitalizing on our expertise and professionalism, we have positioned ourselves as innovative instrument manufacturers with superb manufacturing abilities and facilities.</p>

    </div>
    </div>
  </div>
  </>
  )
}
