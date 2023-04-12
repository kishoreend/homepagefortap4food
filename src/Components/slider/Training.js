import React from 'react'
import Sliding from './Slider'
import Bounce from 'react-reveal/Bounce';
import Navbar from "../Homepage/navbar/Navbar"
import Footer2 from '../footer/Footer2';
export const Training = () => {
  const traininginfo= {
    id1:{
      msg:'training',
      img:"https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/training-512.png",
      title:'IT Training',
      description:'Master the front-end powerhouse used to build seamless applications',
      duration:'8 weeks'
      },
     id2:{
      msg:'training',
      img:"https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/android-sdk-icon.png",
     title:'Internships',
     description:'Build your desired app',
     duration:'6 Weeks'
     },
  
     id3:{ 
      msg:'training',
      img:"https://www.pngitem.com/pimgs/m/324-3248332_managed-support-icon-apply-for-job-icon-hd.png",
     title:'IT Certification',
     description:'Build your desired app',
     duration:'4 Weeks'
     },
     id4:{ 
      msg:'training',
     img:"https://thumbs.dreamstime.com/b/basic-rgb-136489451.jpg",
     title:'Job Support',
     description:'Build fantasy apps using python',
     duration:'4 Weeks'
     },
     id5:{ 
      msg:'training',
      img:"https://trainings.internshala.com/cached_uploads/home/images/web-development.jpg",
      title:'IT Projects',
      description:'Learn how to create a website from scratch',
      duration:'6 weeks'
     },
     id6:{  
      msg:'training', 
      img:"https://trainings.internshala.com/cached_uploads/home/images/machine-learning.jpg",
     title:'Sponsored Projects',
     description:'learn Machine learning From scratch and take the first step towards AI',
     duration:'8 Weeks'
     }
  }
  return (
    <div style={{minHeight:'100vh'}}>
       <div className='navba'>
       <Navbar/>
       </div>
       <div style={{marginTop:"80px"}}>
        <Bounce>
          <h1 className='head'>Training</h1>
        </Bounce>
        </div>
       
        <div className="servicetext">
          <div style={{marginRight:'5%',marginLeft:'10px'}}>
          <h1 className='subhead'>Our Services </h1>
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
        <Sliding data={traininginfo} />
        </div>
        <div style={{marginTop:"50px"}}>
        <Footer2/>
        </div>
    </div>
  )
}
