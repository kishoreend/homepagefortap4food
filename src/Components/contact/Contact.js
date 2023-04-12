import React from 'react'
import Lottie from 'react-lottie';
import {Card} from 'react-bootstrap'
export default function Contact(props) {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData:props.data.json,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  return (

   <Card style={{ width: '14rem',height:'240px',borderRadius:'25px',border:'2px solid skyblue',position:'realtive',marginBottom:'10px'}}>
 <Lottie options={defaultOptions} style={{width:'100px',display:'flex',height:'100px'}} /> 
  <Card.Body>
  <p class="card-text adjust" style={{fontSize:'10px'}} >
    {props.data.address}
  </p>
        <a href={props.data.link} class="btn btn-primary adjustbtn"style={{fontSize:'12px',position:'absolute',bottom:'3%',left:'18%',borderRadius:'6px'}} >Click Here To {props.data.tag}</a>
  </Card.Body>
</Card>

    
  );
}
