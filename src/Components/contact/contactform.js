
import React,{useState}from 'react'
import Lottie from 'react-lottie';
import {FloatingLabel,Form,Button} from 'react-bootstrap'
import get from './get.json'
import clottie from './clottie.json'
import contact from './about2f.json'
export const Contactform = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData:contact,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const [query,setquery]=useState(false)
     const [info,setinfo]=useState({
      email:"",
      username:"",
      ph:"",
      comments:""
     })
     var {email,username,ph,comments}=info;
     const changeH=(e)=>{
          setinfo({...info ,[e.target.name]:e.target.value});
     }
     
     const subH=(e)=>{
      e.preventDefault()
  
      console.log(email,username,ph,comments,"25rllo")
 }
    
     
  return (
      
     <div>
      
        {/* <Lottie options={defaultOptions} style={{height:'120px'}} className='lottie'/>  */}
        <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",marginTop:"80px"}}>
        <Lottie options={defaultOptions} height={450} width={450}style={{width:"40vw",marginLeft:"-0px"}}/>
    <Form style={{height:"500px",width:"55vw"}} onSubmit={subH}>
    <div style={{marginLeft:"60px",marginTop:"20px",marginBottom:"20px",fontSize:"5px"}}><h1>GET IN TOUCH</h1></div> 
   <FloatingLabel
   controlId="floatingInput"
    label="Email address"
   className="mb-4"
 >
    <Form.Control type="email" placeholder="name@example.com" style={{ paddingTop:'-4vh',height: '40px',width:'480px' }}className="mb-4" name="email" onChange={changeH} value={email}/>
  </FloatingLabel>
 <FloatingLabel controlId="floatingText" label="UserName">
   <Form.Control type="text" placeholder="Username"style={{ height: '40px',width:'480px' }}className="mb-4" name="username" onChange={changeH} value={username}/>
 </FloatingLabel>
 <FloatingLabel controlId="floatingText" label="PhoneNumber">
   <Form.Control type="text" placeholder="Mobile number" style={{ height: '40px',width:'480px' }} className="mb-4" name="ph" onChange={changeH} value={ph}/>
  </FloatingLabel>  
  <FloatingLabel controlId="floatingTextarea2" label="Comments">
   <Form.Control
     as="textarea"
     placeholder="Leave a comment here"
     style={{ height: '100px',width:'480px' }}
      className="mb-4"
      name="comments" onChange={changeH} value={comments}
   />
 </FloatingLabel>
 <center><Button variant="success" type="submit" onClick={()=>{setquery(!query)}}
  href= {` mailto:bhavanivusavarthi@gmail.com?subject=${username}&body=PhoneNumber:${ph}
  Message:${comments}`} >
   Submit
 </Button></center> 
 {
   query &&
    <p onClick={()=>setquery(!query)} style={{border:'2px solid orangered',padding:'5px',backgroundColor:'red',color:'orangered',marginLeft:'20vh'}}>your query is successfully submitted</p>
 }
 </Form>
 </div>

 </div>
 )
}
