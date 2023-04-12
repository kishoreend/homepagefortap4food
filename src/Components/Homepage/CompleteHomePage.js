import React from 'react'
import { Servicelotti } from '../../Servicelotti'
import { Contactinfo } from '../contact/contactinfo'
import Content2 from '../header/Content2'
import Footer2 from '../footer/Footer2'
import About from '../header/About'
import Homepage from './Homepage'
import Content3 from '../header/Content3'
import Newcontact from '../contact/Newcontact'

export const CompleteHomePage = () => {
  return (
    <div className='homecol'>
        <Homepage/>
        {/* <Content3/> */}
        <About/>
        <Newcontact/>
        <Content2/>
        <Contactinfo/>
        <Footer2/>

    </div>
  )
}
