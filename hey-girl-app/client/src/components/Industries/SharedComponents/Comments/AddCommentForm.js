import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleSelect">Select Industry</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Technology</option>
            <option>Engineering</option>
            <option>Science</option>
            <option>Entertainment</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">I have had a similar experience... </Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
