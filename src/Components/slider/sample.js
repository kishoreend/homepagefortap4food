import React from 'react'
import Sliding from './Slider'
import Bounce from 'react-reveal/Bounce';
export const Training = () => {
  const traininginfo= {
    id1:{
      img:"https://media.istockphoto.com/photos/training-and-skill-development-concept-with-icons-of-online-course-picture-id1353769234?b=1&k=20&m=1353769234&s=170667a&w=0&h=b6IpUxE9iqbdRogxurc7IFufWCOEd-pChpn59neFpQU=",
      title:'React',
      description:'Master the front-end powerhouse used to build seamless applications',
      duration:'8 weeks'
      },
     id2:{
      img:"https://trainings.internshala.com/cached_uploads/home/images/android.jpg",
     title:'Android App Development',
     description:'Build your desired app',
     duration:'6 Weeks'
     },
  
     id3:{ 
      img:"https://trainings.internshala.com/cached_uploads/home/images/android.jpg",
     title:'Android App Development',
     description:'Build your desired app',
     duration:'4 Weeks'
     },
     id4:{ 
     img:"https://trainings.internshala.com/cached_uploads/home/images/python.jpg",
     title:'Python',
     description:'Build fantasy apps using python',
     duration:'4 Weeks'
     },
     id5:{ 
      img:"https://trainings.internshala.com/cached_uploads/home/images/web-development.jpg",
      title:'Web Development',
      description:'Learn how to create a website from scratch',
      duration:'6 weeks'
     },
     id6:{  img:"https://trainings.internshala.com/cached_uploads/home/images/machine-learning.jpg",
     title:'Machine Learning',
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
