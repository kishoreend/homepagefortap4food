import React, { useState } from "react";
import styled from "styled-components";
//import excel  from './excel.png';
//import java  from './java.png';
//import pyth  from './pyth.png';
//import webdesign  from './webdesign.png';
//import aws  from './aws.png';
//import sql  from './sql.png';
//import uidesign  from './uidesign.png';
//import webdevelopment  from './webdevelopment.png';
//import er from './er.jpg'
//import avatarImage from "../assets/avatarImage.jpeg";
export default function Content2() {
  const [show1, setshow1] = useState(false)
  const [show2, setshow2] = useState(false)
  const [show3, setshow3] = useState(false)
  const [show4, setshow4] = useState(false)
  const [show5, setshow5] = useState(false)
  const [show6, setshow6] = useState(false)
  const [show7, setshow7] = useState(false)
  const [show8, setshow8] = useState(false)
  const [show9, setshow9] = useState(false)
  const [show10, setshow10] = useState(false)
  const [show11, setshow11] = useState(false)
  const [show12, setshow12] = useState(false)
  const p = "Read more"
  const q = "Read less"
  return (
    <Section id="testimonials">
      <div className="title">
        <h1 className="heading">Our <span> Services </span> </h1>
        <h3 className="para">We Are Always Dedicated For Our Services</h3>
      </div>
      {/* <div className="testimonials">



        <div className="testimonial" style={{ width: '350px', height: "300px" }}>

          <center><img src="https://codebrightly.com/wp-content/uploads/2020/04/project-management.svg" width="220px" height="60px" /></center>
          <h1 className="header">Project Management</h1>
          <p className="content">
            If you want your project to run smoothly and end successfully, it will take a quality team of experts to plan, strategize, control, execute, initiate, and finish the tasks at hand. We’ll adequately take your vision…
          </p>
          <button className="button" style={{margin:'-20',paddingLeft:'15',paddingRight:'15',paddingBottom:'0',paddingTop:'10'}} onClick={()=>setshow3(!show3)}>{  (!show3 && <p>{p}</p>)  ||(show3 && <p>{q}</p>) }</button>
        </div>



        < br />
      </div> */}
      < br />

      <div className="testimonials">


        <div className="testimonial" style={{ width: '350px', height: "300px" }}>

          <center><img src="https://codebrightly.com/wp-content/uploads/2020/04/user-experience.svg" width="220px" height="60px" /></center>
          <h1 className="header">Quality Food</h1>
          <p className="content">
            If you’re building a mobile app, website, or software, you’re not just building it for yourself — you’re building it for the users and your target audience. We specialize in helping companies build their visions from scratch or initiate a makeover to…
          </p>
          {/* <button className="button" style={{margin:'-20',paddingLeft:'15',paddingRight:'15',paddingBottom:'0',paddingTop:'10'}} onClick={()=>setshow4(!show4)}>{  (!show4 && <p>{p}</p>)  ||(show4 && <p>{q}</p>) }</button>*/}

        </div>

        <div className="testimonial" style={{ width: '350px', height: "300px" }}>

          <center><img src="https://codebrightly.com/wp-content/uploads/2020/04/consult.svg" width="220px" height="60px" /></center>
          <h1 className="header">Online Order</h1>
          <p className="content">
            Your business has goals and there’s a good chance you’re well on your way to achieving those, but sometimes having an extra set of eyes and ears can give you a unique perspective on how you strategize. We ensure our clients have accurate…
          </p>
          {/* <button className="button" style={{margin:'-20',paddingLeft:'15',paddingRight:'15',paddingBottom:'0',paddingTop:'10'}} onClick={()=>setshow5(!show5)}>{  (!show5 && <p>{p}</p>)  ||(show5 && <p>{q}</p>) }</button>*/}
        </div>
        <div className="testimonial" style={{ width: '350px', height: "300px" }}>

          <center><img src="https://codebrightly.com/wp-content/uploads/2020/04/quality-assurance.svg" width="300px" height="60px" /></center>
          <h1 className="header">24/7</h1>
          <p className="content">
            There’s a lot that goes into ensuring your software or app is functioning properly before releasing it out to the world. Our team of professionals perform a variety of tests designed to identify the issues, fix them…
          </p>
          {/*< button className="button" style={{margin:'-20',paddingLeft:'15',paddingRight:'15',paddingBottom:'0',paddingTop:'10'}} onClick={()=>setshow6(!show6)}>{  (!show6 && <p>{p}</p>)  ||(show6 && <p>{q}</p>) }</button>*/}
        </div>




      </div>
      < br />

      < br />
      {/*<div className="testimonials">


        <div className="testimonial">
          <h1 className="header">Computer Fundamentals</h1>
          <p className="content">
          Computer is an advanced electronic devic  that takes raw data as an input from the  user < br />and processes it under the control < br/>of a set of instructions
          </p>
          <button className="button">Read more
          </button>

        </div>

        <div className="testimonial">
          <h1 className="header">Web Development</h1>
          <p className="content">
            Web design encompasses many different skills <br />and disciplines in the production and <br /> maintenance of websites. The different areas of <br />web design include web graphic design.
          </p>
          <button className="button">Read more
          </button>
        </div>
        <div className="testimonial">
          <h1 className="header">Ms Office</h1>
          <p className="content">
            Microsoft Office suite is application software's < br /> packaged with one bundle. It means < br /> you can use Microsoft Word, Excel, PowerPoint, < br />MS-Access, for database management.
          </p>
          <button className="button">Read more</button>
        </div>
        <div className="testimonial">
          <h1 className="header"> IT Management</h1>
          <p className="content">
            It is the process of overseeing all< br /> matters related to information < br />technology operations and resources < br />within an IT organization.
          </p>
          <button className="button"> Read more</button>
        </div>



  </div>*/}







      {/*  <div className="testimonials">


        <div className="testimonial" style={{width:'340px',height:"320px"}}>
         
          <center><img src="https://svweb.in/wp-content/uploads/2020/09/Get-the-Most-Fancied-Web-Development-Services-min-scaled-1.jpg" width="260px" height="120px"/></center>
          <h1 className="header">Web Development Solutions</h1>
          <p className="content">
          Web development services help create all to type of web-based software and ensure great experience for web users.{ show10 && <p> At ScienceSoft, we professionally design, redesign  and continuously support customer-facing and enterprise web apps to achieve high conversion and adoption rates.</p>}
          </p>
          <button className="button" style={{margin:'-20',paddingLeft:'15',paddingRight:'15',paddingBottom:'0',paddingTop:'1vh',marginTop:'-1vh',height:'10px',width:'10px'}} onClick={()=>setshow10(!show10)}>{  (!show10 && <p>{p}</p>)  ||(show10 && <p>{q}</p>) }</button>

        </div>

        <div className="testimonial" style={{width:'340px',height:"320px"}}>
         
          <center><img src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/21/2016/07/networking.jpg" width="260px" height="120px"/></center>
          <h1 className="header">Network Solutions</h1>
          <p className="content">
          Network Services/Managed  Services are the services of management of networks by { show11 && <p>IT service providers for their clients. The scope of network services extends from LAN/WLAN management, unified communications to Network Consulting Services and Network implementation services.</p>}
          </p>
          <button className="button" style={{margin:'-20',paddingLeft:'15',paddingRight:'15',paddingBottom:'0',paddingTop:'6',height:'10px',width:'10px'}} onClick={()=>setshow11(!show11)}>{  (!show11 && <p>{p}</p>)  ||(show11 && <p>{q}</p>) }</button>
        </div>
        <div className="testimonial" style={{width:'340px',height:"320px"}}>
          
          <center><img src="https://static3.bigstockphoto.com/0/0/2/large1500/200281528.jpg"  width="260px" height="120px"/></center>
          <h1 className="header">IT Consulting Solutions</h1>
          <p className="content">
          When you work with Raviram Tech Consulting, you’re benefiting from decades of open source expertise.{ show12 && <p> We help your organization accelerate digital transformation through an integrated approach using open source tools, processes, and strateg-ies for measurable metrics-driven results.</p>}
          </p>
          <button className="button" style={{margin:'-20',paddingLeft:'15',paddingRight:'15',paddingBottom:'0',paddingTop:'6',marginTop:'-1vh',height:'10px',width:'10px'}} onClick={()=>setshow12(!show12)}>{  (!show12 && <p>{p}</p>)  ||(show12 && <p>{q}</p>) }</button>
        </div>
       



  </div>
      < br/>
*/}
    </Section>
  );
}

