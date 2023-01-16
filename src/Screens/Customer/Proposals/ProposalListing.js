import React, { useState, useEffect } from "react";
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBContainer,
  MDBNavbar,
} from "mdb-react-ui-kit";
import { Container, Row, Col } from "react-bootstrap";
import { BsListStars } from "react-icons/bs";
import ProposalCard from "./ProposalCard";
import { useSelector } from "react-redux";
import useFetchPost from "../../../Hooks/useFetchPost";
function ProposalListing() {
  const getState = useSelector((state) => state);

  const body = {
    project_id: "6385ee097781a2b73f4797b9",
  };
  const headers = {
    token: getState?.userSignin?.userInfo?.data?.token,
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzYjJhMmVmNjFkYTk4MTMwYTQxZWViNiIsImZpcnN0X25hbWUiOiJjdXN0b21lcm5ldyIsImVtYWlsIjoiY3VzdG9tZXJuZXdAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkM2pHSm93U1NZSUFwMHFDQUNyN1pZT0l1bFlKMFFrSjYvb05GY0FScVZjUXg0a29WRVJkYi4iLCJ0eXBlIjoidXNlciIsImZjbV90b2tlbiI6W10sImRlbGV0ZWQiOmZhbHNlLCJzdGF0dXMiOiJhY3RpdmUiLCJjcmVhdGVkX2F0IjoiMjAyMy0wMS0wMlQwOToyNTowMy42NjNaIiwiX192IjowfSwiaWF0IjoxNjcyODI1NjI1fQ._unC0kHynMwoYqSD_On2PZFRPPGQbYBfcvr6jzG_Lt0",
  };
  const { response, error, isLoading, fetchByPost, data } = useFetchPost(
    process.env.REACT_APP_URL + "customer/proposal/",
    body,
    headers
  );
  useEffect(() => {
    fetchByPost();
  }, [body.project_id]);

  console.log(data, "data at proposals");
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
