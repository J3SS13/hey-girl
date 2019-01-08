import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class LoginForm extends React.Component {
  render() {
    return (
      <Form onSubmit={props.onSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input onChange={props.onChange} value={props.login.email} type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input onChange={props.onChange} value={props.login.password} type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <Button> Submit </Button>
        <Form>
      )
    }
  }
