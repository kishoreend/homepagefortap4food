import React, { useState } from 'react';
import {Navbar,Nav,Container,NavDropdown,Form,FormControl,Button,toggleMenu,setToggleMenu} from 'react-bootstrap'
import './navbar.css';
import logo from './logo.jpg'
import { Training } from '../../slider/Training';
import { Height } from '@mui/icons-material';

const Navbarrr = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='style'>
      {/* <img src="https://merchant.tap4food.com/merchant/static/media/logo.b73fb1c0.png" style={{height:'70px',width:'70px',position:"absolute"}}/>&nbsp; */}
    <Navbar className='navback' variant='dark'  expand="lg">
    <Container fluid>
      
   
      <Navbar.Brand href="#"  style={{fontFamily:'Arial',fontWeight:'bold',color:'#FFFFFF',fontSize:"30px",fontFamily:'Sans Serif',fontStyle:"oblique",marginLeft:'13vh'}}>Tap4Food</Navbar.Brand>
      <img src="https://merchant.tap4food.com/merchant/static/media/logo.b73fb1c0.png" style={{height:'70px',width:'70px',position:"absolute"}}/>&nbsp;
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/"  style={{fontFamily:'tarjenpro',fontSize:'20px',color:'#fff',marginLeft:'120vh',marginTop:"2vh"}}>Home</Nav.Link>&nbsp;
          <Nav.Link href="/aboutus"  style={{fontFamily:'tarjenpro',fontSize:'20px',color:'#fff',marginTop:"2vh"}}>About</Nav.Link>&nbsp;
          <Nav.Link href="/contactus"  style={{fontFamily:'tarjenpro',fontSize:'20px',color:'#fff',marginTop:"2vh"}}>Contact</Nav.Link>&nbsp;
          {/* <NavDropdown title="Courses " id="navbarScrollingDropdown"  style={{fontFamily:'tarjenpro',fontSize:'30px',color:'#fff',marginLeft:"20px"}}>
            <NavDropdown.Item href="/services" className='color'>Tap4Food</NavDropdown.Item>
            <NavDropdown.Item href="/solutions" className='color'>Tap4Food</NavDropdown.Item>
            <NavDropdown.Item href="/training" className='color'>Tap4Food</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5" className='color'>
              Others
            </NavDropdown.Item>
          </NavDropdown> */}
          {/* <Nav.Link href="/contactus"  style={{fontFamily:'tarjenpro',fontSize:'20px',color:'#fff'}}>Contact</Nav.Link> */}
        </Nav>
        {/* <Form className="d-flex"> */}
        {/* <center><a class="fas fa-user-circle fa-4x" href="/login" style={{color:"#ff6600",display:"inline-block",marginRight:"15px",marginLeft:"15px",textAlign:"center",textDecoration:"none"}}></a></center> */}
        {/* </Form> */}
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  );
};

export default Navbarrr;
