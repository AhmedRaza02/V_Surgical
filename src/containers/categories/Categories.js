import React from 'react';
import './categories.css';
import Img1 from './surgical-1.png'
import Img2 from './beauty.png'
import Img3 from './tooth-icon.png'
import Img4 from './vert.png'
import Img5 from './lap.png'
import Img6 from './knee-icon2.png'

export default function Categories() {
  return (
    <>
      <div className='header'>
        <h1>Key Categories</h1>
        <p>We are located in the hub of Life saving Manufacturing City, Trying to make this World better with our efficient quality and cost efficient instruments. Here are some of our Key Categories we are proud of…</p>
      </div>
      <div className='categories'>
        <div className='category-1 row'>
            <div className='row col-md-6'>
                <div className='col-md-4'>
                <img src={Img1} alt='medical-1'/>
                </div>
                <div className='col-md-8'>
                <h5>Surgical</h5>
                <p>We have the privilege to be the manufacturing pioneers of all kinds of instruments since 1999</p>
                </div>
            </div>
            <div className='row col-md-6'>
                <div className='col-md-4'>
                <img src={Img4} alt='medical-1'/>
                </div>
                <div className='col-md-8'>
                <h5>Veterinary</h5>
                <p>The manufacturing of surgical veterinary instruments is a tradition of Sialkot and Verniva Surgicals is a part of that making us proud of manufacturing instruments of excellent quality.</p>
                </div>
            </div>
        </div>
        <div className='category-2 row'>
            <div className='row col-md-6'>
                <div className='col-md-4'>
                <img src={Img2} alt='medical-1'/>
                </div>
                <div className='col-md-8'>
                <h5>Beauty</h5>
                <p>We are active in the field of Instrumentation with much success and prosperity. All of our top priorities end at customer’s satisfaction</p>
                </div>
            </div>
            <div className='row col-md-6'>
                <div className='col-md-4'>
                <img src={Img5} alt='medical-1'/>
                </div>
                <div className='col-md-8'>
                <h5>Laparoscopic</h5>
                <p>Our laparoscopic equipment section contains all instrumentation for today’s minimally invasive surgery procedures.</p>
                </div>
            </div>
        </div>
        <div className='category-3 row'>
            <div className='row col-md-6'>
                <div className='col-md-4'>
                <img src={Img3} alt='medical-1'/>
                </div>
                <div className='col-md-8'>
                <h5>Dental</h5>
                <p>We are manufacturing Dental Products and exporting them to the healthcare industry all over the world for more than two decades.</p>
                </div>
            </div>
            <div className='row col-md-6'>
                <div className='col-md-4'>
                <img src={Img6} alt='medical-1'/>
                </div>
                <div className='col-md-8'>
                <h5>Arthroscopy</h5>
                <p>Verniva manufactures high quality arthroscopy implants and instruments that are supplied to a large number of hospitals and nursing homes.</p>
                </div>
            </div>
        </div>

      </div>
    </>

  )
}
