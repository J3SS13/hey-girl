import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { getIndustries } from './components/services/industries';
import { getPosts, addPost, updatePost, deletePost } from './components/services/posts';
import { getEvents, addEvent, updateEvent, deleteEvent } from './components/services/events'

import Engineering from './components/Industries/Engineering/Engineering';
import Entertainment from './components/Industries/Entertainment/Entertainment';
import Science from './components/Industries/Science/Science';
import Tech from './components/Industries/Tech/Tech';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';

class App extends Component {

  constructor(props){
      super(props);
    this.state = {
      industries: [],
      posts: []
    }
  }

async componentDidMount(){
  const industries = await getIndustries();
  this.setState({industries});
}
  /// ----> move this into: components/Industries/ShareComponents/MessageBoard.js

// async getIndustries()
//
//   async setEvents(industryId){
//     await getEvents(industryId);
//   }
//
//   async deleteEvent(industryId, data){
//     await addEvent(industryId, data);
//   }
//
//   async updateEvent(industryId, eventId, data){
//     await updateEvent(industryId, eventId, data);
//   }
//
//   async deleteEvent(industryId, eventId){
//     await deleteEvent(industryId, eventId);
//   }
//
//   async getPosts(industryId){
//     await getPosts(industryId);
//   }
//
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





  render() {
    return (
    <Router>
      <div className="App">
        <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/eng" component={Engineering}/>
          <Route path="/science" component={Science} />
          <Route path="/tech" component={Tech} />
          <Route path="/ent" component={Entertainment} />
      </div>
    </Router>
    );
  }
}

export default App;
