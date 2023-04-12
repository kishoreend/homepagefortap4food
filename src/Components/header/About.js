import React from 'react'
import Lottie from 'react-lottie';
import styled from "styled-components";
import data from './abt.json';
import './About.css'
import abt from './a4.jpg'
import piz from './piz.jpg'
import pasta from './pasta.jpg'
import dessert from './dessert.jpg'
import coff from './coff.jpg'
// import { Service } from '../slider/Service';
// import { Training } from '../slider/Training';
// import { Support } from '../slider/Support';
export default function About() {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: data,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  return (
    <div class="page"  >
     <div className='combine' >
     <div className="image">
{/*        
        <Lottie options={defaultOptions} style={{width:"300px",height:'400px'}} />  */}
        {/* <img src="https://us.experteer.com/wordpress/wp-content/uploads/2017/04/workplace-uniform.jpg"/> */}
        <img src="https://websitedemos.net/restaurant-04/wp-content/uploads/sites/194/2018/05/image-02-free-img.png" />
        </div>
     <div className='textabout'>
     <center><h1> <span>About</span>&nbsp;Us</h1>
     <h5>We Have An Awesome Team To Work With Dedication</h5>
     </center>
        {/* <p class="p1"> <span>RaviramTech</span> IT Services is a fast growing IT service provider with its corporate office and technology center in INDIA. The technology centers are well integrated through communication and knowledge-sharing network, to ensure that experience &nbsp; gained by the entire organization is optimized.
        Our motive is to provide the best IT-services possible, right from project planning to top-class execution and end-to-end develop-ment that continually exceeds every client’s satisfaction.
       <p class="p2"> We have a team of experienced and brightest minds having a solid background &nbsp; in leading technologies such as JS, React, Python, Angular, Java, etc. Our satisfied client is what drives us in the global market.
        We offer services in software development,&nbsp; web development, &nbsp; DBA services, and Creative Design from scratch to finish.</p>
        </p> */}
        <p>
        The definitive goal of Endeavour Technologies <br/>is to develop a Multilanguage Food  application in Web application Platform. In Our application, a Customer can view the list of restaurant names by scanning the QR code which is available in the food court area in shopping malls, Theaters, and Restaurants. Users can select the Food stall and place the order accordingly.
        To facilitate a platform where customer can order their food by scanning the QR code instead of standing in a queue and waiting for their number.  
 
        </p>
        </div>
        
        </div>
        <div>
          <center>
           <h1 className='title' style={{color:'red',fontSize:'30px',marginTop:'17vh',fontFamily:'cursive'}}>Scan & Choose Your Flavour </h1>
           <p className='para' style={{fontSize:'40px',fontWeight:'bold',fontFamily:'cursive'}}>Food that brings people together!</p>
           <button className='button' style={{boxSizing:'border-box',color: 'var(ast-global-color-0)',width:'150px',height:'40px',backgroundColor:'white',borderColor:'#f78da7',marginTop:'3vh'}}>View All Menu</button>
         
          </center>
          <span>
          <img src={piz} style={{height:'300px',width:'300px',marginLeft:'10vh',marginTop:'10vh'}}/>
          
          <img src={pasta} style={{height:'300px',width:'300px', marginLeft:'20vh',marginTop:'10vh'}}/>
          <img src={dessert} style={{height:'300px',width:'300px', marginLeft:'22vh',marginTop:'10vh'}}/>
          </span>
          <div>
          <h4 className='content' style={{marginLeft:'23vh'}}>Pizza</h4>
          <h4 className='content' style={{marginLeft:'96vh',marginTop:'-5vh'}}>Pasta</h4>
          <h4 className='content' style={{marginLeft:'170vh',marginTop:'-5vh'}}>Dessert</h4>
          </div>
        </div>
        <div>
          <center style={{marginTop:'13vh'}}>
            <h8 className="c1" style={{fontFamily:'Brush Script MT',marginTop:'5vh',fontSize:'40px',fontWeight:'bold'}}>join us</h8>
            <p className='p2' style={{fontSize:'30px',fontWeight:'bold'}}>Scan the Code  Now, Come And See Us</p>
            
          </center>
          <span>
          <img src={coff} style={{marginTop:'5vh',height:'70%',width:'70%',marginLeft:'27vh'}}/>
          </span>
        </div>
  </div>
  )
   
}

// const Section = styled.section`
//   position: relative;
//   margin-top: 3rem;
//   width: 100%;
//   // .image{
//   //   height: 80%;
//   //   width: 60%;  
//   //   box shadow: 1px 3px solid  blue; 
    
