import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  ButtonGroup
} from "reactstrap";
import { Link } from "react-router-dom";

class SiteBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">EZ rent</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <ButtonGroup>
                  <Button onClick={() => this.props.clickLogout()}>
                    Logout
                  </Button>

                  <Link to="/shoppingcart">
                    <Button>Shopping Cart</Button>
                  </Link>

                  <Link to="/aboutpage">
                    <Button>About</Button>
                  </Link>

                  <Link to="contactpage">
                    <Button>Contact Us</Button>
                  </Link>
                </ButtonGroup>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default SiteBar;
