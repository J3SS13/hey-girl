import React from 'react';
import Post from './Post';
import EventList from '../ShareComponents/EventList';
import MessageBoard from '../ShareComponents/MessageBoard';

export default function Engineering(){
  return(
    <div>
      <h1> Engineering </h1>
      <EventList industryId={10}/>
      <MessageBoard industryId={10}/>
    </div>
  )
}
