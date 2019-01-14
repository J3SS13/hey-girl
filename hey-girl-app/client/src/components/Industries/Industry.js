import React from 'react';
import Events from './SharedComponents/Events/Events';
import MessageBoard from './SharedComponents/Posts/MessageBoard';


export default function Industry(props){
  return(
    <div>
      <h1 className="industry-name"> {props.name} </h1>
      <Events industryId={props.industryId}/>
      <MessageBoard industryId={props.industryId}/>
    </div>
  )
}
