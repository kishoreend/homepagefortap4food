import React from 'react';
import Jello from 'react-reveal/Jello';
import { Hex } from './Hex';

class Spiny extends React.Component {
  
   heading=[
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
  render() {
    return (
      <div>
        <Jello>
          <Hex data={this.heading[0]}/>
        </Jello>
      </div>
    );
  }
}

export default Spiny;