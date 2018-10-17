import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardDeck,
  Jumbotron,
  Container
} from "reactstrap";
import { Link } from "react-router-dom";

class EzRentIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventories: []
    };
  }
  // product: DataTypes.STRING,
  // price: DataTypes.STRING,
  // quantity: DataTypes.STRING,
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
        <h1>Available Rentals Near You!</h1>
        <p>
          Prices will vary based on the length of rentals! The longer you rent
          the cheaper the rate!
        </p>
        <CardDeck>
          {this.state.inventories.map(inventories => (
            <Card key={inventories.id}>
              <CardImg
                top
                width="100%"
                src="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiU5bLp1YPeAhVhk-AKHfr9B9QQjRx6BAgBEAU&url=http%3A%2F%2Fwww.wcmequipment.com%2Fwheel-chairs%2Fattachment%2Fwheel-chair-logo%2F&psig=AOvVaw1ZTZBcGPUrXaoyWhxyFV7W&ust=1539528769825866"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>{inventories.product}</CardTitle>
                <CardSubtitle>{inventories.price}</CardSubtitle>
                <CardText>{inventories.quantity}</CardText>
                <CardText>{inventories.description}</CardText>
                <Button>
                  <Link to="/shoppingcart">Add to Cart</Link>
                </Button>
              </CardBody>
            </Card>
          ))}
        </CardDeck>
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

export default EzRentIndex;
