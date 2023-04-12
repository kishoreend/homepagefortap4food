import React from 'react'
import {Card} from 'react-bootstrap'
import {BsFillFileEarmarkPlayFill } from "react-icons/bs";

import './Lightcard.css'
const Lightcard=()=>{
    return(

<>
<div></div>
  <Card border="primary" style={{ width: '10rem' }} className="lightcard">

    <Card.Body>
      <Card.Title><BsFillFileEarmarkPlayFill className='icon'/></Card.Title>
      <Card.Text>
        videos
      </Card.Text>
    </Card.Body>
  </Card>
 
        </>



    );
}
export default Lightcard;