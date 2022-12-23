import React, { useState } from "react";
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBContainer,
  MDBNavbar,
} from "mdb-react-ui-kit";
import { Container, Row, Col } from "react-bootstrap";

import { BsListStars } from "react-icons/bs";
import ProposalCard from "./ProposalCard";
function ProposalListing() {
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
                      <h3>Manage Candidates Proposal for Project: Carpenter</h3>
                      <p>
                        Job application for <span>Carpenter</span>
                      </p>
                    </div>
                    <div className="breadcrum-ui-kit">
                      <MDBNavbar expand="lg" light bgColor="dark">
                        <MDBContainer fluid>
                          <MDBBreadcrumb>
                            <MDBBreadcrumbItem>
                              <a href="#">Home</a>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem>
                              <a href="#">Dashboard</a>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem active>
                              <a href="#">Projects</a>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem active>
                              <a href="#">Manage Proposal</a>
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
                      <BsListStars />
                      <p>List of proposal</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <ProposalCard />
                </Row>
                <Row>
                  <ProposalCard />
                </Row>
                <Row>
                  <ProposalCard />
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Col>
    </>
  );
}

export default ProposalListing;
