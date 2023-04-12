import React from 'react'
import Sliding from './Slider'
import { Service } from './Service'
import {Support} from './Support'
import {Training} from './Training'
// import{BrowserRouter,Routes,Route} from 'react-router-dom'
import './tech.css'

export default function Tech() {
   
    const data=[
        {
          id1:{
            img:"https://trainings.internshala.com/cached_uploads/home/images/react.jpg",
            title:'React',
            description:'Master the front-end powerhouse used to build seamless applications',
            duration:'8 weeks'
            },
           id2:{
            img:"https://trainings.internshala.com/cached_uploads/home/images/android.jpg",
           title:'Android App Development',
           description:'Build your desired app',
           duration:'6 Weeks'
           },
        
           id3:{ 
            img:"https://trainings.internshala.com/cached_uploads/home/images/android.jpg",
           title:'Android App Development',
           description:'Build your desired app',
           duration:'4 Weeks'
           },
           id4:{ 
           img:"https://trainings.internshala.com/cached_uploads/home/images/python.jpg",
           title:'Python',
           description:'Build fantasy apps using python',
           duration:'4 Weeks'
           },
           id5:{ 
            img:"https://trainings.internshala.com/cached_uploads/home/images/web-development.jpg",
            title:'Web Development',
            description:'Learn how to create a website from scratch',
            duration:'6 weeks'
           },
           id6:{  img:"https://trainings.internshala.com/cached_uploads/home/images/machine-learning.jpg",
           title:'Machine Learning',
           description:'learn Machine learning From scratch and take the first step towards AI',
           duration:'8 Weeks'
           }

        },
        {
          id1:{
          img:"https://trainings.internshala.com/cached_uploads/home/images/react.jpg",
          title:'React',
          description:'Master the front-end powerhouse used to build seamless applications',
          duration:'8 weeks'
          },
         id2:{
          img:"https://trainings.internshala.com/cached_uploads/home/images/android.jpg",
         title:'Android App Development',
         description:'Build your desired app',
         duration:'6 Weeks'
         },
      
         id3:{ 
          img:"https://trainings.internshala.com/cached_uploads/home/images/android.jpg",
         title:'Android App Development',
         description:'Build your desired app',
         duration:'4 Weeks'
         },
         id4:{ 
         img:"https://trainings.internshala.com/cached_uploads/home/images/python.jpg",
         title:'Python',
         description:'Build fantasy apps using python',
         duration:'4 Weeks'
         },
         id5:{ 
          img:"https://trainings.internshala.com/cached_uploads/home/images/web-development.jpg",
          title:'Web Development',
          description:'Learn how to create a website from scratch',
          duration:'6 weeks'
         },
         id6:{  img:"https://trainings.internshala.com/cached_uploads/home/images/machine-learning.jpg",
         title:'Machine Learning',
         description:'learn Machine learning From scratch and take the first step towards AI',
         duration:'8 Weeks'
         }
        },
        {
          id1:{
            img:"https://trainings.internshala.com/cached_uploads/home/images/react.jpg",
            title:'React',
            description:'Master the front-end powerhouse used to build seamless applications',
            duration:'8 weeks'
            },
           id2:{
            img:"https://trainings.internshala.com/cached_uploads/home/images/android.jpg",
           title:'Android App Development',
           description:'Build your desired app',
           duration:'6 Weeks'
           },
        
           id3:{ 
            img:"https://trainings.internshala.com/cached_uploads/home/images/android.jpg",
           title:'Android App Development',
           description:'Build your desired app',
           duration:'4 Weeks'
           },
           id4:{ 
           img:"https://trainings.internshala.com/cached_uploads/home/images/python.jpg",
           title:'Python',
           description:'Build fantasy apps using python',
           duration:'4 Weeks'
           },
           id5:{ 
            img:"https://trainings.internshala.com/cached_uploads/home/images/web-development.jpg",
            title:'Web Development',
            description:'Learn how to create a website from scratch',
            duration:'6 weeks'
           },
           id6:{  img:"https://trainings.internshala.com/cached_uploads/home/images/machine-learning.jpg",
           title:'Machine Learning',
           description:'learn Machine learning From scratch and take the first step towards AI',
           duration:'8 Weeks'
           }
        }
    ]
    return (
    <div className='tech'>
{/* <BrowserRouter>
<Routes> */}
       <div>
       {/* <Route path="/service" element={<Service data={data[0]} />} /> */}
       <Service />
        </div>
        <div>
      
        <Support />
        </div>
        <div>
        <Training />
        </div>
        {/* </Routes>
        </BrowserRouter> */}
    </div>
  )
}
