import React from 'react';

export default function Newcard(props) {
  return (
    <div>
      <div className="fullcard" style={{width:'270px',height:'270px',border:'2px solid gray',padding:'5px',boxShadow:'4px -4px 4px gray,-4px 0px 4px gray',margin:'40px',position:'relative'}}>
        <div className="image">
          <img src={props.data.img} width="250px" height="100px"/>
            </div>
        <div className="content" style={{textAlign:'center'}}>
                 <h4 className="title">{props.data.title}</h4>
                 <p className="info">{props.data.description}</p>
            </div>
        <div className="footer" style={{position:'absolute',left:"0",bottom:'0',margin:'8px'}}>
              <i>Duration:8 weeks</i>
              <i style={{marginLeft:'20px'}}><a href='#'>Know more &gt;</a></i>
            </div>
      </div>
    </div>
  );
}
