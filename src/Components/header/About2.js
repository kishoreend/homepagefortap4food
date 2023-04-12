import React from 'react'

export const About2 = (props) => {
  return (
    <div style={{width:'300px',height:'200px'}}>
        <div className='image'>
           <img src={props.data.image}/>
        </div>
        <div className='title text-center'>
{props.data.title}
        </div>
        <div className='text text-center'>

        {props.data.text
        }        </div>
            </div>
  )
}
