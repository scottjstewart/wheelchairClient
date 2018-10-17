import React from "react";
import {
  Jumbotron,
  Container,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody
} from "reactstrap";

const AboutPage = props => {
  return (
    <div>
      <Jumbotron id="jumbotronAbout" fluid>
        <Container fluid>
          <h1 id="whitetext" className="display-3">
            About Us
          </h1>
          <p id="whitetext" className="lead">
            EZ Rent Medical was founded by Scott Stewart in Indianapolis
            Indiana. Scott spent most of his life helping others in their own
            lives, through coaching, volunteer work, local artist management,
            and through life coaching. After a life altering motorcycle
            accident, our founder, experienced how difficult and expensive it
            can be to find and rent medical supplies. Since this incident Scott
            has dedicated his time to the pursiuit of knowledge in an attempt to
            create a one stop shop for anyone enduring medical Hardships. Our
            mission is to give everyone a fair chance at recovey.
          </p>
        </Container>
        <h1 id="whitetext">Our Team!</h1>
      </Jumbotron>
      <CardGroup>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Team Member 1</CardTitle>
            <CardSubtitle>Team Members Job</CardSubtitle>
            <CardText>Team Member Bio</CardText>
            <Button>Link to Team Members Portfolio</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Team Member 2</CardTitle>
            <CardSubtitle>Team Members Job</CardSubtitle>
            <CardText>Team Member Bio</CardText>
            <Button>Link to Team Members Portfolio</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Team Member 3</CardTitle>
            <CardSubtitle>Team Members Job</CardSubtitle>
            <CardText>Team Member Bio</CardText>
            <Button>Link to Team Members Portfolio</Button>
          </CardBody>
        </Card>
      </CardGroup>
      <Jumbotron id="jumbotronAbout" fluid>
        <Container fluid>
          <h1 id="whitetext">Thanks For Checking us out</h1>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default AboutPage;
