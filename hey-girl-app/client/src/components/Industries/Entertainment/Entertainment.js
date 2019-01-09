import React from 'react';
import Events from '../SharedComponents/Events/Events';
import MessageBoard from '../SharedComponents/Posts/MessageBoard';

export default function Entertainment(){
  return(
    <div>
      <h1> Entertainment </h1>
      <Events industryId={12}/>
      <MessageBoard industryId={12}/>
    </div>
  )
}
