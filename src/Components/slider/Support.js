import React from 'react'
import Sliding from './Slider'
import Bounce from 'react-reveal/Bounce';
import Navbar from '../Homepage/navbar/Navbar';
import Footer2 from '../footer/Footer2';
//import './support.css'
export const Support = () => {
  const supportinfo= {
    id1:{
      msg:'support',
      img:"https://www.jdrf.org/wp-content/uploads/2020/12/AWS-logo-2.jpg",
      title:'AWS',
      description:'Master the front-end powerhouse used to build seamless applications',
      duration:'8 weeks'
      },
     id2:{
      msg:'support',
      img:"https://cdn-icons-png.flaticon.com/512/873/873107.png",
     title:'AZURE',
     description:'Build your desired app',
     duration:'6 Weeks'
     },
  
     id3:{ 
      msg:'support',
      img:"https://lirp.cdn-website.com/aa0ef369/dms3rep/multi/opt/google-cloud-icon-400w.png",
     title:'GCP',
     description:'Build your desired app',
     duration:'4 Weeks'
     },
     id4:{ 
      msg:'support',
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEyLh1DBrXBNxgnYz2N4soc5_WQGZQyb0Hw&usqp=CAU",
     title:'DevOps',
     description:'Build fantasy apps using python',
     duration:'4 Weeks'
     },
     id5:{ 
      msg:'support',
      img:"https://www.bluematador.com/hs-fs/hubfs/www/Icons/bluematador-kubernetes-125w.png?width=250&name=bluematador-kubernetes-125w.png",
      title:'Kubernetes',
      description:'Learn how to create a website from scratch',
      duration:'6 weeks'
     },
     id6:{ 
      msg:'support',
      img:"https://cdn-icons-png.flaticon.com/512/1377/1377892.png",
     title:'Virtualization',
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
          <h1 className='head'>Support</h1>
        </Bounce>
        </div>
       
        <div className="servicetext">
          <div >
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
        <Sliding data={supportinfo} />
        </div>
        <div style={{marginTop:"50px"}}>
        <Footer2/>
        </div>
    </div>
  )
}
