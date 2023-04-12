import React from 'react'
import {Hex} from './Hex'
import './Hexas.css'


export function Hexas(){

// const images=[
//     { one:i3,
//       two:dataservice,
//       three:infra4,
//       four:iot11,
//       five:networkservice,
//       six:web3,
//       center:'',

//     },
//     { one:i3,
//       two:dataservice,
//       three:infra4,
//       four:iot11,
//       five:networkservice,
//       six:web3,
//       center:'',

//     },
//     { one:i3,
//       two:dataservice,
//       three:infra4,
//       four:iot11,
//       five:networkservice,
//       six:web3,
//       center:'',

//     },
//   ]
const heading=[
    { one:'Pizza',
      two:'Chicken',
      three:'Coco cola',
      four:'Biryani',
      five:'Cream Stone',
      six:'Subway',
      center:'Burger',

    },
    { one:'Pizza',
      two:'Chicken',
      three:'Coco Cola',
      four:'Biryani',
      five:'Cream Stone',
      six:'Subway',
      center:'Burger',

    },
    { one:'Pizza',
      two:'Chicken',
      three:'Coco Cola',
      four:'Biryani',
      five:'Cream Stone',
      six:'Subway',
      center:'Burger',

    },
  ]
  return (
    <div className='hexas'>

<Hex data={heading[0]}/>
<Hex data={heading[1]}/>
<Hex data={heading[2]}/>

    </div>
  )
}



