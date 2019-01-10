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
        <div className="nav-links">
        <Link to='Eng' style={{ textDecoration: 'none', color: 'white'}}> Engineering </Link>
        </div>

        <div className="nav-links">
        <Link to='Science' style={{ textDecoration: 'none', color: 'white'}}> Science </Link>
        </div>

        <div className="nav-links">
        <Link to='Tech' style={{ textDecoration: 'none', color: 'white'}}> Technology </Link>
        </div>

        <div className="nav-links">
        <Link to='Ent' style={{ textDecoration: 'none', color: 'white'}}> Entertainment </Link>
        </div>

        <div className="nav-links">
          <Link to='login' style={{ textDecoration: 'none', color: 'white'}}> Login </Link>
        </div>
      </div>
    </nav>
  )
}
