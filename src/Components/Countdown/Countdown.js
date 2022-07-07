import React, { useEffect,useRef, useState } from "react";
import './Countdown.scss';
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export const Countdown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();
  const clean = () => clearInterval(interval.current);

  const startTimer = () => {
    const CountdownDate = new Date("aug 30 , 2022 01:10:00").getTime();

    

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = CountdownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  

      if(distance <0){
        clean()
      }else{
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds)
      }
    }, 1000);
  };

  const twoDigit = (digit) => {
    let digi;
    if(digit.toString().length === 1){
        digi = `0${digit}`
        return digi;
    }else{
        return digit;
    }
}

  useEffect(() => {
      startTimer();
      return () => {
        clean()
      }
  })

  return (
      <div
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="10"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
       className="flex countdown">
          <div className="flex timeBox">
          <h1 className="flex-center">{twoDigit(timerDays)}</h1> <p>Days</p>
          </div>
          <span className="flex-center">
              <div className="cir"></div>
              <div className="cir"></div>
          </span>

          <div className="flex timeBox">
          <h1 className="flex-center">{twoDigit(timerHours)}</h1> <p>Hours</p>
          </div>
          <span className="flex-center">
              <div className="cir"></div>
              <div className="cir"></div>
          </span>

          <div className="flex timeBox">
          <h1 className="flex-center">{twoDigit(timerMinutes)}</h1> <p>Minutes</p>
          </div>
          <span className="flex-center">
              <div className="cir"></div>
              <div className="cir"></div>
          </span>

          <div className="flex timeBox">
          <h1 className="flex-center">{twoDigit(timerSeconds)}</h1> <p>Seconds</p>
          </div>
      </div>
  )
};
