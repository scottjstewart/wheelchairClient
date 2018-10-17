import React, { Component } from "react";
import {
  Input,
  Label,
  Button,
  CardDeck,
  Card,
  CardBody,
  CardTitle,
  Container,
  Jumbotron
} from "reactstrap";
import ActiveCart from "../ez-rent/ActiveCart";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventories: []
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = cartItem => {
    fetch("/cartitems", {
      method: "POST",
      body: JSON.stringify(cartItem),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(response => response.json())
      .then(() => {
        window.location = "";
      });
  };

  componentDidMount() {
    fetch("/inventories")
      .then(res => res.json())
      .then(inventories =>
        this.setState({ inventories }, () =>
          console.log("Inventory fetched...", inventories)
        )
      );
  }

  render() {
    return (
      <div className="rental-title">
        <Jumbotron className="jumbotron" fluid>
          <Container fluid>
            <h1 className="display-3">Available Rentals Near You!</h1>
            <p className="lead">
              Prices will vary based on the length of rentals! The longer you
              rent the cheaper the rate!
            </p>
          </Container>
        </Jumbotron>
        <div>
          <CardDeck onSubmit={this.handleSubmit}>
            {this.state.inventories.map(inventories => (
              <Card key={inventories.id}>
                <CardBody>
                  <CardTitle>
                    <Label
                      for="product"
                      id="product"
                      type="text"
                      name="product"
                      value={inventories.product}
                    />
                    {inventories.product}
                  </CardTitle>
                  <Label for="quantity">How many you want dude/dudette</Label>
                  <Input
                    id="quantity"
                    type="text"
                    name="quantity"
                    placeholder="enter desired quantity here"
                    onChange={this.handleChange}
                  />
                  <CardTitle>
                    <Label
                      for="price"
                      id="price"
                      type="text"
                      name="price"
                      value={inventories.price}
                    />
                    {inventories.price}
                  </CardTitle>
                  <Button
                    type="submit"
                    onClick={event => {
                      const cartItem = {
                        product: inventories.product,
                        quantity: this.state.quantity,
                        price: inventories.price
                      };
                      this.handleSubmit(cartItem);
                      console.log(cartItem);
                    }}
                  >
                    Add to cart
                  </Button>
                </CardBody>
              </Card>
            ))}
          </CardDeck>
          <ActiveCart />
        </div>
      </div>
    );
  }
}
export default ShoppingCart;
