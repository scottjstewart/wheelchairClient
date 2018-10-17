import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    fetch("http://localhost:3002/users/login", {
      method: "POST",
      body: JSON.stringify({ user: this.state }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token
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
        <h1>Login</h1>
        <h6>Login information here</h6>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">email</Label>
            <Input
              id="li_email"
              type="text"
              name="email"
              placeholder="enter email"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="li_password"
              type="password"
              name="password"
              placeholder="insert your password"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Login;
