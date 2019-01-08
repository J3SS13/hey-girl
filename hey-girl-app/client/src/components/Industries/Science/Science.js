import React from 'react';
import Post from './Post';
import EventList from '../ShareComponents/EventList';

export default function Science(){
  return(
    <div>
      <h1> Science </h1>
      <Post />
      <EventList industryId={5}/>


    </div>
  )
}
