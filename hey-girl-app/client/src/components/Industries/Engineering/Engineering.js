import React from 'react';
import Post from './Post';
import EventList from '../ShareComponents/EventList';

export default function Engineering(){
  return(
    <div>
      <h1> Engineering </h1>
      <Post />
      <EventList industryId={4}/>
    </div>
  )
}
