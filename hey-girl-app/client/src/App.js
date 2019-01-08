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
      currentUser: null,
      formData: {
        username: '',
        password: ''
      },
      userView: '',
      loggedIn: false,
      token: null
      // ,
      // credentials: {
      //         email: '',
      //         password: ''
      // }

    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    }


async componentDidMount(){
  const industries = await getIndustries();
  this.setState({industries});
}


  // handleChange(e){
  //   const {name, value} = e.target
  //   this.setState(prevState => (
  //     {
  //       credentials: {
  //         ...prevState.credentials,
  //         [name] : value
  //       }
  //     }
  //     ))
  //   }
  //
  // async handleSubmit(e){
  //     e.preventDefault();
  //     const tokenData = await login(this.state.credentials);
  //     localStorage.setItem('token', tokenData.jwt);
  //   }
  //


  render() {
    return (
    <Router>
      <div className="App">
          <Nav />
              <Route
                exact path="/"
                component={Home}/>
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
                component={Entertainment} />
      </div>
    </Router>
    );
  }
}

export default App;
