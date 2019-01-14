import React from 'react';

export default function Post(props){
  return(
    <div id={props.id} className="event-item">
      <h3> {props.topic} </h3>
      <h4> {props.body} </h4>
      <button id={props.id} onClick={props.handleDeleteEvent}> Delete </button>
      <button id={props.id} onClick={props.onEdit}> Edit </button>
      {props.post.comments.map(comments => (<div key={comments.id}> {comments.body} <button> Delete </button> <button> Edit </button> </div>)) }
    </div>
  )
}
