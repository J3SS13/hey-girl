
import React, { Component } from 'react';
import { getPosts, addPost, updatePost, deletePost } from '../../../../components/services/posts';
import PostList from './PostList';
import './posts.css';

class MessageBoard extends Component {

  constructor(props){
      super(props);
    this.state = {
      posts: [],
      topic: '',
      body: '',
      view:'',
      key:'',
      selected:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAddPost = this.handleAddPost.bind(this);
    this.handleDeletePost = this.handleDeletePost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount(){
    this.handleGetPosts();
    }

  async handleGetPosts(){
    const posts = await getPosts(this.props.industryId);
    this.setState({posts})
  }

  async handleAddPost(e){
    e.preventDefault();
    const data = {post: this.state}
    await addPost(this.props.industryId, data)
    this.resetForm();
    await this.handleGetPosts();
  }

  //I need to save post selected in state.
  async editPost(post){
    this.setState({
      topic: post.topic,
      body: post.body,
      key: post.id
    })
    this.setViewEdit();
  }

  async handleUpdate(e){
    e.preventDefault();
    const postId = this.state.key
    const data = {post: this.state}
    await updatePost(this.props.industryId, postId, data);
    this.resetForm();
    this.resetView();
    await this.handleGetPosts();
  }


  async handleDeletePost(e){
    await deletePost(this.props.industryId, e.currentTarget.id);
    await this.handleGetPosts();
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
    <PostList posts={this.state.posts}
              handleDeletePost={this.handleDeletePost}
              onEdit={this.state.editPost}/>
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
