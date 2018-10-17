import React from "react";
import EzRentIndex from "../ez-rent/EzRentIndex";
import EzRentReview from "../ez-rent/EzRentReview";
import { Jumbotron, Container } from "reactstrap";

const Splash = props => {
  return (
    <div>
      <Jumbotron className="jumbotron" fluid>
        <Container fluid>
          <h1 className="display-3">Welcome to EZ Rent Medical</h1>
          <p className="lead">
            The easiest way to rent the medical equipment you need to get
            through your injuries without also injuring your wallet!
          </p>
        </Container>
      </Jumbotron>
      <div>
        <EzRentIndex token={props.sessionToken} />
      </div>
      <div>
        <EzRentReview />
      </div>
    </div>
  );
};

export default Splash;
