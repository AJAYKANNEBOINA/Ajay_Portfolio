import React, { useState } from 'react';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile_img from '../assets/about_profile.jpg';
import underline from '../assets/nav_underline.svg';

const Hero = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Alex Bennet,</span> frontend developer based in USA.</h1>
      <p>I am a frontend developer from California,USA with 10 years of Experience in multiple companies like Microsoft,tesla and Apple.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink 
            className='anchor-link' 
            offset={50} 
            href='#contact' 
           
          >
            Connect With Me
             
          </AnchorLink>
        </div> 
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
