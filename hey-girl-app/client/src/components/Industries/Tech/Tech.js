import React from 'react';
import Events from '../SharedComponents/Events/Events';
import MessageBoard from '../SharedComponents/Posts/MessageBoard';


export default function Tech(){
  return(
    <div>
      <h1 className="industry-name"> Technology </h1>
      <Events industryId={1}/>
    </div>
  )
}
