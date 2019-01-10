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
import Login from './components/Industries/SharedComponents/Login/Login';
class App extends Component {

  constructor(props){
      super(props);
    this.state = {
      industries: [],
      currentUser: null,
      formData: {
        username: '',
        password: ''
      },
      userView: '',
      loggedIn: false,
      token: null

    };

    }



async componentDidMount(){
  const industries = await getIndustries();
  this.setState({industries});
}



  render() {
    return (
    <Router>
      <div className="App">

          <Nav />

          <div id="title-logo"> Hey Girl
          </div>

              <Route
                exact path="/"
                component={Home}/>
              <Route
                path="/login"
                component={Login} />
              <Route
                path="/eng"
                component={Engineering}/>
              <Route
                path="/science"
                component={Science} />
              <Route
                path="/tech"
                component={Tech} />
              <Route
                path="/ent"
                render={((props) => <Entertainment {...props} date={this.state.date}/> )} />
      </div>
    </Router>
    );
  }
}

export default App;
