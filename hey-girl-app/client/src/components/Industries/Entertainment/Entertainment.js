import React from 'react';
import Post from './Post';
import EventList from '../ShareComponents/EventList';

export default function Entertainment(){
  return(
    <div>
      <h1> Entertainment </h1>
      <Post />
      <EventList industryId={6}/>
    </div>
  )
}
