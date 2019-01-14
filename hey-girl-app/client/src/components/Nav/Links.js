import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Button(props){
  return(
    <ul id="nav">
      <li className="nav-links">
      <Link to='Engineering' style={{ textDecoration: 'none', color: 'white'}}> Engineering </Link>
      </li>
      <li className="nav-links">
      <Link to='Science' style={{ textDecoration: 'none', color: 'white'}}> Science </Link>
      </li>
      <li className="nav-links">
      <Link to='Technology' style={{ textDecoration: 'none', color: 'white'}}> Technology </Link>
      </li>
      <li className="nav-links">
      <Link to='Entertainment' style={{ textDecoration: 'none', color: 'white'}}> Entertainment </Link>
      </li>
    </ul>
  )
}
