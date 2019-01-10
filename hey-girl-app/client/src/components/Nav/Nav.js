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
        <Link to='/'> Home </Link>
      </div>
        <div className="nav-links">
        <Link to='Eng'> Engineering </Link>
        </div>

        <div className="nav-links">
        <Link to='Science'> Science </Link>
        </div>

        <div className="nav-links">
        <Link to='Tech'> Technology </Link>
        </div>

        <div className="nav-links">
        <Link to='Ent'> Entertainment </Link>
        </div>

        <div className="nav-links">
          <Link to='login'> Login </Link>
        </div>
      </div>
    </nav>
  )
}
