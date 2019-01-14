import React from 'react';
import Links from './Links';
import { Link } from 'react-router-dom';
import Login from '../Industries/SharedComponents/Login/Login';
import './nav.css';

export default function Nav(props){
  return(
    <nav>
      <div id="nav">

        <div id="logo-icon">

        </div>

        <div className="nav-links">
          <Link to='/' style={{ textDecoration: 'none', color: 'white'}}> Home </Link>
        </div>

        <Links />

        <div className="nav-links">
          <Link to='login' style={{ textDecoration: 'none', color: 'white'}}> Login </Link>
        </div>

      </div>
    </nav>
  )
}
