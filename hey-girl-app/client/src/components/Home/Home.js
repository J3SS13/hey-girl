import React from 'react';
import Links from '../Nav/Links';
import { Link } from 'react-router-dom';
import Login from '../Industries/SharedComponents/Login/Login';
import './home.css';

// conditionally render choose industry OR login based on loggedin state in app.js
export default function Home(props){
  return(
    <div id="home">
    <h6> "Helping connect women in underrepresented industries." </h6>

    <div id="links">
      <div className="home-links">
      <Link to='Eng' className="link"> Engineering </Link>
      </div>

      <div className="home-links">
      <Link to='Science' className="link"> Science </Link>
      </div>

      <div className="home-links">
      <Link to='Tech' className="link"> Technology </Link>
      </div>

      <div className="home-links">
      <Link to='Ent' className="link"> Entertainment </Link>
      </div>
    </div>
    </div>
  )
}
