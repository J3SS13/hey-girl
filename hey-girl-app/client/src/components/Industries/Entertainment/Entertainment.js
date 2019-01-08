import React from 'react';
import Post from './Post';
import EventList from '../ShareComponents/EventList';
import MessageBoard from '../ShareComponents/MessageBoard';

export default function Entertainment(){
  return(
    <div>
      <h1> Entertainment </h1>
      <Post />
      <EventList industryId={12}/>
      <MessageBoard industryId={12}/>
    </div>
  )
}
