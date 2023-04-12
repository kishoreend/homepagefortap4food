import React from 'react'
import { Link } from 'react-router-dom'
import './Newdesign.css'

export default function Newdesign() {
  return (
    <div className='carding'>
        <div className='newcard'>
     <h2>Best interface</h2>
         <p>There,s design,and there's artgood design is total harmony . there's better designer</p>

     <Link to="" className='link'><p>Read more -&gt;</p></Link>
        </div>
        <div className='newcard'>
        <h2>24x7 Support</h2>
         <p>There,s design,and there's artgood design is total harmony . there's better designer</p>

     <Link to="" className='link'><p>Read more -&gt;</p></Link>
        </div>
        <div className='newcard'>
        <h2>Best Design</h2>
         <p>There,s design,and there's artgood design is total harmony . there's better designer</p>

     <Link to="" className='link'><p>Read more -&gt;</p></Link>
        </div>
        <div className='newcard'>
        <h2>Quality Work</h2>
         <p>There,s design,and there's artgood design is total harmony . there's better designer</p>

     <Link to="" className='link'><p>Read more -&gt;</p></Link>
        </div>
    </div>
  )
}