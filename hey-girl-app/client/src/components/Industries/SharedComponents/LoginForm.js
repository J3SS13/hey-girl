import React from 'react';

export default function LoginForm(props){
  return (
    <form onSubmit={props.handleSubmit}>
        <h2>Login</h2>
        <label>Email</label>
      <input onChange={props.handleChange}
             name="email"
             value={props.login.email}/>
      <label>Password</label>
       <input onChange={props.handleChange}
              name="password"
              value={props.login.password}/>
      <button type="submit">Login</button>
    </form>
  )
}
