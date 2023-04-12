import React from 'react';
import img from './people.png'

import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      {/* <h1 className="gradient__text">Internship Can Help You Grab Your Dream Job</h1> */}
      <h1 className='head'>It's Our Thing</h1>
      <p className="gradient__content">We provides various internship Skills to provide hands on experience to individuals before starting their career. Internship helps in providing practical knowledge of our subject.We provide internship courses like,Aws,Python,Devops,web development,Wordpress,MicrosoftAzure,Linux,and many more through various interactive video tutorials,project based activities and much more to get train for a job..</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Login</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={img} />
       <p>500+ people requested access a visit in last 24 hours</p>
      </div>
    </div>
    
    <div className="gpt3__header-image">
      <img src='https://www.swisslog.com/-/media/swisslog/images/logistics-warehouse-distribution-automation/customer-service/hexagons_en.jpg?rev=f552f45a35c043368bfd76000c64a6ea&w=1920&hash=2E46F62A7C17AFAA805859276E8ACAF6' />
    </div>
  </div>
);

export default Header;
