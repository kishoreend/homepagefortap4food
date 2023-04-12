import React from 'react'
import cass from './cass.webp'
import dass from './dass.jpg'
import iaas from './iass.webp'
import isass from './isass.jpg'
import nass from './nass.jpg'
import wad from './wad.jpg'
import Scard from './Scard'
import './Services.css'
export default function Services() {
const data=[
    {
       image:iaas,
       title:"IOT AS SERVICE",
       description:""
    },
    {
        image:dass,
        title:"DATA AS SERVICE",
        description:""
     },
     {
        image:isass,
        title:"INFRASTURCTURE AS SERVICE",
        description:""
     },
     {
        image:wad,
        title:"WEB & APP DEVELOPMENT",
        description:""
     },
     {
        image:nass,
        title:"NETWORKING AS SERVICE",
        description:""
     },
     {
        image:cass,
        title:"CLOUD AS SERVICE",
        description:""
     },
]
  return (
    <div className='service'>

            <input type="radio" name="btn" id="radio1"/>
            <input type="radio" name="btn" id="radio2"/>
            <input type="radio" name="btn" id="radio3"/>
            <input type="radio" name="btn" id="radio4"/>
         <div className="first">
        <Scard data={data[0]} className="slide"/>
        </div>
        <div className="first">
        <Scard data={data[1]}  className="slide"/>
        </div>
        <div className="first">
        <Scard data={data[2]}  className="slide"/>
        </div>
        <div className="first">
        <Scard data={data[3]}  className="slide"/>
        </div>
        <div className="first">
        <Scard data={data[4]}  className="slide"/>
        </div>
        <div className="first">
        <Scard data={data[5]}  className="slide"/>
        </div>
        
        <div className='manual'>
           <label htmlFor="radio1" className='mbtn'></label>
           <label htmlFor="radio2" className='mbtn' ></label>
           <label htmlFor="radio3" className='mbtn' ></label>
           <label htmlFor="radio4" className='mbtn' ></label>
       </div>
  
    </div>
  )
}
