import React from 'react'
import aws from './aws.jpg' 
import daas from './daas.png' 
import iaas from './iaas.png' 
import iot from './iot.jpg' 
// import cloud from './cloud.jpg' 
import './Cardpac.css'
import {Card,Button} from 'react-bootstrap'
export default function Cardpac() {
  return (
    <div className="wrap">
    <div className='container'>
        <div className='button'>
            <input type="radio" name="btn" id="radio1"/>
            <input type="radio" name="btn" id="radio2"/>
            <input type="radio" name="btn" id="radio3"/>
            <input type="radio" name="btn" id="radio4"/>
        
    
        <div className='img first'>
            <Card style={{ width: '300px' }}>
      <Card.Img variant="top" src={aws} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
          </Card>
        </div>
        <div className='img'>
              <Card style={{ width: '300px' }}>
        <Card.Img variant="top" src={iaas} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
             </Card>
        </div>
        <div className='img'>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={daas} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
        <div className='img'>
        <Card style={{ width: '300px' }}>
  <Card.Img variant="top" src={iot} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>
    

       <div className='auto'>
           <div className='btn1'></div>
           <div className='btn2'></div>
           <div className='btn3'></div>
           <div className='btn4'></div>
           <div className='btn5'></div>
       </div>

       <div className='manual'>
           <label htmlFor="radio1" className='mbtn'></label>
           <label htmlFor="radio2" className='mbtn'></label>
           <label htmlFor="radio3" className='mbtn'></label>
           <label htmlFor="radio4" className='mbtn'></label>
       </div>



    </div>
    </div>
    
    </div>
  )
}
