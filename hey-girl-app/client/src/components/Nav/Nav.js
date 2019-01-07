import React from 'react';
import Button from './Button';
export default function Nav(props){
  return(
    <nav>
      <Button industry={'Home'} setView={props.setView} />
    <Button industry={'Engineering'} setView={props.setView} />
    <Button industry={'Science'} setView={props.setView} />
    <Button industry={'Technology'} setView={props.setView} />
    <Button industry={'Entertainment'} setView={props.setView} />
    </nav>
  )
}
