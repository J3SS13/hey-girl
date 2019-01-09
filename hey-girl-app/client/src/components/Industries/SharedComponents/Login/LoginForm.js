import React from 'react';

export default function LoginForm(props){
  return (
    <form onSubmit={props.handleSubmit} className="login-form">
        <h2>Login</h2>
        <label>Email: </label>
      <input onChange={props.handleChange}
             name="email"
             placeholder= "bestemailever@email.com"
             value={props.login.email}/>
      <label>Password: </label>
       <input onChange={props.handleChange}
              name="password"
              placeholder= "b!nHw19m "
              value={props.login.password}/>

      <button type="submit">Login</button>
    </form>
  )
};
