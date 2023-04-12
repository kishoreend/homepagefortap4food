import React from 'react';
import './Newcard.css'

export default function Newcard(props) {
  return (
    <div>
      <div className="fullcard" >
        <div className="image">
          <img src={props.data.img}/>
            </div>
        <div className="content">
                 <h4 className="title">{props.data.title}</h4>
                 <p className="info">{props.data.description}</p>
            </div>
        <div className="footer" >
              <i>Duration:8 weeks</i>
              <i><a href='#'>Know more &gt;</a></i>
            </div>
      </div>
    </div>
  );
}
