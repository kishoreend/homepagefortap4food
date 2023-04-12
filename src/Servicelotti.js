import React from 'react'
import Lottie from 'react-lottie';
import servicelottie from './servicelottie.json'
export const Servicelotti = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData:servicelottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div>
        <Lottie options={defaultOptions} height={150} width={300}/>
    </div>
  )
}
