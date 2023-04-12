import React, { useState } from 'react';
import {Navbar,Nav,Container,NavDropdown,Form,FormControl,Button,toggleMenu,setToggleMenu} from 'react-bootstrap'
import './navbar.css';
import logo from './logo.jpg'
import { Link } from 'react-router-dom';

const Navbarrr = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">Tap4food</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ height: '900vh',width : '500px' }}
          navbarScroll
        >
          <Link to='/'>Home</Link>
          <Nav.Link href="aboutus">About</Nav.Link>
          {/* <NavDropdown title="Courses" id="navbarScrollingDropdown">
            <NavDropdown.Item href="services">Service</NavDropdown.Item>
            <NavDropdown.Item href="solution">Solution</NavDropdown.Item>
            <NavDropdown.Item href="training">Training</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Others
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        {/* <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Navbarrr;
