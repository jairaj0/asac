import React, { useState } from "react";
import { FaDiscord , FaTwitter } from 'react-icons/fa';
import "./Mintbox.scss";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Mintbox = () => {
  const [num, setNum] = useState(0);

  return (
    <section
     className="container">
      <div
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="10"
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
       className="mintbox flex-between">
        <div className="numbers flex-between">
          <div className="flex">
            <button
              onClick={() => {
                setNum(num > 0 ? num - 1 : num);
              }}
            >
              -
            </button>

            <h1>{num}</h1>
            <button
              onClick={() => {
                setNum(num < 30 ? num + 1 : num);
              }}
            >
              +
            </button>
          </div>
          <h2>Amount</h2>
        </div>

        <div className="price">
          <h1>0.15</h1>
          <h2>Price (ETH)</h2>
        </div>

        <button className="connect">Connect Wallet</button>
      </div>

      <ul className="info flex-between">
        <li>7777 Unique NFTs</li>
        <li>200+ Attributes</li>
        <li>25 Legendary Artworks</li>
      </ul>

      <div className="container btns flex-between">
        <button 
        data-aos="flip-left"
      data-aos-offset="200"
      data-aos-delay="10"
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
         className="sl flex-center"><span><FaDiscord /></span>Join Up on Discord</button>
        <button 
        data-aos="flip-right"
      data-aos-offset="200"
      data-aos-delay="10"
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
         className="sl flex-center"><span><FaTwitter /></span>Follow Us on Discord</button>
      </div>
    </section>
  );
};

export default Mintbox;
