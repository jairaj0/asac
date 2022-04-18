import React,{useEffect  } from 'react';
import './Banner.scss';
import $ from 'jquery';
import homebg from '../../Assets/home-bg.png'
import herobg from '../../Assets/hero-banner.png'
import item1 from "../../Assets/home-banner-item1.png"
import item2 from "../../Assets/home-banner-item2.png"
import item3 from "../../Assets/home-banner-item3.png"
import { TweenMax } from 'gsap';
import { Expo } from 'gsap';

const Banner = () => {
    

    useEffect(() => {

        $(document).ready(function() {
            function firstleft(){
                $(".home-banner-item2 .work__item-img").animate({"margin-left": "-=50px" }, 2500, "swing", firstright);
            
            }
            function firstright(){
                $(".home-banner-item2 .work__item-img").animate({"margin-left": "+=50px" }, 2500, "swing", firstleft);
        
            }
            firstleft();
        });
        $(document).ready(function() {
            function firstleft(){
                $(".home-banner-item1 .work__item-img").animate({"margin-left": "-=20px" }, 3500, "swing", firstright);
            
            }
            function firstright(){
                $(".home-banner-item1 .work__item-img").animate({"margin-left": "+=20px" }, 3500, "swing", firstleft);
        
            }
            firstleft();
        });
        $(document).ready(function() {
            function firstleft2(){
                
            $(".home-banner-item2 .work__item-img").animate({"margin-left": "-=20px" }, 3500, "swing", firstright2);
            }
            function firstright2(){
                $(".home-banner-item2 .work__item-img").animate({"margin-left": "+=20px" }, 3500, "swing", firstleft2);
        
            }
            firstleft2();
        });
        $(document).ready(function() {
            function firstleft3(){
                $(".home-banner-item3 .work__item-img").animate({"margin-left": "-=20px" }, 3500, "swing", firstright3);
            
            }
            function firstright3(){
                $(".home-banner-item3 .work__item-img").animate({"margin-left": "+=20px" }, 3500, "swing", firstleft3);
        
            }
            firstleft3();
        });
        
        
        
        init3D();
        
        function init3D() {
            var $workItem = $(".work__item");
        
            $workItem.each(function() {
                $(this).data("xPos", $(this).offset().left);
                $(this).data("yPos", $(this).offset().top);
                $(this).data("itemWidth", $(this).width());
                $(this).data("itemHeight", $(this).height());
                $(this).data("imgOuter", $(this).find(".work__item-img-outer"));
            });
        
            $workItem.mousemove(function(e) {
                var xPos = $(this).data("xPos");
                var yPos = $(this).data("yPos");
                var mouseX = e.pageX;
                var mouseY = e.pageY;
                var left = mouseX - xPos;
                var top = mouseY - yPos;
                var origin = "center center -300";
                var xPerc =
                    (left - $(this).data("itemWidth") / 2) / $(this).data("itemWidth") * 200;
                var yPerc =
                    (top - $(this).data("itemHeight") / 2) / $(this).data("itemHeight") * 200;
        
                TweenMax.to($(this).data("imgOuter"), 2, {
                    rotationX: 0.01 * yPerc,
                    rotationY: 0.1 * xPerc,
                    transformOrigin: origin,
                    ease: Expo.easeOut
                });
            });
        
            $workItem.on("mouseleave", function() {
                TweenMax.to($(this).data("imgOuter"), 2, {
                    rotationX: 0,
                    rotationY: 0,
                    transformOrigin: origin,
                    ease: Expo.easeOut
                });
            });
        }
    }, [])
  return (
    <>

    <img src={herobg} alt={herobg} className="banner_img" />
    
        <section id='story' className="home-banner" style={{background:`url(${homebg})` , backgroundSize:"cover"}}>

<div className="flex-between section-first" id="top-page">
    
<div className="home-banner-item home-banner-item1">
    <div className="work__item">
        <div className="work__item-inner">
            <div className="work__item-img-outer">
                <img className="work__item-img" src={item1} alt="home-banner" />
                </div>
        </div>
    </div>
</div>
<div className="home-banner-item home-banner-item22">
    <div className="work__item">
        <div className="work__item-inner">
            <div className="work__item-img-outer">
                <img className="work__item-img middle" src={item2} alt="home-banner" />
                </div>
        </div>
    </div>
</div>

<div className="home-banner-item home-banner-item3">
    <div className="work__item">
        <div className="work__item-inner">
            <div className="work__item-img-outer">
                <img className="work__item-img" src={item3} alt="home-banner" />
                </div>
        </div>
    </div>
</div>

</div>
</section>
    </>
  )
}

export default Banner