import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Hex} from './Hex'
import './SliderHexa.css'
import {Link} from 'react-router-dom'
import './SliderHexa.css'
import Spiny from './Spin'
import Rotate from "./Rotate";
export default class SliderHexa extends Component {
  render(props) {
    var settings = {
      dots:true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1115,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            //infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 920,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            //infinite: false,
            dots:false
          }
        },
        {
          breakpoint: 780,
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
    const heading=[

        { 
          
          one:'Veg Sandwich',
          two:'NonVeg Sandwich',
          three:'Veg Salad',
          four:'NonVeg Salad',
          five:'Beverage',
          six:'Cookies &Chips',
          center:'Subway',
    
        },
        { one:'Coke',
        two:'ThumsUp',
        three:'MinuteMaid',
        four:'Fanta',
        five:'Water',
        six:'Maaza',
        center:'CocoCola',
    
        },
        { 
          one:'Pizza',
          two:'Biryani',
          three:'Coco Cola',
          four:'Cream Stone',
          five:'Burger',
          six:'Chicken',
          center:'KFC',
        },
      ]
    return (
  <div className="slidercomponent" style={{position:'relative'}}>
      <div className="sliderhexa">
        <Slider {...settings} >
          <div className="thy">
       <Link to="services">   <Hex data={heading[0]}/>  </Link>  
          </div>
          <div className="thy">
          <Link to="solutions">   <Hex data={heading[1]}/>  </Link>  
          </div>
          <div className="thy">
          <Link to="training">   <Hex data={heading[2]}/>  </Link>  
          </div>
        
        </Slider>
      </div>
      </div>
    );
  }
}