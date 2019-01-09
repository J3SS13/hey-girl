import React from 'react';
import Links from './Links';
import { Link } from 'react-router-dom';
import Login from '../Industries/SharedComponents/Login/Login';
import './nav.css';

export default function Nav(props){
  return(
    <nav>
    <Links />
    <ul>
      <li>
      <Link to='/'> Home </Link>
      <Link to='login'> Login </Link>
      </li>
    </ul>
    </nav>
  )
}
