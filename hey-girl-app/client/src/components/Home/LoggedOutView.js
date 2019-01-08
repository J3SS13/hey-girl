import React, { Component } from 'react';
import Auth from './Auth';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      credentials: {
              email: '',
              password: ''
            }
    }
  }

///Will need to ...prevState  more.
  handleChange(e){
    const {name, value} = e.target
    this.setState(prevState => (
      {
        credentials: {
          ...prevState.credentials,
          [name] : value
        }
      }
    ))
  }

  async handleSubmit(e){
      e.preventDefault();
      const tokenData = await login(this.state.credentials);
      localStorage.setItem('token', tokenData.jwt);
    }

  render(){
      return(
        <div>
          <h1> Choose Your Industry </h1>
          <Auth onChange={this.handleChange}  
                onSubmit={this.handleSubmit}
                login={this.state.credentials}
                />
        </div>
  )}
}
