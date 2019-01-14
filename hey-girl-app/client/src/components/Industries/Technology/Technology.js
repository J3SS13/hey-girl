import React from 'react';
import Events from '../SharedComponents/Events/Events';
import MessageBoard from '../SharedComponents/Posts/MessageBoard';


export default function Technology(props){
  return(
    <div>
      <h1 className="industry-name"> {props.industry.name} </h1>
      <Events industryId={props.industry.id}/>
    </div>
  )
}
