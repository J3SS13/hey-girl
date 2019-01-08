
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
    const events = await getEvents(this.props.industryId);
    this.setState({events})
  }


    // ;
    // await addEvent(industryId, data);
    // await deleteEvent(industryId, eventId);
    // await updateEvent(industryId, eventId, data);


render(){
  return(
    <div>
      Event List
    </div>
  )}
}

export default EventList;
