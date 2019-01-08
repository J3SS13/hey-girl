
import React, { Component } from 'react';


class MessageBoard extends Component {

  constructor(props){
      super(props);
    this.state = {
      posts: []
    }
  }


async componentDidMount(props){
  const events = await getEvents(props.industryId);
  console.log(events);
}
  // ;
  // await addEvent(industryId, data);
  // await deleteEvent(industryId, eventId);
  // await updateEvent(industryId, eventId, data);



render(){
  return(
    <div>
      MessageBoard
    </div>
  )}
}

export default MessageBoard;
// await getEvents(industryId);
// await addEvent(industryId, data);
// await deleteEvent(industryId, eventId);
// await updateEvent(industryId, eventId, data);

// await getPosts(industryId);
// await addPost(industryId, data);
// await deletePost(industryId, postId);
// await updatePost(industryId, postId, data);
