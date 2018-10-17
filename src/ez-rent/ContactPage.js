import React from "react";
import {
  Jumbotron,
  Container,
  Button,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

const ContactPage = props => {
  return (
    <div>
      <Jumbotron id="jumbotronContact" fluid>
        <Container fluid>
          <h1 className="display-3">Would you like to Contact us?</h1>
        </Container>
        <h1>Enter Your Inquiry Here and a Team Member Will get back to you!</h1>
      </Jumbotron>

      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelectMulti" sm={2}>
            How Satisfied were you with our site/services from 1-5?
          </Label>
          <Col sm={10}>
            <Input
              type="select"
              name="selectMulti"
              id="exampleSelectMulti"
              multiple
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Message
          </Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup tag="fieldset" row>
          <legend className="col-form-label col-sm-2">
            Have a problem with something? Let us help!
          </legend>
          <Col sm={10}>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" /> Have a problem with the
                site?
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" /> Have a problem with the
                products?
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" /> Had a problem with
                delivery?
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" /> Had a problem with
                something else?
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="checkbox2" sm={2}>
            Mind if we follow up with your request or issue?
          </Label>
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Check here if we can
                contact you!
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
      <Jumbotron id="jumbotronContact" fluid>
        <Container fluid>
          <h1 id="whitetext">Thanks For Checking us out</h1>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default ContactPage;
