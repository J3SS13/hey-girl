import React from 'react';
import ListItem from './ListItem';

export default function EventList(props){
  return(
    <div>
    {props.events.map(event => (

        <ListItem
          key={event.id}
          name={event.name}
          id={event.id}
          date={event.date}
          time={event.time}
          location={event.location}
          handleDeleteEvent={props.handleDeleteEvent}
        />
          ))}
    </div>
  )
}