//   // }
// // .h2 {
// //     text-align : center;
// //     padding-top : 5vh;
// //     margin-left : 40vh;
// //     font-weight : normal;
// //     color : orange;
// //   }
//   // .h1{
//   //   padding-top: 3vh;
//   //   padding-left: 8vh;
//   //   font-size: 35px;
//   //   color: black;
//   //   margin-left : 50vh;
//   //   font-weight : bold;
//   // }
//   // .h2{
//   //   font-size : 20px;
//   //   padding-top:2vh;
//   //   color : blue;
//   // }
//   .p1{
//     margin-top:10vh;
//     padding-top : 2vh;
//     font-size : 15px;
//     color:black;
//     margin-left:15px;
//     font-weight :200;
//   }
//   .p2{
//     margin-top : 5vh;
//     font-size : 15px;
//     margin-left: 0vh;
//     font-weight : 200;
//     color:black;
    
//   }
//   .textabout{
//     width:60vw;
//     word-spacing:8px;
//   }
//   .combine{
//     display:flex;
//     justify-content:center;
//     flex-wrap:nowrap
//   }
//   .image{
//     display:flex;
//     justify-content:center;
//     align-item:center;
//     width:40%;
//     margin-left:10px;
//     box shadow: 1px 3px solid  blue; 
//   }
//   // .button{
//   //   height: 150%;
//   //   width : 6%;
//   //   font-weight : 400;
//   //   margin-top : 3vh;
//   //   background-color: #2E5A88;
//   //   border-radius : 1rem;
//   //   color : #FFFF;
//   //   margin-left : 13vh;
//   //   padding-top : 1vh;
//   //   padding-bottom : 1vh;
//   //   text-align : center;
//   // }
    
//   // .container {
//   //   padding-right: 5px;
//   //   padding-left: 5px;
//   //   margin-right: auto;
//   //   margin-left: auto;
//   //   padding-bottom: 4px;
//   //   background-color : black;
//   // }
//   // .header{
//   //   font-size : 25px;
//   //   font-weight : bold;
//   //   text-align : center;    
//   // }
//   // .paragragh{
//   //   font-size: 20px;
//   //   font-weight : normal;
//   //   margin-left : 2px;  
//   //   text-align :center;  
//   // }
//   // .head {
//   //   text-align: left;
//   //   font-size: 40px;
//   //   color: orange;
//   //   font-weight: bold;
//   //   margin-left : 60vh;
//   //   padding-top : 12vh;
//   // }
//   // .para {
//   //   text-align : left;
//   //   font-size : 18px;
//   //   color : #3088c1;
//   //   margin-left : 3vh;
//   //   font-weight : normal;
    
//   //   padding-top : 3vh;
//   // }
//   // .background {
//   //   background-size: cover;
//   //   color: #fff;
//   //   background-color:#023e8a;
//   //   img {
//   //     width: 150px;
//   //     height: 100px;
//   //     filter: brightness(40%);
//   //   }
//   // }
//   // .content {
//   //   height: 100%;
//   //   width: 100%;
//   //   position: absolute;
//   //   top: 0;
//   //   z-index: 3;
//   //   text-align: left;
//   //   margin-left : 3vh;
//   //   display: flex;
//   //   flex-direction: column;
//   //   justify-content: center;
//   //   align-items: center;
//   //   gap: 2rem;
//   //   .title {
//   //     color: white;
//   //     h1 {
//   //       font-size: 30px;
//   //       margin-top : 2px;  
//   //       font-weight : bold; 
//   //       text-align: center;     
//   //     }
//   //     p {
//   //       padding-top: 2vh;
//   //       margin-left:1vh;
//   //       text-align: left;
//   //       font-weight: normal;
//   //       margin-top: 2px;
//   //       font-size: 20px;
//   //     }
//   //   }
//   //   .search {
//   //     display: flex;
//   //     background-color: #ffffffce;
//   //     padding: 0.5rem;
//   //     border-radius: 0.5rem;
//   //     .container {
//   //       display: flex;
//   //       align-items: center;
//   //       justify-content: center;
//   //       flex-direction: column;
//   //       padding: 0 1.5rem;
//   //       label {
//   //         font-size: 1.1rem;
//   //         color: #03045e;
//   //       }
//   //       input {
//   //         background-color: transparent;
//   //         border: none;
//   //         text-align: center;
//   //         color: black;
//   //         &[type="date"] {
//   //           padding-left: 3rem;
//   //         }

//   //         &::placeholder {
//   //           color: black;
//   //         }
//   //         &:focus {
//   //           outline: none;
//   //         }
//   //       }
//   //     }
//   //     button {
//   //       padding: 1rem;
//   //       cursor: pointer;
//   //       border-radius: 0.3rem;
//   //       border: none;
//   //       color: white;
//   //       background-color: #4361ee;
//   //       font-size: 1.1rem;
//   //       text-transform: uppercase;
//   //       transition: 0.3s ease-in-out;
//   //       &:hover {
//   //         background-color: #023e8a;
//   //       }
//   //     }
//   //   }
//   // }
//   @media screen and (min-width: 280px) and (max-width: 980px) {
//    .combine{
//      flex-wrap:wrap;
//    }
//    .textabout{
//      width:100%;
//    }
//    .image{
//      width:100%;
//      height:100%;
//    }
//   }
// `;
