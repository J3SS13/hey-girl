import React from 'react';
import Links from '../Nav/Links';
import Login from '../Industries/SharedComponents/Login/Login';

// conditionally render choose industry OR login based on loggedin state in app.js
export default function Home(props){
  return(
    <div>
      <h1> Choose Your Industry </h1>
      <Links />
      <Login />
    </div>
  )
}
