import React from 'react';
import Events from '../SharedComponents/Events/Events';
import MessageBoard from '../SharedComponents/Posts/MessageBoard';

export default function Engineering(){
  return(
    <div>
      <h1 className="industry-name"> Engineering </h1>
      <Events industryId={2}/>
    </div>
  )
}
