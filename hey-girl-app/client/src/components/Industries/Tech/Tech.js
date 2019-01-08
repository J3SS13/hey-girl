import React from 'react';
import Post from './Post';
import EventList from '../ShareComponents/EventList';


export default function Tech(){
  return(
    <div>
      <h1> Tech </h1>
      <Post />
      <EventList industryId={3}/>
    </div>
  )
}
