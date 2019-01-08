import React from 'react';
import Post from './Post';
import EventList from '../ShareComponents/EventList';
import MessageBoard from '../ShareComponents/MessageBoard';

export default function Science(){
  return(
    <div>
      <h1> Science </h1>
      <Post />
      <EventList industryId={11}/>
      <MessageBoard industryId={11}/>


    </div>
  )
}
