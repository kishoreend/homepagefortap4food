import React from 'react'
import { Navbar,Nav,Container,Accordion } from 'react-bootstrap'
import About from '../header/About'
import GooglePayButton from '@google-pay/button-react'
import './InnerPage.css'
export default function InnnerPage() {
  return (
    <div>
       <Navbar  variant="dark" fixed="top" style={{height:"30px",backgroundColor:"#000"}} >
    <Container>
    <Navbar.Brand href="#aws">Aws</Navbar.Brand>
    <Nav className="me-auto">
    
    <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#overview">Overview</Nav.Link>
      <Nav.Link href="#instructor">Instructors</Nav.Link>
      <Nav.Link href="#enrollment">Enrollment</Nav.Link>
      <Nav.Link href="#faq">FAQ</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
            <Aws/>
            <Aboutcard/>
            <Overview/>
            <Instructor/>
            <Enrollment/>
            <Faq/>
            <Gpay/>
    </div>
  )
}


export const Aws=()=>{
  return( 
   
   <div className='total' id="aws">
     <div className="half" style={{position:'relative'}}>
       <h2>amazon web services</h2>
       <p>Get ready for computer science. Create graphical programs, learn computing mathematics, develop mental models of computer systems</p>

       <p > <span style={{color:"yellow"}}>&#x2605;&#x2605;&#x2605;&#x2605;</span>&#x2605; 4.0 200+ ratings</p>
       <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT91RA0ZauhA8A-5UOFq9HmoI2rCf3izNsHNg&usqp=CAU" width="40px" height="40px" style={{borderRadius:'50%'}}/> dr Rahul <a href="#instructor">+ 2 more instructors</a></p>

       <p className='btn' >
         <button>Enroll Now</button>
       </p>
       <p>
         81 people were already enrolled
       </p>
       
   </div>
   <div className='imag'>
    {/* <img src="" width="150px" height="150px"/> */}
   </div>
   <p className='bottomnav' style={{position:'absolute',top:'95%'}}>
         included with raviramtech pLus unlimited access to 100+ courses,projects,training,specialization  <a href="http://localhost:3000/">learn more</a>
       </p>
   </div>
  );

}

export const Aboutcard=()=>{
 return(
   <div className='box' id="about">
     <div className='boxing'>
   <div className='heading'>
     What You will learn
   </div>
   <div className='text'>
     <div>
     &#x2794;  Devlop key Knowledge and improving skills
     </div>
     <div>
     &#x2794; practical implementation
     </div>
     <div>
     &#x2794;  training with industry experts
     </div>
     <div>
     &#x2794;  somthing bla bla bla bla
     </div>
   </div>
   </div>
   <div className='skillsgain'>
     <div className='heading'>Skills you gain after learning</div>
     <div className='allskill'>
      <div className='skills'> able to implement</div>
      <div className='skills'>knowledge to do projects</div>
      <div className='skills'>yguifke g</div>
      <div className='skills'> dvawguhfhel</div>
      <div className='skills'> dhvkawgufgiqg</div>
      </div>
    </div>
   {/* <div>
      <div className='heading'>certificate</div>
      <div>get certified with any degree and experience from top it services</div>
      <img src="https://media-exp1.licdn.com/dms/image/C4D22AQEnOa-B65fYQg/feedshare-shrink_800/0/1645192605882?e=2147483647&v=beta&t=KgMcUwU5UZlcL-sQghM8lE36nVG0O5RTVwdxbPNTJcs" width="600px" height="300px"/>
   </div> */}


  <div className='certlang'>
    <div>  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOO67Nm96nmhdABGgBcBYfub1Zm9rdrtNjQ&usqp=CAU" width='30px' height="30px" /> certification</div>
    <div>  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ3cwn1Gt-BxibzDwYQY5aY3KwAPa33o4ZJw&usqp=CAU" width='30px' height="30px" /> For Beginners</div>
    <div>  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUSrvqO78OKQTegcXcF6vkcMcUqT2wXIfedw&usqp=CAU" width='30px' height="30px" />English</div>
    <div>  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIO_Bsek3WrN3_ZJhLIBl6bcigi-9glAagqQ&usqp=CAU" width='30px' height="30px" /> flexible Hours</div>
    <div>  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2K5CunR8nCePdkOIZa_RYhO6jolPCXofIKQ&usqp=CAU" width='30px' height="30px" /> Approximate Duration 4 months <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Five hours/week</div>
  </div>
   </div>
  
 );
}

