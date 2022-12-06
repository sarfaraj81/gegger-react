import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MDBContainer } from "mdb-react-ui-kit";
import { BsFillStarFill } from "react-icons/bs";
import { BsPatchCheckFill } from "react-icons/bs";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { BsFillCalendarFill } from "react-icons/bs";
import { BsBuilding } from "react-icons/bs";
import { BsFillPinMapFill } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import GermanyFlag from "../../assets/images/germany.png";
function ProjectDetail() {
  return (
    <>
      <Container fluid>
        <Row>
          <div id="top-section-row" className="shadow-sm">
            <Container>
              <Row>
                <Col md={3} xs={3}>
                  <div className="project-card-avatar">
                    <MDBContainer className="d-flex justify-content-end">
                      <img
                        src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                        className="rounded-3"
                        style={{ width: "50%", margin: "auto 0px" }}
                        alt="Avatar"
                      />
                    </MDBContainer>
                  </div>
                </Col>
                <Col md={7} xs={7}>
                  {/* title / subtitle div */}
                  <div className="title-desc-card3">
                    <p>Aircraft Engineer</p>
                    <p className="">About the engineer</p>

                    {/* rating div */}
                    <div className="rating-div3">
                      <div className="working-place">
                        <span>
                          <BsBuilding />
                        </span>
                        <p>Acodia</p>
                      </div>
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
                      <div className="country-flag-div">
                        <img src={GermanyFlag} alt="flag_icon" />
                        <p>Germany</p>
                      </div>
                      <div className="verification-btn-div">
                        <button>
                          <span>
                            <BsPatchCheckFill />
                          </span>
                          <p>Verified</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={2} xs={2}>
                  <div className="project-cost-card-div shadow-sm">
                    <div className="">
                      <p>PROJECT VALUE</p>
                      <p>$ 340</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Row>
        <Row>
          <Col md={8} sm={8}>
            {/* left section */}
            <Container>
              <Row>
                <Col md={12} xs={12}>
                  <div className="about-div">
                    <p>Job description</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin egestas eros sed dolor auctor tincidunt. Curabitur a
                      nibh et urna auctor pellentesque. Nunc malesuada quis sem
                      sed finibus. Praesent non volutpat nisl. Sed pharetra vel
                      ex ac rutrum. Integer volutpat risus eu lacus pellentesque
                      fermentum. In hac habitasse platea dictumst. Mauris
                      mattis, enim at lacinia interdum, mi dui malesuada orci,
                      quis rutrum arcu purus vel lorem. Nulla facilisi. Mauris
                      lobortis posuere justo, et convallis quam ornare vel. Nam
                      lacinia ultricies ipsum, eu porttitor felis aliquet a.
                      Aenean ac vulputate risus. Praesent sollicitudin dolor
                      quis sem consectetur aliquam. Phasellus ut lacinia turpis,
                      sed fringilla ipsum. Ut posuere sagittis risus nec
                      feugiat. Integer convallis ligula vitae quam blandit, ut
                      accumsan leo euismod. Vestibulum pharetra, nunc eget
                      <br></br>
                      vehicula fringilla, elit nisl ornare purus, et finibus
                      nibh eros in eros. Curabitur et malesuada ante, a porta
                      odio. Integer lacinia leo varius blandit rhoncus. Sed
                      ullamcorper orci ut commodo condimentum. Nulla sit amet
                      magna quam. Praesent tincidunt vel magna id maximus.
                      Vestibulum placerat, nibh nec feugiat eleifend, felis
                      tortor ornare velit, vel venenatis dui purus nec elit. In
                      vel erat sed lorem tincidunt pretium eget eget lorem. Cras
                      sit amet vestibulum est. Nulla cursus ex et tellus
                      pellentesque, sed scelerisque sapien mattis. Aliquam
                      vestibulum arcu ut leo aliquam tristique. Morbi vitae sem
                      nisi. Pellentesque feugiat ex eu risus scelerisque varius.
                      Praesent congue felis odio. Nulla facilisi. Integer et
                      justo a diam scelerisque volutpat. Praesent sed lorem
                      urna. Vivamus accumsan nulla vel arcu volutpat porta.
                      Mauris sodales dictum tortor, a imperdiet enim interdum
                      at. Nulla in elit lectus. Cras et neque vehicula, dictum
                      nunc quis, pretium quam.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} xs={12}>
                  <div className="map-on-project-detail">
                    <p className="location-title">Location</p>

                    <iframe
                      title="google-map-on-project-detail"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.29592731265!2d-77.47713270775661!3d25.0326996781907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7c99b981dbc9%3A0x2aef01d3485e50d2!2sNassau%2C%20Bahamy!5e0!3m2!1spl!2spl!4v1624445118063!5m2!1spl!2spl"
                      className="w-100"
                      height="400"
                      loading="lazy"
                    ></iframe>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>

          {/* right side section */}
          <Col md={4} xs={4}>
            <Container fluid>
              <Row>
                <Col md={12} xs={12}>
                  <div className="apply-now-btn-div">
                    <button>Apply Now</button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} xs={12}>
                  <div className="project-summary-div">
                    <div className="project-summary-title">
                      <h3>Job Summary</h3>
                    </div>
                    <div>
                      <div className="project-location-div">
                        <BsFillPinMapFill />
                        <div>
                          <p>Location</p>
                          <p>San Deigo, USA</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="proejct-time-div">
                        <BsFillClockFill />
                        <div>
                          <p>Date Posted</p>
                          <p>2 Days ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProjectDetail;
