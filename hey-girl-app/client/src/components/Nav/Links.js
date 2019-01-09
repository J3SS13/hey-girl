import React from 'react';
import { Link } from 'react-router-dom';

export default function Button(props){
  return(
    <ul>
      <li>
        <Link to='Eng'> Engineering </Link>
      </li>
      <li>
        <Link to='Science'> Science </Link>
      </li>
      <li>
        <Link to='Tech'> Technology </Link>
      </li>
      <li>
        <Link to='Ent'> Entertainment </Link>
      </li>
    </ul>
  )
}