export const Overview=()=>{
  return(
    <>
    <div className='overview' id="overview">
       <h1>Course content</h1>
   <center>
     <Accordion defaultActiveKey="0" flush style={{color:"#987654"}}>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Python iterators</Accordion.Header>
    <Accordion.Body>
    &#x2794; indrocution to python <br/>
  

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      v
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</center>
</div>
   
    </>
  );
}


export const Instructor=()=>{
  return(
    <>
    <div className='instructor' id="instructor">
      <h3>Instructors</h3>
 <p className='subhead'>software Engineer | data science professional | instructor</p>
    <div  className='image'>
      <div className='text-center'>
        <h4 style={{textAlign:"center",marginLeft:"15px"}}>rahul chatarji</h4>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT91RA0ZauhA8A-5UOFq9HmoI2rCf3izNsHNg&usqp=CAU" />
      </div>
      <div className='icon'>
      <p>
        <span>&#x2605;</span> 4.2 insctuctor rating
      </p>
      <p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb94ZG4EMqsyioCEnqbbn84d0N64GhvpXpGg&usqp=CAU" style={{width:"25px", height:"25px"}} /> 5000+ reviews
      </p>
      <p>
      <span>👨‍🎓</span>20000+ students
      </p>
      <p>
      <span>▶</span>10 courses
      </p>
      </div>
    </div>
    <div className='text'>
      lorem nbbhkbvkbk v  vehkbk kebvk vkjbikdb ewbvewqoio wkbifbe fkbbfolkqlkwnkkkb j cw qweklb vjbi;wbekej;n.v ewb;iwelbdqwblbv we
    </div>
    <p className='subhead'>software Engineer | data science professional | instructor</p>
    <div  className='image'>
      <div className='text-center'>
        <h4 style={{textAlign:"center",marginLeft:"15px"}}>rahul chatarji</h4>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT91RA0ZauhA8A-5UOFq9HmoI2rCf3izNsHNg&usqp=CAU" />
      </div>
      <div className='icon'>
      <p>
        <span>&#x2605;</span> 4.2 insctuctor rating
      </p>
      <p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb94ZG4EMqsyioCEnqbbn84d0N64GhvpXpGg&usqp=CAU" style={{width:"25px", height:"25px"}} /> 5000+ reviews
      </p>
      <p>
      <span>👨‍🎓</span>20000+ students
      </p>
      <p>
      <span>▶</span>10 courses
      </p>
      </div>
    </div>
    <div className='text'>
      lorem nbbhkbvkbk v  vehkbk kebvk vkjbikdb ewbvewqoio wkbifbe fkbbfolkqlkwnkkkb j cw qweklb vjbi;wbekej;n.v ewb;iwelbdqwblbv we
    </div>
    </div>
    </>
  );
}


export const Enrollment=()=>{
  return(
    <>
   <div className='heading'>strat learning from today</div>
   <div className='enrollment'>
   <div className='enroll'>
   <span>&#x2606;</span>Shareable Specialization and Course Certificates <br/>
   <span>&#x2606;</span>Self-Paced Learning Option <br/>
   <span>&#x2606;</span>Course Videos <br/>
   <span>&#x2606;</span>Practice Quizzes<br/>
  
   <span>&#x2606;</span>Graded Quizzes with Feedback<br/>
   <span>&#x2606;</span>Graded Programming Assignments<br/>
   </div>
   <div className='certi'>
     <img src="https://images.template.net/575/Free-HR-Internship-Certificate-Template-sm-1605767775.896-5750.jpeg?width=880" width='400px' height="250px"/>
   </div>
   </div>
   <div className='enrollbtn'>
     <button>Enroll Now</button>
   </div>
   
    </>
  );
}


export const Faq =()=>{
  return(
    <>
    <div className='faqr' id="faq">
      <div className="faqheading">
        How can we help you
       </div>
       <div>
         <input type="text" placeholder="Describe your issue " id="faqinput"></input>
       </div>
       <div className='faqtext'>
         Frequently Asked Questions
         <hr/>
       </div>
    </div>
    </>
  );
}

export const Gpay=()=>{
  return(
    <>
    <GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
/>
    </>
  );
}