import React from "react";
import { Col, Container, Row, Nav } from "react-bootstrap";
import { MDBContainer } from "mdb-react-ui-kit";
import { BsFillStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsFillPinMapFill } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import { BsFillWalletFill } from "react-icons/bs";
import { BsClockHistory } from "react-icons/bs";
import { Link } from "react-router-dom";
import icon101 from "../../../assets/images/icon101.png";
function ProjectCard({
  title,
  description,
  location,
  time,
  budget,
  datePosted,
  id,
}) {
  return (
    <>
      <Container>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <Link
              to={`/project_detail/${id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="work-project-card shadow bg-white rounded">
                <Container fluid className="">
                  <Row className="py-5">
                    <Col md={2} sm={2} xs={2}>
                      <div className="project-card-avatar">
                        {/* <MDBContainer className="d-flex justify-content-center">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                            className="rounded-3"
                            style={{ width: "100px" }}
                            alt="Avatar"
                          />
                        </MDBContainer> */}
                        <img src={icon101} alt="icon" />
                      </div>
                    </Col>
                    <Col md={8} sm={8} xs={8}>
                      <div className="content-for-project">
                        <h1>{title}</h1>
                        <p>{description}</p>
                        {/* <div className="link-div">
                          <Link to={`/project_detail/${id}`}>Learn more</Link>
                        </div> */}
                      </div>
                    </Col>
                    <Col md={2} sm={2} xs={2}>
                      <div className="star-icon">
                        <span>
                          {" "}
                          <BsFillStarFill />
                        </span>
                      </div>
                    </Col>
                  </Row>
                  <Row className="custom-gray-row">
                    <Col md={12} sm={12} xs={12} className="p-0">
                      <div className="details-of-vendor">
                        <div>
                          <span>
                            <BsFillPinMapFill />
                          </span>
                          <p>{location}</p>
                        </div>
                        <div>
                          <span>
                            <BsClockHistory />
                          </span>
                          <p>{time}</p>
                        </div>
                        <div>
                          <span>
                            <BsFillWalletFill />
                          </span>
                          <p>${budget}</p>
                        </div>
                        <div>
                          <span>
                            <BsFillClockFill />
                          </span>
                          <p>{datePosted} Days ago</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProjectCard;
