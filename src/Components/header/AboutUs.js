import React from 'react'
import { About2 } from './About2'
import certi from './certi.png'
import expi from './expi.png'
export const AboutUs = () => {
    const data=[
        {
            image:{certi},
            title:'easy set up',
            text:'lorem bcjhbec cg c uvv urev v  vuv v nkjbkb  uvv vuffvurevvuf'
        },
        {
            image:{expi},
            title:'top talented',
            text:'lorem bcjhbec cg c uvv urev v  vuv v nkjbkb  uvv vuffvurevvuf'
        },
        {
            image:'',
            title:'scaleable',
            text:'lorem bcjhbec cg c uvv urev v  vuv v nkjbkb  uvv vuffvurevvuf'
        },
        {
            image:'',
            title:'comfortable zone',
            text:'lorem bcjhbec cg c uvv urev v  vuv v nkjbkb  uvv vuffvurevvuf'
        },
        {
            image:'',
            title:'easy set up',
            text:'lorem bcjhbec cg c uvv urev v  vuv v nkjbkb  uvv vuffvurevvuf'
        },
        {
            image:'',
            title:'easy set up',
            text:'lorem bcjhbec cg c uvv urev v  vuv v nkjbkb  uvv vuffvurevvuf'
        }
    ]
  return (
    <div style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap',alignItems:'center',alignContent:'center'}}>
        <About2 data={data[0]}/>
        <About2 data={data[1]}/>
        <About2 data={data[2]}/>
        <About2 data={data[3]}/>
        <About2 data={data[4]}/>
        <About2 data={data[5]}/>
    </div>
  )
}
