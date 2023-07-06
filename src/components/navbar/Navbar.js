import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../logo.jpeg';


export default function Navbar() {
const [toggleMenu, setToggleMenu] = useState(false);

  return (
  <>
     <div className="navbar">
    <div className='block1'>
    </div>
      <div className='center-block'>
        <div className="navbar-logo">
          <img src={logo} alt="Logo"  />
         
          <h1>Verniva Surgicals</h1>
          </div>
          {/* <div>
          <p>Instruments for professionals</p>
          </div> */}
        </div>
        <div className='block2'>
       
          <div className="navbar-container">
            <p><a href="#top">Home</a></p>
            <p><a href="#about">About Verniva</a></p>
          
            <div className="mobile-view">
              {toggleMenu ? 
              <RiCloseLine color="#fff" size={40} onClick={() => setToggleMenu(false)} />:
              <RiMenu3Line color="#fff" size={40} onClick={() => setToggleMenu(true)} />}
               {toggleMenu && (
                <div className='mob-view_link'>
                  <ul>
                    <li> <a href="#home">  Home
                    </a> </li>
                    <li> About</li>
                  </ul>              
               </div>
               )}
              </div>  
            </div>
        </div>
    </div>
  </>
  )
}
