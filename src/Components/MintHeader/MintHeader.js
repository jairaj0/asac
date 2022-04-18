import React from "react";
import "./MintHeader.scss";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const MintHeader = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="10"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      className="MintHeader flex-center"
    >
      <h1 className="title">ANTI SOCIAL ANIME CLUB GENESIS</h1>
      <p className="discr">
        7777 sad boys ( 悲しい ボーイ ) gathered in Tokyo to form the Anti
        Social Anime Club. Anti Social Anime Club is where the anime art meets
        the streetwear fashion.
      </p>
    </div>
  );
};

export default MintHeader;
