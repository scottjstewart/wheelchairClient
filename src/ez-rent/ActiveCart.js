import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button,
  Jumbotron,
  Container
} from "reactstrap";

class ActiveCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartitems: []
    };
  }

  handleSubmit = cartItem => {
    const id = cartItem.id;
    fetch(`http://localhost:3002/cartitems/${id}`, {
      method: "DELETE",
      body: JSON.stringify(cartItem),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
  };

  componentDidMount() {
    fetch("/cartitems")
      .then(res => res.json())
      .then(cartitems =>
        this.setState({ cartitems }, () =>
          console.log("Inventory fetched...", cartitems)
        )
      );
  }

  render() {
    return (
      <div className="cart">
        <Jumbotron className="jumbotron" fluid>
          <Container fluid>
            <h1 className="display-3">Your Active Cart</h1>
            <p className="lead" />
          </Container>
        </Jumbotron>
        <h1>Active Shopping Cart</h1>
        {this.state.cartitems.map(cartitem => (
          <ListGroup>
            <ListGroupItem key={cartitem.id}>
              <ListGroupItemText>{cartitem.product}</ListGroupItemText>
              <ListGroupItemText>{cartitem.quantity} </ListGroupItemText>
              <ListGroupItemText>{cartitem.price} </ListGroupItemText>
              <Button
                type="submit"
                onClick={event => {
                  const cartItem = {
                    id: cartitem.id,
                    product: cartitem.product,
                    quantity: cartitem.quantity,
                    price: cartitem.price
                  };
                  this.handleSubmit(cartItem);
                  console.log(cartItem);
                }}
              >
                Delete
              </Button>
              <Button>Update</Button>
            </ListGroupItem>
          </ListGroup>
        ))}
        <Jumbotron className="jumbotron" fluid>
          <Container fluid>
            <h1 className="display-3" />
            <p className="lead" />
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default ActiveCart;
