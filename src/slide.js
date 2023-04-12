import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Fg from "./Fg";
export default class Support extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
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
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
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
    
    // const data=[
    //     {
    //     img:"https://trainings.internshala.com/cached_uploads/home/images/react.jpg",
    //     title:'React',
    //     description:'Master the front-end powerhouse used to build seamless applications'
    //   },
    //   {
    //     img:"https://trainings.internshala.com/cached_uploads/home/images/python.jpg",
    //     title:'Python',
    //     description:'Build fantasy apps using python'
    //   },
    //   {
    //     img:"https://trainings.internshala.com/cached_uploads/home/images/web-development.jpg",
    //     title:'Web Development',
    //     description:'Learn how to create a website from scratch'
    //   },
    //   {
    //     img:"https://trainings.internshala.com/cached_uploads/home/images/machine-learning.jpg",
    //     title:'Machine Learning',
    //     description:'learn Machine learning From scratch and take the first step towards AI'
    //   },
    //   {
    //     img:"https://trainings.internshala.com/cached_uploads/home/images/android.jpg",
    //     title:'Android App Development',
    //     description:'Build your desired app'
    //   },
    //   {
    //     img:"https://trainings.internshala.com/cached_uploads/home/images/android.jpg",
    //     title:'Android App Development',
    //     description:'Build your desired app'
    //   },
    // ]
    return (
      <div>
        
        <Slider {...settings}>
          <div>
          <Fg />
          </div>
          <div>
          <Fg />
          </div>
          <div>
          <Fg />
          </div>
          <div>
          <Fg />
          </div>
          <div>
          <Fg />
          </div>
          <div>
          <Fg />
          </div>
        </Slider>
      </div>
    );
  }
}