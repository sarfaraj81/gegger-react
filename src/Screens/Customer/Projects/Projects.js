import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Wrapper from "../../../Utlilities/Wrapper";
import Sidebar from "../Components/Sidebar/Sidebar";
import ProjectListing from "./ProjectListing";
const wrapperHeight = "11vh";
function Projects() {
  return (
    <>
      <Wrapper wrapperHeight={wrapperHeight} />
      <Container fluid>
        <Row>
          <Col xs={2} md={2}>
            <Sidebar />
          </Col>
          <Col xs={10} md={10}>
            <ProjectListing />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Projects;
