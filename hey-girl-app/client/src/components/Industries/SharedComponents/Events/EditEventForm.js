import React from 'react';

export default function EditEventForm(props){
  return(

  <div id="form-comtainer">
    <form onSubmit={props.handleUpdate} id="event-form">
    <h4> Edit Event </h4>
    <label> Name: </label>
      <input type='text'
              name= 'name'
              value={props.name}
              placeholder= "WMN Meetup"
              onChange={props.handleChange} />

      <label> Date: </label>
      <input type='text'
              name= 'date'
              value={props.date}
              placeholder= "Jan 12, 2019"
              onChange={props.handleChange} />

      <label> Time: </label>
      <input type='text'
             name= 'time'
             value={props.time}
             placeholder= "12:00 PM"
             onChange={props.handleChange} />

      <label> Location: </label>
      <input type='text'
              name= 'location'
              value={props.location}
              placeholder= "10 E 21st St. New York, Ny"
              onChange={props.handleChange} />


          <button > Submit </button>
    </form>
  </div>


  )
}
