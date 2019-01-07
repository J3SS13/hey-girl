import React from 'react';
import Links from './Links';
import { Link } from 'react-router-dom';

export default function Nav(props){
  return(
    <nav>
    <ul>
      <li>
      <Link to='/'> Home </Link>
      </li>
    </ul>
      <Links />
    </nav>
  )
}
