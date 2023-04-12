import React from 'react'
import Contact from './Contact'
import location from './address2.json'
import email from './email.json'
import phone from './phone2.json'
import clock from './clock.json'
import './contactinfo.css'
import { Contactform } from './contactform'

export  const Contactinfo = () => {
   const info=[
        {
           json:location,
           title:'Address',
           address:'D.No: , Suite 1,Pearl Village, CMC Layout, Kondapur, Hyderabad, Telangana 500072',
           link:"https://www.google.com/maps/place/RAVIRAM+TECH+PVT+LTD/@17.4978031,78.3948598,17z/data=!3m1!4b1!4m5!3m4!1s0x3bcb91e24f9bd51d:0x85dca152865dcc6c!8m2!3d17.4978031!4d78.3970538",
           tag:"reach us"
        },
        {
            json:email,
            title:'Email',
            address:"Email:Endeavourtechnologies@gmail.com Website:www.EndeavourTechnologies.com",
                                                  
            link:"bhavanivusavavarthi@gmail.com",
            tag:'send mail'
        },
        {
        json:phone,
        title:'Phone',
        address:' Mobile NO:+91-6303195147;+91-6303195147',
        link:"tel:+916303195147",
        tag:'call us'
        },
        {
          json:clock,
          title:'Timings',
          address:' 9:00 AM - 5:00 PM',
          link:"tel:+918978936577",
          tag:'call us'
          }
    ]
  return (
    <div className='contact'>
   <center style={{marginBottom:"50px",paddingTop:"100px"}}> <h1 className='headcontact1'>Contact US </h1></center> 
      <div className='comp'>
        <Contact data={info[0]}/>
        <Contact data={info[1]}/>
        <Contact data={info[2]}/>
        <Contact data={info[3]}/>
      </div>
        <Contactform/>
    </div>
  )
}
