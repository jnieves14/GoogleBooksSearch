import React from "react";
import { Col, Row, Container } from "../components/Grid";
// import Row from "../Grid";
// import Col from "../Grid";
// import Container from "../Grid";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;