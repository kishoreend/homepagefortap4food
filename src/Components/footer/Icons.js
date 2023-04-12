import React from 'react'
import Lottie from 'react-lottie';
export const Icons = (props) => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData:props.data,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    
  return (
    <Lottie options={defaultOptions} height={60} width={60}/>
  )
}
