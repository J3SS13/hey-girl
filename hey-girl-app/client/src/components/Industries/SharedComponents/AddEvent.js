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
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      <FormGroup>
               <Label for="exampleDatetime">Datetime</Label>
               <Input
                 type="datetime"
                 name="datetime"
                 id="exampleDatetime"
                 placeholder="datetime placeholder"
               />
             </FormGroup>
             <FormGroup>
               <Label for="exampleDate">Date</Label>
               <Input
                 type="date"
                 name="date"
                 id="exampleDate"
                 placeholder="date placeholder"
               />
             </FormGroup>

    );
  }
}
