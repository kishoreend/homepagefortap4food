import React from 'react'
import './Home.css'
import ravi from './raviramlogo6.jpg'
import ravi2 from './raviramlogo2.jpg'
import rl from './rl.png'
import { Hex } from './Hex'
import rl9 from './rl9.jpg'
import qrcode from './qrcode.jpg'
import Slide from 'react-reveal/Slide';
import { Height } from '@mui/icons-material'
// import a from "../../Homepage/logo";
export  const Home = () => {
  return (
   <div className='hometitle'>
     {/* <img src={ravi2} className="logoimage"/> */}
     {/* <img src={rl9} /> */}
    
     <h1 className='logocontent1' style={{fontSize:"20px",fontFamily:'sans-serif',color:'#d4484c'}}>
      <p className='p' style={{fontSize:"30px",fontFamily:'Brush Script MT',color:'#f78da7'}}>Are You Hungry? <br/> </p>
      <p className='p1' style={{fontSize:"22px",fontFamily:'Brush Script MT',color:'royalblue'}}>Don't Wait {" "}!!! <br/> </p>
      Scan Me for your Favourite Food</h1>
     
    <h1 className='logocontent' style={{fontsize:"15px"}}>Scan Me for Your Favourite Food</h1>
    <span>
    <img src={qrcode} style={{height:'120px',width:'120px',position:'absolute',marginLeft:'-22vh',marginTop:'10vh'}}/>
    </span>
    
   </div>
  )
}
{/* <div className='hometitle' >
      
      <div>
      <div className='logohexa'>
        
      </div>
      <div className='logohexa'>
        SOLUTIONS
      </div>
     
      </div>
      <div>
      <div className='logohexa'>
       SERVICES
      </div>
      <img src={rl} className="raviimage"/>
      <div className='logohexa'>
       
      </div>
      </div>
      <div>
      <div className='logohexa'>
       
      </div>
      <div className='logohexa'>
      SUPPORT
      </div>
      
      </div>
   
    </div> */}


//     <div className='hometitle' >
//     {/* <Hex/> */}
//     <Slide right>
//     <div className='ist logo1'>
//     <div className='logohexa'>
//     SERVICES
//     </div>
//     <div className='logohexa jk'>
      
//     </div>
//     </div>
//     <div className='ist logo2'>
//     <div className='logohexa jk'>
    
//     </div>
//     <img src={rl} className="raviimage"/>
//     <div className='logohexa'>
//     SOLUTIONS
//     </div>
//     </div>
//     <div className='ist logo3'>
//     <div className='logohexa'>
//     SUPPORT
//     </div>
//      <div className='logohexa jk'>
   
//     </div>
//     </div>
//     </Slide>
// <center> <h1 className='logocontent'>It Is Our Thing</h1></center>
// </div>