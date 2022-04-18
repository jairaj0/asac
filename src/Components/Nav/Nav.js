/* eslint-disable jsx-a11y/anchor-has-content */
import React , {useState , useEffect} from "react";
import "./Nav.scss";
import logo from "../../Assets/LOGO-2.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const tgl = () => toggle ? setToggle(false) : setToggle(true);
  

useEffect(() => {
  const blur = () => {
    document.querySelector('.body').style.filter="blur(8px)"
    document.querySelector('body').style.overflow="hidden"
    document.querySelector('.menubox').style.zIndex="10"
    document.querySelector('.menubox').style.display="flex"
  }

  const remove = () => {
    document.querySelector('.body').style.filter="none"
    document.querySelector('body').style.overflow="auto"
    document.querySelector('.menubox').style.zIndex="-10"
    document.querySelector('.menubox').style.display="none"
  }

  toggle ? blur() : remove()

}, [toggle])


  return (
    <nav>
      <div className="container flex-between">
        <a href="/">
          <img className="logo" src={logo} alt={logo} />
        </a>

        <div className="links">
          <a href="#story" className="link">
            STORY
          </a>
          <a href="#mint" className="link">
            MINT
          </a>
          <a href="#roadmap" className="link">
            ROADMAP
          </a>
          <a href="#team" className="link">
            TEAM
          </a>
          <a href="#faq" className="link">
            FAQ
          </a>
        </div>

        <button className="connect center">Connect Wallet</button>

        <button onClick={tgl} className="menu">{toggle ? <FaTimes /> : <GiHamburgerMenu />}</button>

        <div className={`menubox ${toggle ? "anima" : ""}`}>
        <div className="mlinks flex">
          <a onClick={tgl} href="#story" className="link">
            STORY
          </a>
          <a onClick={tgl} href="#mint" className="link">
            MINT
          </a>
          <a onClick={tgl} href="#roadmap" className="link">
            ROADMAP
          </a>
          <a onClick={tgl} href="#team" className="link">
            TEAM
          </a>
          <a onClick={tgl} href="#faq" className="link">
            FAQ
          </a>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
