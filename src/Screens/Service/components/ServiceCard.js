import React from "react";
import { Col, Container, Row, Nav } from "react-bootstrap";
import { MDBContainer } from "mdb-react-ui-kit";
import { BsFillStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import Rating from "../../../Components/rating/Rating";

function ServiceCard({
  name,
  title,
  rating,
  location,
  rate,
  successRate,
  verified,
  id,
  subtitle,
  serviceCharge,
}) {
  return (
    <>
      <Container>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <div className="service-card-horizontal custom-shadow p-2 bg-white rounded">
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
                  <p>{title}</p>
                  <p>{subtitle}</p>
                  {/* rating div */}
                  <div className="rating-div">
                    <span>3.5</span>
                    <div>
                      <Rating rating={3.5} maxRating={5} />
                      {/* <span>
                        {<BsFillStarFill />}
                        {<BsFillStarFill />}
                        {<BsFillStarFill />}
                        {<BsFillStarFill />}
                        {<BsFillStarFill />}
                      </span> */}
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
                      <p className="bold-p-for-card">Service Charge</p>
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
                      <p className="black-bold-p-for-card">{serviceCharge}</p>
                    </Col>
                    <Col md={4}>
                      <p className="black-bold-p-for-card">{successRate}%</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <div className="btn-div-for-card">
                        <Link to={`/vendor_detail/${id}`}>
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
