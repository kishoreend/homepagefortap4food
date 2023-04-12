import React from 'react'
import Newcard from './Newcard'

export default function Newservice() {
    const data=[
      {
      img:"https://trainings.internshala.com/cached_uploads/home/images/react.jpg",
      title:'React',
      description:'Master the front-end powerhouse used to build seamless applications'
    },
    {
      img:"https://trainings.internshala.com/cached_uploads/home/images/python.jpg",
      title:'Python',
      description:'Build fantasy apps using python'
    },
    {
      img:"https://trainings.internshala.com/cached_uploads/home/images/web-development.jpg",
      title:'Web Development',
      description:'Learn how to create a website from scratch'
    },
    {
      img:"https://trainings.internshala.com/cached_uploads/home/images/machine-learning.jpg",
      title:'Machine Learning',
      description:'learn Machine learning From scratch and take the first step towards AI'
    },
    {
      img:"https://trainings.internshala.com/cached_uploads/home/images/android.jpg",
      title:'Android App Development',
      description:'Build your desired app'
    },
    {
      img:"https://trainings.internshala.com/cached_uploads/home/images/android.jpg",
      title:'Android App Development',
      description:'Build your desired app'
    },
  ]
  
  return (
    <div className='service'>
    <div style={{padding:"20px 50px",display:"flex",width:'100%',overflow:'hidden'}}>
        <Newcard data={data[0]}/>
        {/* <Newcard data={data[1]}/>
        <Newcard data={data[2]}/>
        <Newcard data={data[3]}/>
        <Newcard data={data[4]}/>
  <Newcard data={data[5]}/> */}
      
    </div>
    </div>
  );
}
