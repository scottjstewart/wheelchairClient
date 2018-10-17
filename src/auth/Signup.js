import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  //get user from api
  handleSubmit = event => {
    fetch("http://localhost:3002/users/createuser", {
      method: "POST",
      body: JSON.stringify({ user: this.state }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(response => response.json())
      .then(data => {
        this.props.setToken(data.sessionToken);
      });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <h6>Sign up information</h6>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="firstname">first name</Label>
            <Input
              id="firstname"
              type="text"
              name="firstname"
              placeholder="enter first name here"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastname">last name</Label>
            <Input
              id="lastname"
              type="text"
              name="lastname"
              placeholder="enter last name here"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">email</Label>
            <Input
              id="email"
              type="text"
              name="email"
              placeholder="enter email here"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="su_password"
              type="password"
              name="password"
              placeholder="enter password here"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button type="submit">submit</Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
