import React from "react";
import { Col, Container, Row, Nav } from "react-bootstrap";
import { MDBContainer } from "mdb-react-ui-kit";
import { BsFillStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
function ServiceCard({
  name,
  title,
  rating,
  location,
  rate,
  successRate,
  verified,
}) {
  return (
    <>
      <Container>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <div className="service-card-horizontal shadow-sm p-2 bg-white rounded">
              <div className="avatar-title-rating-div">
                <Nav.Link eventKey={2} href="#memes">
                  <MDBContainer
                    className="d-flex justify-content-center"
                    style={{ height: "6vh", position: "relative" }}
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      className="rounded-circle"
                      alt="Avatar"
                    />
                    {verified ? (
                      <span className="verification-check-tick">
                        {/* {<BsCheckCircleFill />} */}
                      </span>
                    ) : (
                      <span className="verification-check-tick">
                        {<BsCheckCircleFill />}
                      </span>
                    )}
                  </MDBContainer>
                </Nav.Link>

                {/* title / subtitle div */}
                <div className="title-desc-card">
                  <p>{name}</p>
                  <p>{title}</p>
                  {/* rating div */}
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
                </div>
              </div>

              <div className="information-section-card information-section-card2">
                <Container className="my-4">
                  <Row>
                    <Col md={4}>
                      <p className="bold-p-for-card">Location</p>
                    </Col>
                    <Col md={4}>
                      <p className="bold-p-for-card">Rate</p>
                    </Col>
                    <Col md={4}>
                      <p className="bold-p-for-card">Job Success</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <p className="black-bold-p-for-card">{location}</p>
                    </Col>
                    <Col md={4}>
                      <p className="black-bold-p-for-card">${rate}/hr</p>
                    </Col>
                    <Col md={4}>
                      <p className="black-bold-p-for-card">{successRate}%</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <div className="btn-div-for-card">
                        <Link to="/vendor_detail">
                          <button className="geegr-btn">View Profile</button>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ServiceCard;
