
import React, { Component } from 'react';


class MessageBoard extends Component {

  constructor(props){
      super(props);
    this.state = {
      posts: []
    }
  }


async componentDidMount(){
  const events = await getPosts(this.props.industryId);
  this.setState({events})
}


//   async deletePost(industryId, data){
//     await addPost(industryId, data);
//   }
//
//   async updatePost(industryId, eventId, data){
//     await updatePost(industryId, eventId, data);
//   }
//
//   async deletePost(industryId, eventId){
//     await deletePost(industryId, eventId);
//   }

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
