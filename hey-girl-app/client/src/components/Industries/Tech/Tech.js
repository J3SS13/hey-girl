import React from 'react';
import Post from './Post';
import EventList from '../ShareComponents/EventList';
import MessageBoard from '../ShareComponents/MessageBoard';


export default function Tech(){
  return(
    <div>
      <h1> Tech </h1>
      <Post />
      <EventList industryId={9}/>
      <MessageBoard industryId={9}/>
    </div>
  )
}
