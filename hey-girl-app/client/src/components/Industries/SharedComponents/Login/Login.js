import React, { Component } from 'react';
import { login }from '../../../../components/services/auth';
import LoginForm from './LoginForm';
import './login.css';

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      credentials: {
              email: '',
              password: ''
            }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


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
          <LoginForm handleChange={this.handleChange}
                     handleSubmit={this.handleSubmit}
                     login={this.state.credentials}
                />
        </div>
  )}
}

export default Login;
