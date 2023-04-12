import React from 'react'
import {Card,Button} from 'react-bootstrap'
export default function Scard(props) {
  return (
    <div>
        <Card style={{ width: '100px',height:'100px',borderRadius:'10px',margin:'19px',transition:'2s'}}>
                <Card.Img variant="top" src={props.data.image} style={{height:'150px',objectFit:'contain'}} />
                <Card.Body>
                <Card.Title style={{fontSize:'medium'}}>{props.data.title}</Card.Title>
                <Card.Text>
                    {props.data.description}
                </Card.Text>
                <Button variant="primary">Click</Button>
                </Card.Body>
        </Card>
    </div>
  )
}
