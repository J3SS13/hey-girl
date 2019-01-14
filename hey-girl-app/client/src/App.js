import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { getIndustries } from './components/services/industries';

import Engineering from './components/Industries/Engineering/Engineering';
import Entertainment from './components/Industries/Entertainment/Entertainment';
import Science from './components/Industries/Science/Science';
import Technology from './components/Industries/Technology/Technology';
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

          <div id="title-logo"> Hey Girl </div>

          <Route
            exact path="/"
            render={((props) => <Home {...props} industries={this.state.industries}/> )}
            />

            <Route
              path="/login"
              component={Login} />

          {this.state.industries.map(industry => (
            <Route
              path= {'/' + industry}
              render={((props) => <industry {...props} key={industry.id} industry={industry} industries={this.state.industries}/> )} />
          ))}

      </div>
    </Router>
    );
  }
}

export default App;
