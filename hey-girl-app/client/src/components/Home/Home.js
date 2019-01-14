import React from 'react';
import Links from '../Nav/Links';
import { Link } from 'react-router-dom';
import Login from '../Industries/SharedComponents/Login/Login';
import './home.css';

// conditionally render choose industry OR login based on loggedin state in app.js
export default function Home(props){

      //
      // {props.industries.map(industry => (
      //   <Link
      //     path= {'/' + industry}
      //     render={((props) => <industry {...props} industry={industry}/> )} />
  return(
    <div id="home-container">
    <h6> "Helping connect women in under represented industries." </h6>

    <div id="link-container">
      <div className="home-links">
      <Link to='/Engineering' className="link"> Engineering </Link>
      </div>

      <div className="home-links">
      <Link to='/Science' className="link" > Science </Link>
      </div>

      <div className="home-links">
      <Link to='/Technology' className="link" > Technology </Link>
      </div>

      <div className="home-links">
      <Link to='/Entertainment' className="link" > Entertainment </Link>
      </div>
    </div>


    ))}

    </div>
  )
}
