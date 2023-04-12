import React from 'react'
import Footer2 from '../footer/Footer2'
import Navbar from '../Homepage/navbar/Navbar'
import './Aws.css'
import upgrade from "./upradeiot.png"
import { Subaws } from './Subaws'
import {Subaws2} from './Subaws2'
import { Subheadpart } from './Subheadpart'
export const Aws = (props) => {
  return (
    <div >

         <Navbar/>
     
        <div className='imageup'>
          <div className='innertext'>
            <h2>{props.data.heading}</h2>
            <p>{props.data.headingpara}</p>
          </div>
         <img src={props.data.image} style={{width:"80vw",height:"80vh"}}/>
        </div>
        <Subheadpart data={props.data.subheadpart}/>
        <Subaws data={props.data.internal.one}/>
        <Subaws2 data={props.data.internal.two}/>
        <Subaws data={props.data.internal.three}/>
        <Subaws2 data={props.data.internal.four}/>
        <Subaws data={props.data.internal.five}/>
        <Subaws2 data={props.data.internal.six}/>


        {/* <div className='object'>
             <h3 style={{width:"100%",textAlign:'center'}}>IoT-Wearable Development</h3>
             <div className='imageflex'>
      
        <div className='innertext2'>
        IoT development that brings out the best by combining IoT and Wearables, and creating extraordinary products.
        </div>
        <div className='image'>
          <img src="https://www.qualitylogic.com/wp-content/uploads/2018/03/wearable-device-testing-wearable-device-concept-1.png"  width="250px" height="200px"/>
        </div>
        </div>
        </div> */}
        {/* <div className='object'>
             <h3 style={{width:"100%",textAlign:'center'}}>IoT Security</h3>
             <div className='imageflex'>
        <div className='image'>
          <img src="https://anarsolutions.com/wp-content/uploads/2018/07/IoT-Security-Testing.png"  width="250px" height="200px"/>
        </div>
        <div className='innertext2'>
        We ensure a robust IoT ecosystem, with the connected data, devices, business applications and communication networks being able to exchange information in a seamless yet secure manner. With us, businesses can be sure that their IoT transition is safe and secure.
        </div>
        </div>
        </div>
        <div className='object'>
             <h3 style={{width:"100%",textAlign:'center'}}>Upgrades and Migration</h3>
             <div className='imageflex'>
      
        <div className='innertext2'>
        We help businesses to enhance their existing systems and resources with upgrades of applications, versions, and technologies, as the need may be. Our extensive IoT solutions take businesses on the growth route as they embrace digital transformation.
        </div>
        <div className='image'>
          <img src="https://jfrog.com/connect/images/6062ee8e308f3a120911414d_Update-iot-devices.png"  width="250px" height="200px"/>
        </div>
        </div>
        </div>
        <div className='object'>
             <h3 style={{width:"100%",textAlign:'center'}}>IoT Testing</h3>
             <div className='imageflex'>
        <div className='image'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJib00TLo3_tbiGIg4i6mtrvXvr2fwU5l_bQ&usqp=CAU"  width="250px" height="200px"/>
        </div>
        <div className='innertext2'>
        We have the best Set of QA engineers that look after the applications and perform both functional as well as non-functional testing.more.
        </div>
        </div>
        </div>
        <div className='object'>
             <h3 style={{width:"100%",textAlign:'center'}}>IoT Consultancy</h3>
             <div className='imageflex'>
      
        <div className='innertext2'>
        We extend expert IoT consulting and insights to help the clients for embracing IoT as a part of their existence. From roadmap creation, to use case preparation, business KPIs, and ROI mapping, we take care of the entire aspects of planning IoT adoption for the business.
        </div>
        <div className='image'>
          <img src="https://microctan.com/wp-content/uploads/2021/04/20611-1024x731.jpg"  width="250px" height="200px"/>
        </div>
        </div>
        </div>
        <div className='object'>
             <h3 style={{width:"100%",textAlign:'center'}}>Implementation & Integration</h3>
             <div className='imageflex'>
        <div className='image'>
          <img src="https://juppiterailabs.com/wp-content/uploads/2021/12/IOT-labs.png"  width="250px" height="200px"/>
        </div>
        <div className='innertext2'>
        We have a team of certified IoT engineers who implement and integrate IoT solutions into your business applications. From sensor integration to BI integration, M2M communication, integration of partner products or platforms, we enable enterprises with comprehensive solutions.We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.
        </div>
        </div>
        </div> */}

        <Footer2/>
    </div>
  )
}
