import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Wrapper({ wrapperHeight }) {
  return (
    <Container>
      <Row>
        <Col>
          <div
            className="wrapper-div"
            style={{ minHeight: wrapperHeight }}
          ></div>
        </Col>
      </Row>
    </Container>
  );
}

export default Wrapper;
