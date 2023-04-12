import React from 'react'
import Homepage from './Components/Homepage/Homepage'
import Content from './Components/Content'
import Footer2 from './Components/footer/Footer2' 
import About from './Components/header/About'
import Tech from './Components/slider/Tech'
import './App.css'
import {Contactinfo} from './Components/contact/contactinfo'
import { Service } from './Components/slider/Service'
import { Route,Routes } from 'react-router-dom'
import { Training } from './Components/slider/Training'
import { Support } from './Components/slider/Support'
import { CompleteHomePage } from './Components/Homepage/CompleteHomePage'
// import { About } from './Components/header/About'
// import Techcard from './Components/tech/techcard'
import InnnerPage from './Components/tech/InnnerPage'
import {Aws} from './Components/newinnerpage/Aws'
import { Completeaws } from './Components/newinnerpage/Completeaws'
import Rotate from './Components/Homepage/logo/Rotate'
import { Hex } from './Components/Homepage/logo/Hex'
import { AiOutlineLogin } from 'react-icons/ai'
// import Login from './Components/login/login'
export default function App() {
  return (
    
    <>
     <Routes>
       
    <Route path='/' element={ <CompleteHomePage/>}/>
    {/* <Route path='/login' element={ <Login/>}/> */}
    <Route path='/aboutus' element={ <About/>}/>
    <Route path='/contactus' element={ <Contactinfo/>}/>
    <Route path='/services' element={<Service/>}/>
    <Route path='/solutions' element={<Support/>}/>
    <Route path='/training' element={<Training/>}/>
    {/* <Route path='/services/Web%20Development' element={<Techcard/>}/> */}
    {/* <Route path="/aws" element={<Completeaws/>}/> */}
    <Route path='/rotate' element={<Rotate/>}/>
    <Route path='/hex' element={<Hex/>}/>
    </Routes> 
    <Completeaws/>

    </>
  )
}
