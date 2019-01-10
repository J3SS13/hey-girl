import React from 'react';
import Events from '../SharedComponents/Events/Events';
import MessageBoard from '../SharedComponents/Posts/MessageBoard';

export default function Entertainment(){
  return(
    <div>
      <h1 className="industry-name"> Entertainment </h1>
      <Events industryId={4}/>
    </div>
  )
}
