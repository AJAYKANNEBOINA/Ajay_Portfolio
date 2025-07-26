import React, { useState,useRef } from 'react';
import './Navbar.css';
import logo from '../assets/logo.svg';
import underline from '../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../assets/menu_open.svg'
import menu_close from '../assets/menu_close.svg'
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef=useRef();
  
  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
      <img src={logo} alt="Website Logo" />
      <img src={menu_open} onClick={openMenu}alt="" className='nav-mob-open'/>

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close'/>
        <li>
          <AnchorLink 
            className='anchor-link' 
            
            href='#home' 
            onClick={() => setMenu("home")}
          >
            <p>Home</p>
            {menu === "home" && <img src={underline} alt="underline" />}
          </AnchorLink>
        </li>

        <li>
          <AnchorLink 
            className='anchor-link' 
            offset={50} 
            href='#about' 
            onClick={() => setMenu("about")}
          >
            <p>About Me</p>
            {menu === "about" && <img src={underline} alt="underline" />}
          </AnchorLink>
        </li>

        <li>
          <AnchorLink 
            className='anchor-link' 
            offset={50} 
            href='#services' 
            onClick={() => setMenu("services")}
          >
            <p>Services</p>
            {menu === "services" && <img src={underline} alt="underline" />}
          </AnchorLink>
        </li>

        <li>
          <AnchorLink 
            className='anchor-link' 
            offset={50} 
            href='#work' 
            onClick={() => setMenu("work")}
          >
            <p>Portfolio</p>
            {menu === "work" && <img src={underline} alt="underline" />}
          </AnchorLink>
        </li>

        <li>
          <AnchorLink 
            className='anchor-link' 
            offset={50} 
            href='#contact' 
            onClick={() => setMenu("contact")}
          >
            <p>Contact</p>
            {menu === "contact" && <img src={underline} alt="underline" />}
          </AnchorLink>
        </li>
      </ul>

      <div className="nav-connect"><AnchorLink 
            className='anchor-link' 
            offset={50} 
           href='#contact' 
             
          >
            Connect With Me
          </AnchorLink> </div>
    </div>
  );
};

export default Navbar;
