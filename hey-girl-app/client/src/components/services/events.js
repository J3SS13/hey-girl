import axios from 'axios';

//Get all events for specific Industry
async function getEvents(industryId){
  console.log(industryId)
  const resp = await axios({
    url: `/industries/${industryId}/events`
    });
    console.log(resp);
  return resp.data;
}

//Add event by Industry
async function addEvent(industryId, data){
  const resp = await axios.post(`/industries/${industryId}/events`,
    data, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}} );
}

// Update event by Industry
async function updateEvent(industryId, eventId, data){
  const resp = await axios.put(`/industries/${industryId}/events/${eventId}`,
    data, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}
    );
  console.log(resp);
  return resp.data;
}

//Delete event by Industry
async function deleteEvent(industryId, eventId){
  const resp = await axios.delete(`/industries/${industryId}/events/${eventId}`,
    {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
  return resp.data;
}

export { getEvents, addEvent, updateEvent, deleteEvent }
