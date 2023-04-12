import React from 'react'
import Bounce from 'react-reveal/Bounce';
export const Subheadpart = (props) => {
  return (
    <div style={{margin:"2vw 2vw 2vw 4vw",wordSpacing:'3px',fontSize:'20px',color:"#cc7800"}}>
       <Bounce left>
   {props.data}
   </Bounce>
    </div>
  )
}
