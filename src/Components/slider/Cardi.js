import React,{useState} from 'react'
import {Card,Button,Accordion} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default function Cardi(props) {
 const [newcard,setnewcard]=useState(false)
 const [oldcard,setoldcard]=useState(true)
  return (
    <div>
      {oldcard &&
    <Card  id='new' style={{ width: '18rem',height:'280px',position:'realtive',boxShadow:'-2px 2px 5px #ff6600,2px -2px 5px #ff6600',margin:'5px 40px',}}>
 <center><Card.Img variant="top" src={props.data.img} style={{height:'100px',width:'auto',marginTop:'10px',objectFitPosition:'center'}}  /></center> 
  <Card.Body>
    <Card.Title className='text-center' style={{color:'#ff6600'}}>{props.data.title}</Card.Title>
    <Card.Text  style={{color:'#05046f'}}>
      {props.data.description}
    </Card.Text>
    <p style={{position:'absolute',bottom:'0px',left:'10px',color:'blue'}} onClick={()=>{setoldcard(!oldcard);setnewcard(!newcard)}}>know More -></p>
   <Link to={`/${props.data.msg}/${props.data.title}`}><Button variant="primary" style={{position:'absolute',right:'10px',bottom:'10px',fontSize:'medium'}}>Get Started</Button></Link> 
    {/* <p style={{position:'absolute',bottom:'0'}}>know more-&gt;</p> */}
  </Card.Body>
</Card>
}
{ newcard &&
         <Card style={{ width: '18rem',height:'280px',position:'realtive',marginTop:'5px',marginRight:'30px',marginLeft:'20px',overflowY:'scroll',border:'2px solid skyblue' }}>
  <Card.Header>Featured</Card.Header>
  <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion> 
<Button onClick={()=>{setoldcard(!oldcard);setnewcard(!newcard)}} style={{position:'absolute',right:'0'}} varient="primary">back</Button>
         </Card>
}
</div>
  )
}
