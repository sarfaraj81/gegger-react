import React, { useState } from "react";
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBContainer,
  MDBNavbar,
} from "mdb-react-ui-kit";
import { Container, Row, Col } from "react-bootstrap";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import ProjectCard from "./ProjectCard";
function ProjectListing() {
  const btnColor1 = "green";
  const btnColor2 = "yellow";
  const btnColor3 = "red";
  const [status, setStatus] = useState("pending approval");
  const [count, setCount] = useState(4);
  return (
    <>
      <Col xs={12} md={12}>
        <Container>
          <Row>
            <Col xs={12} md={12}>
              <div className="customer">
                <div className="customerContainer">
                  <div className="breadcrumb-n-title">
                    <div className="dashboard-headline">
                      <h3>Manage Projects</h3>
                    </div>
                    <div className="breadcrum-ui-kit">
                      <MDBNavbar expand="lg" light bgColor="dark">
                        <MDBContainer fluid>
                          <MDBBreadcrumb>
                            <MDBBreadcrumbItem>
                              <a href="#">Home</a>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem>
                              <a href="#">Library</a>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem active>
                              <a href="#">Data</a>
                            </MDBBreadcrumbItem>
                          </MDBBreadcrumb>
                        </MDBContainer>
                      </MDBNavbar>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={12} xs={12}>
              <Container className="project-listing-container">
                <Row>
                  <Col md={12} xs={12}>
                    <div className="project-lisitng">
                      <BsFillBookmarkFill />
                      <p>Open Jobs</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <ProjectCard status={status} count={count} />
                </Row>
                <Row>
                  <ProjectCard status="expiring" count={count} />
                </Row>
                <Row>
                  <ProjectCard status="expired" count={count} />
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Col>
    </>
  );
}

export default ProjectListing;
