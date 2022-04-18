import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import "./Slider.scss";

import pic1 from "../../Assets/1.png";
import pic2 from "../../Assets/2.jpg";
import pic3 from "../../Assets/3.png";
import pic4 from "../../Assets/4.png";
import pic5 from "../../Assets/5.png";
import pic6 from "../../Assets/6.png";
import pic7 from "../../Assets/7.png";
import pic8 from "../../Assets/8.png";
import pic9 from "../../Assets/9.png";
import pic10 from "../../Assets/10.jpeg";
import pic11 from "../../Assets/11.jpeg";
import pic12 from "../../Assets/12.jpeg";
import pic13 from "../../Assets/13.jpeg";
import pic14 from "../../Assets/14.png";

const Slider = () => {
  return (
    <section>
        <Swiper
      spaceBetween={10}
      loop={true}
      speed={5000}
      slidesPerView={"auto"}
      grabCursor={true}
      autoplay={{
        delay: false,
        disableOnInteraction: false,
        reverseDirection: true,
      }}
      modules={[Autoplay]}
      className="warraperSlider"
    >
      <SwiperSlide style={{ backgroundImage: `url(${pic1})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      <SwiperSlide style={{ backgroundImage: `url(${pic2})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      <SwiperSlide style={{ backgroundImage: `url(${pic3})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      <SwiperSlide style={{ backgroundImage: `url(${pic10})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      <SwiperSlide style={{ backgroundImage: `url(${pic11})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      <SwiperSlide style={{ backgroundImage: `url(${pic8})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      <SwiperSlide style={{ backgroundImage: `url(${pic13})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      <SwiperSlide style={{ backgroundImage: `url(${pic14})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      <SwiperSlide style={{ backgroundImage: `url(${pic4})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      <SwiperSlide style={{ backgroundImage: `url(${pic5})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      <SwiperSlide style={{ backgroundImage: `url(${pic6})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      <SwiperSlide style={{ backgroundImage: `url(${pic7})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      <SwiperSlide style={{ backgroundImage: `url(${pic12})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      <SwiperSlide style={{ backgroundImage: `url(${pic9})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
    </Swiper>
    <Swiper
      spaceBetween={10}
      loop={true}
      speed={5000}
      slidesPerView={"auto"}
      grabCursor={true}
      autoplay={{
        delay: false,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="warraperSlider"
    >
      <SwiperSlide style={{ backgroundImage: `url(${pic1})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      <SwiperSlide style={{ backgroundImage: `url(${pic2})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      <SwiperSlide style={{ backgroundImage: `url(${pic3})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      <SwiperSlide style={{ backgroundImage: `url(${pic4})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      <SwiperSlide style={{ backgroundImage: `url(${pic5})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      <SwiperSlide style={{ backgroundImage: `url(${pic6})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      <SwiperSlide style={{ backgroundImage: `url(${pic7})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      <SwiperSlide style={{ backgroundImage: `url(${pic12})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      <SwiperSlide style={{ backgroundImage: `url(${pic9})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      <SwiperSlide style={{ backgroundImage: `url(${pic10})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      <SwiperSlide style={{ backgroundImage: `url(${pic11})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      <SwiperSlide style={{ backgroundImage: `url(${pic8})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      <SwiperSlide style={{ backgroundImage: `url(${pic13})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      <SwiperSlide style={{ backgroundImage: `url(${pic14})` , width:"200px" , height: "200px" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}/>
      
      
    </Swiper>
    </section>
  );
};

export default Slider;
