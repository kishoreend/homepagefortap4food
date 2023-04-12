import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Cardi from "./Cardi";
import './slider.css'
export default class Sliding extends Component {
  render(props) {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
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
          breakpoint: 980,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
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
  
      <div>
        <Slider {...settings} className="slider">
          <div>
          <Cardi data={this.props.data.id1}/>
          </div>
          <div>
          <Cardi data={this.props.data.id2} />
          </div>
          <div>
          <Cardi data={this.props.data.id3} />
          </div>
          <div>
          <Cardi data={this.props.data.id4}/>
          </div>
          <div>
          <Cardi data={this.props.data.id5} />
          </div>
          <div>
          <Cardi data={this.props.data.id6}/>
          </div>
        </Slider>
      </div>
    );
  }
}