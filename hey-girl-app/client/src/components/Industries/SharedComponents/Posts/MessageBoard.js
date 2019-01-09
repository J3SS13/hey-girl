
import React, { Component } from 'react';
import { getPosts, addPost, updatePost, deletePost } from '../../../../components/services/posts';

class MessageBoard extends Component {

  constructor(props){
      super(props);
    this.state = {
      posts: []
    }
  }


async componentDidMount(){
  const posts = await getPosts(this.props.industryId);
  this.setState({posts})
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
  {this.state.posts.map(post => (
          <div key={post.id}>
          <h4> {post.topic} </h4>
          <button> Delete </button> <button> Edit </button>
          {post.comments.map(comments => (<div> {comments.body} <button> Delete </button> <button> Edit </button> </div>)) }
          </div>
      ))}
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
