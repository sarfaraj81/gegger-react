import React, { useState, useEffect } from "react";
import { Col, Container, DropdownButton, Row } from "react-bootstrap";
import { MDBContainer } from "mdb-react-ui-kit";
import { BsFillStarFill } from "react-icons/bs";
import { BsPatchCheckFill } from "react-icons/bs";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { BsFillCalendarFill } from "react-icons/bs";
import { BsBuilding } from "react-icons/bs";
import { BsCalendarEvent } from "react-icons/bs";

import GermanyFlag from "../../../assets/images/germany.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Rating from "../../../Components/rating/Rating";
import usePost from "../../../Hooks/usePost";
import moment from "moment";
//modal imports
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTextArea,
  MDBInput,
} from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Wrapper from "../../../Utlilities/Wrapper";
import { useSelector } from "react-redux";
import useFetchPost from "../../../Hooks/useFetchPost";

import { useNavigate } from "react-router-dom";
import { MenuItem } from "@mui/material";
function ServiceDetail() {
  const [varyingState, setVaryingState] = useState("");
  const [formError, setFormError] = useState([]);
  const [varyingModal, setVaryingModal] = useState(false);
  const [iscontactRequest, setContactRequest] = useState(false);

  const [varyingRecipient, setVaryingRecipient] = useState("");
  
  const [varyingMessage, setVaryingMessage] = useState("");

  const [project_id, setProjectId] = useState();
  // const [service, setService] = useState(null);
  const getState = useSelector((state) => state);
  const navigate = useNavigate();
  const onChangeRecipient = (event) => {
    setVaryingRecipient(event.target.value);
  };

  const onChangeMessage = (event) => {
    setVaryingMessage(event.target.value);
  };
  const onChangeProjectId = (e) => {
    if(e.target.value=='add'){
      window.open('/customer_project_add','_blank')
    } else{
      setProjectId(e.target.value);
    }
  };

  const { id } = useParams();
  //custom - fetch hook - for fetching details for services
  const bodyData = {
    service_id: id,
  };
  const headers = {
    method: "POST",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Content-Type": "application/json",
    token: getState?.userSignin?.userInfo?.data?.token,
  };
  const body = JSON.stringify(bodyData);
  //fetch for fetching data for modal - proejct lisiting / category id etc
  const { data: project_data, fetchByPost: fetchFuncation } = useFetchPost(
    process.env.REACT_APP_URL + "/customer/projects",
    body,
    headers
  );

  //csutom - fetch hook
  const {
    response,
    error,
    isLoading,
    fetchByPost,
    data: service,
  } = useFetchPost(
    process.env.REACT_APP_URL + "/front/service/details",
    body,
    headers
  );

  useEffect(() => {
    fetchByPost();
  }, [id]);

  const checkStatus = () => {
    if (!getState?.userSignin?.isLoggedIn) {
      navigate("/login");
    }
    setVaryingState(service?.data?.title);
  };

  let ratingLoop = Array.apply(null, { length: service?.data?.rating }).map(
    Number.call,
    Number
  );

  // console.log(ratingLoop);
  const modalData = {
    project_id: project_id,
    service_id: id,
    message: varyingMessage,
  };
  const modalDataString = JSON.stringify(modalData);
  //function to send modal data to server
  const { data, fetchByPost: sendModalData } = useFetchPost(
    process.env.REACT_APP_URL + "/customer/proposal/request",

    modalDataString,
    headers
  );
  const wrapperHeight = "10vh";

  // useEffect(() => {
  //   sendModalData();
  // }, [modalData]);
  const modalOnSubmit = (e) => {
    e.preventDefault()
    if(project_id){
        sendModalData();
        setContactRequest(true);        
        console.log(service, "data at service details");
    } else{
      setFormError({"project": "Select Project"});
    }

  };
  // console.log(service?.data.jobs[0], "jobs");
  return (
    <>
      <Wrapper wrapperHeight={wrapperHeight} />
      <Container fluid className="top-section-container">
        {/* top section row */}
        <Row>
          <div id="top-section-row" className="shadow-sm">
            <Container>
              <Row>
                <Col md={3} xs={3}>
                  <div className="project-card-avatar">
                    <MDBContainer className="d-flex justify-content-end">
                      <img
                        // src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                        src={service?.data?.display_image}
                        className="rounded-circle"
                        style={{ margin: "1em 0px", minHeight: "10vh" }}
                        alt="Avatar"
                      />
                    </MDBContainer>
                  </div>
                </Col>
                <Col md={9} xs={9}>
                  {/* title / subtitle div */}
                  <div className="title-desc-card2">
                    <p>{service?.data?.title}</p>
                    <p>{service?.data?.category?.title}</p>
                    {/* rating div */}
                    <div className="rating-div2">
                      <span>{service?.data?.rating}.0</span>
                      <div>
                        <Rating rating={service?.data?.rating} maxRating={5} />
                      </div>
                      <div className="country-flag-div">
                        <img src={GermanyFlag} alt="flag_icon" />
                        <p>{service?.data?.location}</p>
                      </div>
                      {service?.data?.verified ? (
                        <div className="verification-btn-div">
                          <button>
                            <span>
                              <BsPatchCheckFill />
                            </span>
                            <p>Verified</p>
                          </button>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Row>
        {/* about us section */}
        <Row>
          <Col md={8} sm={8}>
            {/* left section */}
            <Container>
              <Row>
                <Col md={12} xs={12}>
                  <div className="about-div">
                    <p>About Me</p>
                    <p>
                      {/* Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum. */}
                      {service?.data?.category?.description}
                    </p>
                  </div>
                </Col>
              </Row>
              {/* gray section */}
              <Row>
                <Col md={12}>
                  <div className="gray-panel">
                    <div>
                      <span>
                        <BsFillBookmarkStarFill />
                      </span>
                      <p>Work History and Feedback</p>
                    </div>
                  </div>
                </Col>
              </Row>

              {service?.data?.jobs.map((ser) => (
                <>
                  <Row>
                    <Col md={12} xs={12}>
                      <div className="work-history-info">
                        <div>
                          <div className="work-history-title">
                            <p>{ser.project.title}</p>
                          </div>
                          <div className="rating-div2">
                            <span>{ser.review_from_customer.rating}</span>
                            <div>
                              {/* <span>
                            {<BsFillStarFill />}
                            {<BsFillStarFill />}
                            {<BsFillStarFill />}
                            {<BsFillStarFill />}
                            {<BsFillStarFill />}
                          </span> */}
                              <Rating
                                rating={ser.review_from_customer.rating}
                                maxRating={5}
                              />
                            </div>
                            <div className="date-time-div">
                              <span>
                                <BsFillCalendarFill />
                              </span>
                              <p>
                                {moment(ser.completed_at).format("MMMM YYYY")}
                              </p>
                            </div>
                          </div>
                          <div>
                            <p>{ser.project.description}</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </>
              ))}

              <Row>
                <Col md={12} xs={12}>
                  <div className="work-history-info ">
                    <div className="gray-background">
                      <div className="work-history-title">
                        <p>Water Drain cleaning</p>
                      </div>
                      <div className="rating-div2">
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
                        <div className="date-time-div">
                          <span>
                            <BsFillCalendarFill />
                          </span>
                          <p>August 2022</p>
                        </div>
                      </div>
                      <div>
                        <p>Clog Cleaning, Leakage fixing and more+</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} xs={12}>
                  <div className="work-history-info">
                    <div>
                      <div className="work-history-title">
                        <p>Water Drain cleaning</p>
                      </div>
                      <div className="rating-div2">
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
                        <div className="date-time-div">
                          <span>
                            <BsFillCalendarFill />
                          </span>
                          <p>August 2022</p>
                        </div>
                      </div>
                      <div>
                        <p>Clog Cleaning, Leakage fixing and more+</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} xs={12}>
                  <div className="pagination-div">
                    <nav aria-label="...">
                      <ul className="pagination pagination-lg">
                        <li className="page-item active" aria-current="page">
                          <span className="page-link">1</span>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Col>
              </Row>
              {/* <Row>
                <Col md={12}>
                  <div className="gray-panel">
                    <div>
                      <span>
                        <BsFillBookmarkStarFill />
                      </span>
                      <p>Employment History</p>
                    </div>
                  </div>
                </Col>
              </Row> */}
              {/* <Row>
                <Col md={12} xs={12}>
                  <div className="employment-history-div">
                    <div className="avatar-div">
                      <MDBContainer className="d-flex ">
                        <img
                          src="https://mdbootstrap.com/img/new/standard/city/043.webp"
                          className="rounded-3 shadow-4"
                          style={{ width: "100%" }}
                          alt="Avatar"
                        />
                      </MDBContainer>
                    </div>
                    <div className="employment-history-details">
                      <div className="employment-history-title">
                        <h3>Airframe and power plant</h3>
                      </div>
                      <div className="icon-n-details">
                        <div>
                          <span>
                            <BsBuilding />
                          </span>
                          <p>Acodia</p>
                        </div>
                        <div>
                          <span>
                            <BsFillCalendarFill />
                          </span>
                          <p>May 2019 - Present</p>
                        </div>
                      </div>
                      <div className="employment-history-description">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row> */}
            </Container>
          </Col>
          {/* right section */}
          <Col md={4} xs={4}>
            <div className="work-detials-div">
              <div className="rate-n-basic-details">
                <div className="flex-column">
                  <span>${service?.data?.service_charge}</span>
                  <span>
                    <p>Service Charge</p>
                  </span>
                </div>
                <div className="flex-column">
                  <span>{service?.data?.total_job_count}</span>
                  <span>
                    <p>Jobs Done</p>
                  </span>
                </div>
                {/* <div className="flex-column">
                  <span>22</span>
                  <span>
                    <p>Rehired</p>
                  </span>
                </div> */}
              </div>
              <div className="make-offer-btn">
                <MDBBtn
                  onClick={() => {
                    setVaryingState("@mdo");
                    setVaryingModal(true);
                    setVaryingRecipient("@mdo");
                    checkStatus();
                  }}
                  className="makeoffer"
                >
                  Contact for Service
                </MDBBtn>
              </div>
              <div className="progress-bar-info-div">
                <div>
                  <p>88%</p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "88%" }}
                      aria-valuenow="88"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <span>
                    <p>Job Success</p>
                  </span>
                </div>
                <div>
                  <p>{service?.data?.on_budget}%</p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${service?.data?.on_budget}%` }}
                      aria-valuenow={service?.data?.on_budget}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <span>
                    <p>On Budget</p>
                  </span>
                </div>
                <div>
                  <p>{service?.data?.on_time}%</p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${service?.data?.on_time}%` }}
                      aria-valuenow={service?.data?.on_time}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <span>
                    <p>On Time</p>
                  </span>
                </div>
                <div>
                  <p>100%</p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuenow="88"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <span>
                    <p>Recommendation</p>
                  </span>
                </div>
              </div>
              <div className="social-icons-div">
                <p>Social platforms</p>
                <div>
                  <i className="fab fa-google"></i>
                  <i className="fab fa-linkedin-in"></i>
                  <i className="fab fa-twitter"></i>
                </div>
              </div>
              <div className="geegr-verification-div">
                <button>
                  <span>
                    <BsPatchCheckFill />
                  </span>
                  <p>Verified</p>
                </button>
              </div>
              <div className="skills-div">
                {service?.data?.skills.map((skill) => (
                  <span key={skill.key}>{skill}</span>
                ))}
                {/* <span>Good Communication</span>
                <span>A high level of techinal undersatnding.</span> */}
              </div>
              <div className="Attachment-div">
                <a href="asa" className="attachment-box ripple-effect">
                  <span>Cover Letter</span>
                  <i>PDF</i>
                </a>
                <a href="asas" className="attachment-box ripple-effect">
                  <span>Contract</span>
                  <i>DOCX</i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {/* modal */}
            <MDBModal
              show={varyingModal}
              setShow={setVaryingModal}
              tabIndex="-1"
            >
              <MDBModalDialog>
                <MDBModalContent>
                  <MDBModalHeader>
                    <MDBModalTitle>
                      Contact <span style={{ color: "#6A2FF9" }}>{varyingState}</span>
                    </MDBModalTitle>
                    <MDBBtn
                      className="btn-close"
                      color="none"
                      onClick={() => setVaryingModal(false)}
                    ></MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody>
                    {!iscontactRequest? (
                    <form>
                      <div className="category-dropdown mb-4">
                        <label>Project Name:</label>
                        <Form.Select
                          aria-label="Default select example"
                          onChange={(e) => {
                            onChangeProjectId(e);
                          }}
                          onFocus={(e) =>{
                            fetchFuncation();
                          }}
                        >
                          <option>Default selction:</option>
                          <option value='add'>Add Project</option>
                          {project_data?.data?.map((prj) => (
                            <option value={prj._id}>{prj.title}</option>
                          ))}
                        </Form.Select>
                        <span className="error">{formError?.project}</span>
                      </div>
                      {/* <div className="mb-3">
                        {varyingModal && (
                          <MDBInput
                            label="Recipient:"
                            value={varyingRecipient}
                            onChange={onChangeRecipient}
                            labelClass="col-form-label"
                          />
                        )}
                      </div> */}
                      <div className="mb-3">
                        <label>Message:</label>
                        {varyingModal && (
                          <MDBTextArea
                            value={varyingMessage}
                            onChange={onChangeMessage}
                            labelClass="col-form-label"
                          />
                        )}
                      </div>
                    </form> ):"Thanks for contact"}
                  </MDBModalBody>
                  <MDBModalFooter>
                    <div className="btn-modal-div">
                      <MDBBtn
                        color="secondary"
                        onClick={() => setVaryingModal(false)}
                      >
                        Close
                      </MDBBtn>
                      { !iscontactRequest?(<MDBBtn onClick={(e) => modalOnSubmit(e)}>Submit</MDBBtn> ):""}
                    </div>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ServiceDetail;
