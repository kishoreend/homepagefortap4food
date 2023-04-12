import React from 'react'
import Sliding from './Slider'
import Bounce from 'react-reveal/Bounce';
import cloud from './cloud-data.png'
import iot from './iot.png'
import network from './network.png' 
import data from './data.png'
import Navbar from '../Homepage/navbar/Navbar'
import Footer2 from '../footer/Footer2';
import styled from "styled-components";
import './service.css'
export const Service = () => {
  const servicesinfo={
    id1:{
      msg:'services',
      img:cloud,
      title:'Cloud Services',
      description:'Master the front-end powerhouse used to build seamless applications',
      duration:'8 weeks'
      },
     id2:{
      msg:'services',
      img:iot,
     title:'IOT Services',
     description:'Build your desired app',
     duration:'6 Weeks'
     },
  
     id3:{ 
      msg:'services',
      img:'https://cdn-icons-png.flaticon.com/512/1239/1239719.png',
     title:'Network Services',
     description:'Build your desired app',
     duration:'4 Weeks'
     },
     id4:{ 
      msg:'services',
     img:data,
     title:'Data Services',
     description:'Build fantasy apps using python',
     duration:'4 Weeks'
     },
     id5:{ 
      msg:'services',
      img:"https://trainings.internshala.com/cached_uploads/home/images/web-development.jpg",
      title:'Web Development',
      description:'Learn how to create a website from scratch',
      duration:'6 weeks'
     },
     id6:{  
      msg:'services',
      img:"https://trainings.internshala.com/cached_uploads/home/images/machine-learning.jpg",
     title:'IT Consulting Services',
     description:'learn Machine learning From scratch and take the first step towards AI',
     duration:'8 Weeks'
     }

  }

  return (
    <div style={{minHeight:'100vh'}}>
       <div className='navba'>
       <Navbar/>
       </div>
       <div style={{marginTop:"12vh"}}>
        <Bounce>
          <h1 className='head'>Services</h1>
        </Bounce>
        </div>
       
        <div className="servicetext">
          <div>
          <h1 className='subhead'>We make your web applications<br/> stand out </h1>
          "At Raviram Tech, we provide the highest quality web app services from concept <br/>design to individual components and end-to-end development Services. We analyze <br/>your business needs in detail before designing a viable solution that serves your<br/> purpose.
         <p className='para'> In addition, we allow ample time for research on requirements during the <br/>conceptual phase of projects not to run out of ideas".

        </p>
        
         </div>
        <div className="image">
        <video loop muted autoPlay style={{width:'550px',height:'450px',marginRight:'10px'}} >
          <source type="video/mp4" src="https://www.infoanetech.com/assets/images/Web-application/web-application-banner.mp4"/>
        </video>
        </div>
       
        </div>
        <div style={{marginTop:'50px'}}>
        <Sliding data={servicesinfo} />
        </div>
        <div style={{marginTop:"50px"}}>
        <Footer2/>
        </div>
    </div>
  )
  }