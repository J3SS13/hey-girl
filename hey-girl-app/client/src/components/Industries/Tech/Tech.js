import React from 'react';
import Events from '../SharedComponents/Events/Events';
import MessageBoard from '../SharedComponents/MessageBoard';


export default function Tech(){
  return(
    <div>
      <h1> Tech </h1>
      <Events industryId={9}/>
      <MessageBoard industryId={9}/>
    </div>
  )
}
