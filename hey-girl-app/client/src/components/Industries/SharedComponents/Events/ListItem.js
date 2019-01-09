import React from 'react';

export default function ListItem(props){
  return(
    <div id={props.id}>
      <h2> {props.name} </h2>
      <h4> {props.date} - {props.time} </h4>
      <h5> {props.location} </h5>
      <button id={props.id} onClick={props.handleDeleteEvent}> Delete Class </button>
      <button id={props.id} onClick={props.onEdit}> Edit </button>
    </div>
  )
}
