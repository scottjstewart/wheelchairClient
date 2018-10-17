import React, { Component } from "react";

class EzRentReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  //get user from api
  handleSubmit = event => {
    fetch("http://localhost:3002/reviews", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }).then(response => response.json());
  };

  componentDidMount() {
    fetch("/reviews")
      .then(res => res.json())
      .then(reviews =>
        this.setState({ reviews }, () =>
          console.log("reviews fetched...", reviews)
        )
      );
  }
  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users =>
        this.setState({ users }, () => console.log("reviews fetched...", users))
      );
  }
  componentDidMount() {
    fetch("/inventories")
      .then(res => res.json())
      .then(inventories =>
        this.setState({ inventories }, () =>
          console.log("reviews fetched...", inventories)
        )
      );
  }
  componentDidMount() {
    fetch("/users/:id")
      .then(res => res.json())
      .then(user =>
        this.setState({ user }, () => console.log("user fetched...", user))
      );
  }
}
