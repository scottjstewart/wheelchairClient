import React, { Component } from "react";
import {
  Input,
  Label,
  Form,
  FormGroup,
  Button,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

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

  render() {
    return (
      <div>
        <h1>Have something to say? Post a review!</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="text"
              name="email"
              placeholder="enter email here"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="comment">Review</Label>
            <Input
              id="comment"
              type="text"
              name="comment"
              placeholder="enter comment here"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button type="submit">submit</Button>
        </Form>
        <div>
          <h3>Reviews</h3>
          {this.state.reviews.map(review => (
            <ListGroup>
              <ListGroupItem key={review.id}>
                <ListGroupItemHeading>{review.email}</ListGroupItemHeading>
                <ListGroupItemText>{review.comment} </ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
          ))}
        </div>
      </div>
    );
  }
}

export default EzRentReview;
