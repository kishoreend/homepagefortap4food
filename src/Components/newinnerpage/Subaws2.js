import React from 'react'
import Zoom from 'react-reveal/Zoom';
export const Subaws2 = (props) => {
  return (
    <div className='object'>
     <h3 style={{width:"100%",textAlign:'center'}}>{props.data.head}</h3>
   
    <div className='imageflex'>

<div className='innertext2'>
  <Zoom>
{props.data.text}
</Zoom>
</div>
<div className='image'>
 <img src={props.data.img}  width="250px" height="200px"/>
</div>
</div>
</div>
   
  )
}
