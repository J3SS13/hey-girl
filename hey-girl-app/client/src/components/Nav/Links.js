import React from 'react';
import { Link } from 'react-router-dom';

export default function Button(props){
  return(
    <ul>
      <Link to='Eng'> Engineering </Link>
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
