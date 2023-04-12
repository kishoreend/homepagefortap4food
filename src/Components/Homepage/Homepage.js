import React from 'react'
import Navbarrr from './navbar/Navbar'
import {Chome} from './logo/Chome'
import './Homepage.css'
import Back from '../background/Back'
export default function Homepage() {
  return (
    <div><Back/>
    <div className='homepage' >
      
        <Navbarrr/>
        <p style={{fontSize:"20px",color:'#000'}}>&gt;</p>
        <Chome/>
    </div>
    </div>
  )
}


//const Section = styled.section`
  //.homepage {
    //width : 80%;
   // height : 50%;
  //}

//`;
// backgroundColor:'#deabca'
// backgroundImage: 
      // 'linear-gradient(45deg, rgba(145, 146, 122, 0.62), rgba( 217, 91, 132, 0.58)), url(https://fliarbi.com/photos/5ded00d9455b0-logo.jpg) ',backgroundSize:'contain',backgroundRepeat:'no-repeat',backgroundPosition:'center',