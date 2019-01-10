import React from 'react';
import { Link } from 'react-router-dom';

export default function Button(props){
  return(
    <ul id="nav">
      <li className="nav-links">
      <Link to='Eng'> Engineering </Link>
      </li>
      <li className="nav-links">
      <Link to='Science'> Science </Link>
      </li>
      <li className="nav-links">
      <Link to='Tech'> Technology </Link>
      </li>
      <li className="nav-links">
      <Link to='Ent'> Entertainment </Link>
      </li>
    </ul>
  )
}
