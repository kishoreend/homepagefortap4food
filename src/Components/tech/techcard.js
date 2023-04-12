import React from 'react'
import { Link,Routes,Route } from 'react-router-dom'
import InnerPage from './InnnerPage'
import About from './InnnerPage'
import {Aboutcard,Instructor,Overview,} from './InnnerPage'
export default function Techcard(props) {
    const innerinfo={

    }
  return (

      <div> 

            <InnerPage/>
            
            {/* <Route path="/services/about" element={<Aboutcard/>}/>
            <Route path="/services/overview" element={<Overview/>}/>
            <Route path="/services/instructor" element={<Instructor/>}/> */}

        
      </div>


  )
}
  