import React, { useState, useRef } from "react";
import Footer from "../Footer/Footer";
import "./Faq.scss";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();


const QA = ({q,a , h}) => {
  const [ans, setAns] = useState(false);
  const elementRef = useRef(null);

  const toggle = (get, set) => {
    get ? set(false) : set(true);
  };

  return (
    <div 
    data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="10"
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
     ref={elementRef} 
    onClick={() => toggle(ans, setAns)} className="q">
    <div className="flex-between">
      <h1 className="question">{q}</h1>
      <button
        className="ans flex-center"
      >
        +
      </button>
    </div>

    <div
      style={{
        height: `${ans ? elementRef.current?.clientHeight + h : 0}px` ,
        marginTop: `${ans ? 2 : 0}rem` ,
      }}
      className="_ans"
    >
      <hr />
      {a}
    </div>
  </div>
  )
}

const Faq = () => {

  return (
    <section id="faq" className="faq">
      <div className="container _faq">
        <h1 className="title">
          FREQUENTLY ASKED
          <br />
          QUESTIONS
        </h1>

        <QA q={"WHEN IS THE OFFICIAL LAUNCH ?"} h={0} a={<h1 className="answer">TBA</h1>} />
        <QA q={"WHAT WILL BE THE PRICE ?"} h={0} a={<h1 className="answer">TBA</h1>} />
        <QA q={"HOW DO I GET WHITELISTED ?"} h={50} a={<p>Join our <br /><span>discord</span><br /> and check under the channel #how-to-whitelist. The requirements is getting harder the closer to mint we get.</p>} />
        <QA q={"HOW CAN I BUY A ASAC NFT?"} h={40} a={<p>Only use our official website to mint. Connect your metamask wallet and choose how many nfts you want to mint. (WL max 5, public sale no limit)</p>} />
        <QA q={"HOW I CAN BUY A NFT ?"} h={50} a={<p>You need funds in ETHEREUM in your Metamask wallet to be able to buy a nft. For a more detailed explanation join our 
        <br /><span>discord</span><br />
         and check under the channel #nft-basics.</p>} />

      </div>
      <Footer />
    </section>
  );
};

export default Faq;
