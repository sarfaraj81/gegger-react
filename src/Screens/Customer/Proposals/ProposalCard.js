import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";

function ProposalCard({ status, count }) {
  let btnColor = "";
  let textColor = "";
  if (status === "pending approval") {
    btnColor = "#E0F5D7";
    textColor = "#449625";
  } else if (status === "expiring") {
    btnColor = "#FBF6DD";
    textColor = "#A18D28";
  } else if (status === "expired") {
    btnColor = "#FFE6E6";
    textColor = "#EA5454";
  } else {
    btnColor = "#449625";
    textColor = "#E0F5D7";
  }
  return (
    <div className="project-dashboard-card">
      <Container fluid>
        <Row>
          <Col md={2} xs={2}>
            <Nav.Link eventKey={2} href="#memes">
              <MDBContainer
                className="d-flex justify-content-center"
                style={{
                  height: "7vh",
                  position: "relative",
                  //   border: "1px solid black",
                }}
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  alt="Avatar"
                />

                <span className="verification-check-tick">
                  {<BsCheckCircleFill />}
                </span>
              </MDBContainer>
            </Nav.Link>
          </Col>
          <Col md={10} xs={10}>
            <Container>
              <Row>
                <Col md={12} xs={12}>
                  <div className="proposal-card-title">
                    <p>
                      Sindy Forest <span>flag</span>
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={3} md={3}>
                  <div className="icon-with-p">
                    <BsEnvelopeFill />
                    <p> sindy@example.com</p>
                  </div>
                </Col>
                <Col xs={6} md={6}>
                  <div className="icon-with-p">
                    <BsFillTelephoneFill />
                    <p>(+622)-122-3434</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <div className="rating-div">
                  <span>5.0</span>
                  <div>
                    <span>
                      {<BsFillStarFill />}
                      {<BsFillStarFill />}
                      {<BsFillStarFill />}
                      {<BsFillStarFill />}
                      {<BsFillStarFill />}
                    </span>
                  </div>
                </div>
              </Row>
              <Row>
                <div className="button-group-proposal">
                  <button className="view-profile">
                    <span>
                      <BsPeople />
                    </span>
                    View Profile
                  </button>
                  <button className="send-message">
                    <span>
                      <BsEnvelope />
                    </span>
                    Send Message
                  </button>
                  <button className="delete">
                    <BsTrash />
                  </button>
                </div>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProposalCard;
