import React from 'react';
import Button from '../Nav/Button';

export default function Home(props){
  return(
    <div>
      <h1> Choose Your Industry </h1>
      <Button industry={'Engineering'} setView={props.setView} />
      <Button industry={'Science'} setView={props.setView} />
      <Button industry={'Technology'} setView={props.setView} />
      <Button industry={'Entertainment'} setView={props.setView} />

    </div>
  )
}
