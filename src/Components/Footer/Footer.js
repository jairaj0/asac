import React from 'react';
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';
import item1 from '../../Assets/home-banner-item1.png';
import item2 from '../../Assets/home-banner-item3.png';
import logo from '../../Assets/LOGO-2.png'
import './Footer.scss';
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Footer = () => {
  return (
    <div className='footer flex-between'>
    <img src={item1} alt={item1} />
    <div className="text_field flex-center column">
    <img className='logo' src={logo} alt={logo} />
    <h1 className="title">CONTACT US</h1>
    <h1 className="mail">team@antisocialanimeclub.com</h1>
    <div className="social_links flex">
        <a
        data-aos="flip-up"
      data-aos-offset="10"
      data-aos-delay="10"
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
         className='flex-center' href="https://www.instagram.com/asacnft/"><FaInstagram /></a>
        <a
        data-aos="flip-right"
      data-aos-offset="10"
      data-aos-delay="10"
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
         className='flex-center' href="https://dsc.gg/asac/"><FaDiscord /></a>
        <a
        data-aos="flip-up"
      data-aos-offset="10"
      data-aos-delay="10"
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
         className='flex-center' href="https://twitter.com/nftasac/"><FaTwitter /></a>
    </div>
    </div>
    <img src={item2} alt={item2} />
    </div>
  )
}

export default Footer