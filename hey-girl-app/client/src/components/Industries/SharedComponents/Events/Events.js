
import React, { Component } from 'react';
import { getEvents, addEvent, updateEvent, deleteEvent } from '../../../../components/services/events';
import EventList from './EventList';
import AddEventForm from './AddEventForm';

class Events extends Component {

  constructor(props){
      super(props);
    this.state = {
      events: [],
      industry: '',
        name: '',
        location: '',
        time: '',
        date: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAddEvent = this.handleAddEvent.bind(this);
  }
  async componentDidMount(){
    const allEvents = await getEvents(this.props.industryId);
    const events = allEvents.filter(event => event.industry_id === this.props.industryId);
    this.setState({events})
  }

async handleDelete(industryId, id){
  await deleteEvent(industryId, id);
}

setIndustry(){
  const industry = this.props.industryId;
  this.setState({industry});
}

handleChange(e){
  const { name, value } = e.target
  this.setState({
    [name]: value
  });
}

async handleAddEvent(e){
  e.preventDefault();
  const data = {event: this.state}
  await addEvent(this.props.industryId, data)
}


// async handleUpdate(industryId, eventId, data)
// // async setEvents(){
// //
// }
    // ;
    // await addEvent(industryId, data);
    // await deleteEvent(industryId, eventId);
    // await updateEvent(industryId, eventId, data);


render(){
  return(
    <div>
   <EventList events={this.state.events}/>
   <AddEventForm
          handleAddEvent={this.handleAddEvent}
          handleChange={this.handleChange}
          name={this.state.name}
          location={this.state.location}
          time={this.state.time}
          date={this.state.date}
        />
    </div>
  )}



}

export default Events;
