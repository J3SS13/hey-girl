
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
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
  }



componentDidMount(){
  this.handleGetEvents();
  }

async handleGetEvents(){
  const events = await getEvents(this.props.industryId);
  this.setState({events})
}

async handleAddEvent(e){
  e.preventDefault();
  const data = {event: this.state}
  await addEvent(this.props.industryId, data)
  await this.handleGetEvents();
}

//I need to save event selected in state.
async handleEditEvent(e){
  e.preventDefault();
  const data = {event:this.state}
    await updateEvent(this.props.industryId, this.state.event.id, data);
    await this.handleGetEvents();
}

async handleDeleteEvent(){
  await deleteEvent(this.props.industryId, this.state.event.id);
  await this.handleGetEvents();
}


// setIndustry(){
//   const industry = this.props.industryId;
//   this.setState({industry});
// }

handleChange(e){
  const { name, value } = e.target
  this.setState({
    [name]: value
  });
}



render(){
  return(
    <div>
   <EventList events={this.state.events}
              handleDeleteEvent={this.handleDeleteEvent}
              handleEditEvent={this.handleEditEvent}/>
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
