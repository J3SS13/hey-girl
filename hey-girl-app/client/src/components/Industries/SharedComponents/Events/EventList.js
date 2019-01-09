import React from 'react';
import ListItem from './ListItem';

export default function EventList(props){
  return(
    <div id="event-list">
    <h2> Events </h2>
    {props.events.map(event => (

        <ListItem
          key={event.id}
          name={event.name}
          id={event.id}
          date={event.date}
          time={event.time}
          location={event.location}
          handleDeleteEvent={props.handleDeleteEvent}
          handleEditEvent={props.handleDeleteEvent}
        />
          ))}
    </div>
  )
}
