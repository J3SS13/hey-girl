import React from 'react';
import Events from '../SharedComponents/Events/Events';
import MessageBoard from '../SharedComponents/MessageBoard';

export default function Science(){
  return(
    <div>
      <h1> Science </h1>
      <Events industryId={11}/>
      <MessageBoard industryId={11}/>


    </div>
  )
}