const Section = styled.section`
  // margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
    color : #023371;
    padding-top: 50vh;
  }
  .img{
    margin-left : 0vh;
  }
  
  .container {
    background-color : black;
  }
  
  .text {
    text-align: center;
    margin-bottom: 2rem;
    color : #023371;
    padding-top: 25vh;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    // margin: 0 2rem;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    /* box-shadow: 2px 2px 2px rgb(140, 144, 144); */
    justify-content: center;
    box-sizing: border-box;
    flex-wrap: wrap;
  
    padding:40px;
    gap: 2rem;
    .testimonial {
  
      background-color: #FFFF;
      padding-top : 3vh;
      margin-top : -5vh;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
     
     
         
      .header {
        font-size : 20px;
        margin-top : 2px;
        
        font-weight: bold;
        color : #F43500;
      }
      .heading{
        font-size: 30px;
        color :#ff6900;
      }
      .para{
        font-size: 5px;
        padding-top : 1vh;
        font-family: normal;
        color : black;
      }
      .content {
        font-size : 12px;
        color : #333;
        padding-top : 1vh;
        font-weight : normal;
        width:100%;
        word-spacing:10px;
      }
      .button{
        border-color: orange;
        transition: all 0.4s ease-in;
        background-color : #ff6900;
        margin-top : 2vh;
        color : #FFFF;
        display: inline-block;
        padding: 6px 12px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 300;
        line-height: 1.42857143;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        touch-action: manipulation;
        cursor: pointer;
        user-select: none;
        background-image: none;
        border: 1px solid transparent;
        border-radius: 4px;
      }
      .testimonial{
        width:280px;
        height:280px;
        border-right:1.5px solid rgba(0, 0, 0, 0.314);
        background-color: rgb(208, 223, 223);
        background-color : orange;
        box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.7),-5px -5px 2px rgba(0, 0, 0, 0.7) ;
        transform: rotateY(1.5deg);
        margin:10px;
    }
    .testimonial p{
        padding:15px;
        color:rgb(75, 77, 212);
    }
    .testimonial h2{
        color:#ff6600;
    }
    .testimonials{
        display: flex;
        justify-content: flex-start;
        /* box-shadow: 2px 2px 2px rgb(140, 144, 144); */
        justify-content: center;
        box-sizing: border-box;
        flex-wrap: wrap;
        background-color: rgba(0, 0, 0, 0.9);
        padding:40px;
        
    }
    .link{
        text-decoration: none;
    }
    .link p{
        color:red;
    }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;