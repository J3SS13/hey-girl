import React from 'react';
import Events from '../SharedComponents/Events/Events';
import MessageBoard from '../SharedComponents/MessageBoard';

export default function Engineering(){
  return(
    <div>
      <h1> Engineering </h1>
      <Events industryId={10}/>
      <MessageBoard industryId={10}/>
    </div>
  )
}
