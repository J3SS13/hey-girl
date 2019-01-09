import React from 'react';
import Links from '../Nav/Links';
import { Link } from 'react-router-dom';
import Login from '../Industries/SharedComponents/Login/Login';
import './home.css';

// conditionally render choose industry OR login based on loggedin state in app.js
export default function Home(props){
  return(
    <div id="home">
      <h4> Choose Your Industry </h4>
      <Links />
      <Link to='login'> Login </Link>
    </div>
  )
}
