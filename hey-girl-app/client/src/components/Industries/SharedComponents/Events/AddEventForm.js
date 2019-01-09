import React from 'react';

export default function AddEventForm(props){
  return(
    <form onSubmit={props.handleAddEvent}>

      <input type='text'
              name= 'name'
              value={props.name}
              onChange={props.handleChange} />

              <input type='text'
                      name= 'location'
                      value={props.location}
                      onChange={props.handleChange} />

              <input type='text'
                      name= 'time'
                      value={props.time}
                      onChange={props.handleChange} />

                <input type='text'
                        name= 'date'
                        value={props.date}
                        onChange={props.handleChange} />
          <button> Submit </button>
    </form>



  )
}
