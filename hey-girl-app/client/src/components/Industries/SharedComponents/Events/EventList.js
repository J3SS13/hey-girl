import React from 'react';

export default function EventList(props){
  return(
    <div>
    {props.events.map(event => (
            <div key={event.id}>
            <h2> {event.name} </h2>
            <h4> {event.date} - {event.time} </h4>
            <h5> {event.location} </h5>
            <button> Delete </button> <button> Edit </button>
            </div>
          ))}
    </div>
  )
}
