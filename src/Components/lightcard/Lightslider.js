import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Lightcard from './Lightcard'
// import './Lightslider.css'
export default class Sliding extends Component {
    render(props) {
      var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 920,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 540,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      
      return (
    
        <div >
          <Slider {...settings} className="slider">
            <div>
            <Lightcard/>
            </div>
            <div>
            <Lightcard/>
            </div>
            <div>
            <Lightcard/>
            </div>
            <div>
            <Lightcard/>
            </div>
            <div>
            <Lightcard/>
            </div>
            <div>
            <Lightcard/>
            </div>
          </Slider>
        </div>
      );
    }
  }