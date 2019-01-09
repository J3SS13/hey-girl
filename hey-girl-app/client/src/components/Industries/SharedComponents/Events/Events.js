
import React, { Component } from 'react';
import { getEvents, addEvent, updateEvent, deleteEvent } from '../../../../components/services/events';
import EventList from './EventList';
import AddEventForm from './AddEventForm';
import EditEventForm from './EditEventForm';
import './events.css';

class Events extends Component {

  constructor(props){
      super(props);
    this.state = {
      events: [],
    industry: '',
        name: '',
        location: '',
        time: '',
        date: '',
        view: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
    this.handleEditEvent = this.handleEditEvent.bind(this);
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
  this.resetForm();
  await this.handleGetEvents();
}

//I need to save event selected in state.
async handleEditEvent(e){
  const data = {event: this.state}
    await updateEvent(this.props.industryId, event_id, data);


}

async handleUpdate(e){
  e.preventDefault();

  this.setViewEdit();
  this.resetForm();

  await this.handleGetEvents();
}


async handleDeleteEvent(e){
  await deleteEvent(this.props.industryId, e.currentTarget.id);
  await this.handleGetEvents();
}

handleChange(e){
  const { name, value } = e.target
  this.setState({
    [name]: value
  });
}

resetView(){
  this.setState({view:''})
}

setViewEdit(){
  this.setState({view: 'edit'})
}

resetForm(){
  this.setState({
      name: '',
      location: '',
      time: '',
      date: ''
  })
}


render(){
  return(
    <div id="events">
   <EventList events={this.state.events}
              handleDeleteEvent={this.handleDeleteEvent}
              handleEditEvent={this.handleEditEvent}/>

    { !this.state.view
        ?
      <AddEventForm
               handleAddEvent={this.handleAddEvent}
               handleChange={this.handleChange}
               name={this.state.name}
               location={this.state.location}
               time={this.state.time}
               date={this.state.date}
             />
      :
      <EditEventForm

             handleEditEvent={this.handleEditEvent}
             handleChange={this.handleChange}
             name={this.state.name}
             location={this.state.location}
             time={this.state.time}
             date={this.state.date}
           />
    }




    </div>
  )}



}

export default Events;
