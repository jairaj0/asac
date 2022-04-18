import React from "react";
import "./Team.scss";
import { FaInstagram } from "react-icons/fa";
import team1 from "../../Assets/team(1).png";
import team2 from "../../Assets/team(2).png";
import team3 from "../../Assets/team(3).png";
import team4 from "../../Assets/team(4).png";
import team5 from "../../Assets/team(5).png";
import team6 from "../../Assets/team(6).png";
import team7 from "../../Assets/team(7).png";
import team8 from "../../Assets/team(8).png";
import team9 from "../../Assets/team(9).png";

const Pp = ({ pic, name, role }) => (
  <a href="/" className="team_m">
    <img src={pic} alt={pic} className="pp" />
    <div className="flex-between dit">
      <h1 className="name">{name}</h1>
      <div className="tmsl flex-center">
        <FaInstagram />
      </div>
    </div>
    <h2 className="role">{role}</h2>
  </a>
);

const Team = () => {
  return (
    <div id="team" className="team">
      <div className="container ">
        <h1 className="title">MEET OUR TEAM</h1>
        <div className="teams">
        <div 
        data-aos="zoom-out-down"
      data-aos-offset="200"
      data-aos-delay="10"
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
         className="flex-center"><Pp pic={team1} name={"YURA CHRISTIAN"} role={"Founder"} /> </div>
        <div 
        data-aos="zoom-out-down"
      data-aos-offset="200"
      data-aos-delay="10"
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
         className="flex-center"><Pp pic={team2} name={"Bogdan Gheonu"} role={"Co-Founder"} /> </div>
        <div 
        data-aos="zoom-out-down"
      data-aos-offset="200"
      data-aos-delay="10"
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
         className="flex-center"><Pp pic={team3} name={"Katie"} role={"Artist"} /> </div>
        <div 
        data-aos="zoom-out-down"
      data-aos-offset="200"
      data-aos-delay="10"
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
         className="flex-center"><Pp pic={team4} name={"Tyrone Hermitt"} role={"Influencer Team"} /> </div>
        <div 
        data-aos="zoom-out-down"
      data-aos-offset="200"
      data-aos-delay="10"
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
         className="flex-center"><Pp pic={team5} name={"Kyle Beautmont"} role={"Influencer Team"} /> </div>
        <div 
        data-aos="zoom-out-down"
      data-aos-offset="200"
      data-aos-delay="10"
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
         className="flex-center"><Pp pic={team6} name={"Kyle Beautmont"} role={"Influencer Team"} /> </div>
        <div 
        data-aos="zoom-out-down"
      data-aos-offset="200"
      data-aos-delay="10"
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
         className="flex-center"><Pp pic={team7} name={"Peter"} role={"Discord Project Manager"} /> </div>
        <div 
        data-aos="zoom-out-down"
      data-aos-offset="200"
      data-aos-delay="10"
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
         className="flex-center"><Pp pic={team8} name={"Marcus"} role={"Discord Moderator"} /> </div>
        <div 
        data-aos="zoom-out-down"
      data-aos-offset="200"
      data-aos-delay="10"
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
         className="flex-center"><Pp pic={team9} name={"Austin"} role={"Discord Moderator"} /> </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
