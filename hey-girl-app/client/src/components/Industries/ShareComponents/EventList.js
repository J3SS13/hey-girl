
import React, { Component } from 'react';
import { getEvents, addEvent, updateEvent, deleteEvent } from '../../../components/services/events';

class EventList extends Component {

  constructor(props){
      super(props);
    this.state = {
      events: []
    }
  }
  async componentDidMount(){
    const allEvents = await getEvents(this.props.industryId);
    const events = allEvents.filter(event => event.industry_id === this.props.industryId);
    this.setState({events})
  }

async handleDelete(industryId, id){
  await deleteEvent(industryId, id);
}

// async setEvents(){
//
// }
    // ;
    // await addEvent(industryId, data);
    // await deleteEvent(industryId, eventId);
    // await updateEvent(industryId, eventId, data);


render(){
  return(
    <div>
    {this.state.events.map(event => (
            <div key={event.id}>
            <h2> {event.name} </h2>
            <h4> {event.date} - {event.time} </h4>
            <h5> {event.location} </h5>
            <button> Delete </button> <button> Edit </button>
            </div>
          ))}
    </div>
  )}



}

export default EventList;
