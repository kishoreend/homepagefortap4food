
import React,{useState} from 'react'
import './hex.css'
import {Link} from 'react-router-dom'
export const Hex = (props) => {
  const [ne1,setne1]=useState(false)
  const [old1,setold1]=useState(true)
  const [ne2,setne2]=useState(false)
  const [old2,setold2]=useState(true)
  const [ne3,setne3]=useState(false)
  const [old3,setold3]=useState(true)
  const [ne4,setne4]=useState(false)
  const [old4,setold4]=useState(true)
  const [ne5,setne5]=useState(false)
  const [old5,setold5]=useState(true)
  const [ne6,setne6]=useState(false)
  const [old6,setold6]=useState(true)

  return (
<div className='parent'>
  <div>
  <div className='container move3'>
 {old1 &&
<div className='hexagon' onClick={()=>{setold1(!old1);setne1(!ne1)}}>
  <div className='outshape'>
<div className='shape'>
 <p> {props.data.one}</p>
</div>
</div>
</div>
}
{
ne1 &&
 <div className='hexagon' onClick={()=>{setold1(!old1);setne1(!ne1)}} >
<div className='shape' style={{backgroundColor:'#fff'}} >
 <p style={{fontSize:'10px',color:"#ff6600"}}>
   <center><img src="https://trainings.internshala.com/cached_uploads/home/images/web-development.jpg" style={{objectFit:'cover',width:"4em",height:'5em'}}/></center>
 Become a Web Developer</p>
</div>
</div>
} 
{old2 &&
<div className='hexagon' onClick={()=>{setold2(!old2);setne2(!ne2)}}>
<div className='outshape'>
<div className='shape'>
 <p> {props.data.two}</p>
</div>
</div>
</div>
}
{
ne2 &&
 <div className='hexagon' onClick={()=>{setold2(!old2);setne2(!ne2)}} >
<div className='shape' style={{backgroundColor:'#fff'}} >
 <p style={{fontSize:'10px',color:"#ff6600"}}>
   <center><img src="https://trainings.internshala.com/cached_uploads/home/images/web-development.jpg" style={{objectFit:'cover',width:"4em",height:'5em'}}/></center>
 Become a Web Developer</p>
</div>
</div>
}
 </div>
 <div className='container move'>
 {old3 &&
<div className='hexagon' onClick={()=>{setold3(!old3);setne3(!ne3)}}>
<div className='outshape'>
<div className='shape'>
 <p> {props.data.three}</p>
</div>
</div>
</div>
}
{
ne3 &&
 <div className='hexagon' onClick={()=>{setold3(!old3);setne3(!ne3)}} >
  
<div className='shape' style={{backgroundColor:'#fff'}} >
 <p style={{fontSize:'10px',color:"#ff6600"}}>
   <center><img src="https://trainings.internshala.com/cached_uploads/home/images/web-development.jpg" style={{objectFit:'cover',width:"4em",height:'5em'}}/></center>
 Become a Web Developer</p>
</div>
</div>
}
 <Link to={`/${props.data.center}`}>  <div className='hexagon centerHexagon'>
 <div className='Coutshape'>
<div className='shape' style={{ backgroundColor: '#ff9600',color:"#ff6600"}}>
 <p className='center' > {props.data.center}</p>
</div>
</div>
   </div>
   </Link>
   {old4 &&
<div className='hexagon' onClick={()=>{setold4(!old4);setne4(!ne4)}}>
<div className='outshape'>
<div className='shape'>
 <p> {props.data.four}</p>
</div>
</div>
</div>
}
{
ne4 &&
 <div className='hexagon' onClick={()=>{setold4(!old4);setne4(!ne4)}} >
<div className='shape' style={{backgroundColor:'#fff'}} >
 <p style={{fontSize:'10px',color:"#ff6600"}}>
   <center><img src="https://trainings.internshala.com/cached_uploads/home/images/web-development.jpg" style={{objectFit:'cover',width:"4em",height:'5em'}}/></center>
 Become a Web Developer</p>
</div>
</div>
}
 </div>
 <div className='container move2'>
 {old5 &&
<div className='hexagon' onClick={()=>{setold5(!old5);setne5(!ne5)}}>
<div className='outshape'>
<div className='shape'>
 <p> {props.data.five}</p>
</div>
</div>
</div>
}
{
ne5 &&
 <div className='hexagon' onClick={()=>{setold5(!old5);setne5(!ne5)}} >
<div className='shape' style={{backgroundColor:'#fff'}} >
 <p style={{fontSize:'10px',color:"#ff6600"}}>
   <center><img src="https://trainings.internshala.com/cached_uploads/home/images/web-development.jpg" style={{objectFit:'cover',width:"4em",height:'5em'}}/></center>
 Become a Web Developer</p>
</div>
</div>
} 
{old6 &&
<div className='hexagon' onClick={()=>{setold6(!old6);setne6(!ne6)}}>
<div className='outshape'>
<div className='shape'>
 <p> {props.data.six}</p>
</div>
</div>
</div>
}
{
ne6 &&
 <div className='hexagon' onClick={()=>{setold6(!old6);setne6(!ne6)}} >
<div className='shape' style={{backgroundColor:'#fff'}} >
 <p style={{fontSize:'10px',color:"#ff6600"}}>
   <center><img src="https://trainings.internshala.com/cached_uploads/home/images/web-development.jpg" style={{objectFit:'cover',width:"4em",height:'5em'}}/></center>
 Become a Web Developer</p>
</div>
</div>
}
 </div>
 </div>
</div>
  )
}
