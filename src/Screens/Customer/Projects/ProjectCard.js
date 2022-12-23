import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

function ProjectCard({ status, count }) {
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
        <Row className="my-2">
          <Col xs={3} md={3}>
            <p className="project-title-dashboard">Carpenter</p>
          </Col>
          <Col xs={3} md={3}>
            <div className="status-button-div">
              <button style={{ color: textColor, backgroundColor: btnColor }}>
                {status}
              </button>
            </div>
          </Col>
        </Row>
        <Row className="my-2">
          <Col xs={4} md={4}>
            <div className="date-div">
              <BsFillCalendarWeekFill />
              <p>Posted on 10 july, 2019</p>
            </div>
          </Col>
          <Col xs={4} md={4}>
            <div className="date-div">
              <BsFillCalendarWeekFill />
              <p>Posted on 10 july, 2019</p>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={12} xs={12}>
            <div className="button-group-dashboard">
              <Link to="/customer_proposals">
                <button className="purple-button">
                  <span>
                    <BsPeopleFill />
                  </span>
                  Manage Proposal <span className="count-span">{count}</span>
                </button>
              </Link>

              <button className="edit-button">
                <BsPencilSquare />
              </button>
              <button className="delete-button">
                <BsTrash />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectCard;
