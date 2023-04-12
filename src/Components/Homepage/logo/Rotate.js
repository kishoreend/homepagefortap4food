import React from 'react'
import { Hex } from './Hex'
import './Rotate.css'
export default function Rotate(props) {
  const heading=[
    { one:'cloud services',
      two:'data services',
      three:'infrastructure service',
      four:'iot service',
      five:'network service',
      six:'web devlopment service',
      center:'services',

    },
    { one:'AWS',
      two:'AZURE',
      three:'CGS',
      four:'SPONSORSHIP',
      five:'ihuw',
      six:'fegr',
      center:'support',

    },
    { one:'IT TRANING',
      two:'IT CERTIFICATION',
      three:'SPONSORED PROJECTS',
      four:'INTERNSHIP',
      five:'experience support',
      six:'job support',
      center:'training',

    },
  ]
  return (
      <div className='rotate'>
    <div className='proton'>
<div className='electron'>
<Hex data={heading[0]}/>
</div>
    </div>
    
    </div>
  )
}
