import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import { MDBContainer } from "mdb-react-ui-kit";
import { BsFillStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";

import ProjectCard from "./Componenets/ProjectCard";
import useFetch from "../Hooks/useFetch";
import Wrapper from "../../Utlilities/Wrapper";
function ProjectList() {
  //csutom - fetch hook
  const {
    error,
    isPending,
    data: projects,
  } = useFetch(process.env.REACT_APP_URL + "/front/projects");
  console.log(projects);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLcoation] = useState("");
  const [time, setTime] = useState("4 hrs");
  const [budget, setBudget] = useState("");
  const [datePosted, setDateposted] = useState(3);
  const [id, setId] = useState("");
  const [data, setData] = useState();
  const wrapperHeight = "14vh";
  return (
    <>
      <Wrapper wrapperHeight={wrapperHeight} />
      <Container className="">
        <Row>
          {/* controls for searching services starts here */}
          <Col sm={3} md={3} xs={3}>
            <Container>
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <div className="my-3">
                    <p>Location</p>
                    <div className="search">
                      <i className="fa fa-location"></i>
                      <input
                        type="text"
                        className="form-control z-depth-1"
                        placeholder="Location"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <div className="add my-4">
                    <i className="fa fa-search"></i>
                    <input
                      type="text"
                      className="form-control z-depth-1"
                      placeholder="Add more skills"
                    />
                    <button className="btn btn-primary custom-btn-add">
                      +
                    </button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <div className="my-3 select-category-div">
                    <p>Category</p>

                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Category
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Col>
              </Row>
              {/* <Row>
                <Col md={12} sm={12} xs={12}>
                  <div className="my-3">
                    <p>Job Type</p>
                    <div className="switch-btn-div">
                      <Form>
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label="Freelancer"
                        />
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label="Full Time"
                        />
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label="Part Time"
                        />
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label="Internship"
                        />
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label="Temporary"
                        />
                      </Form>
                    </div>
                  </div>
                </Col>
              </Row> */}
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <div className="my-3">
                    <p>Hourly Rate</p>
                    <Form.Range />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <p>Tags</p>
                  <div className="my-3 skills-buttons-div">
                    <button>Plumbing</button>
                    <button>Electrician</button>
                    <button>Carpenter</button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
          {/* listing of cards with services starts here */}
          <Col md={9} sm={9} xs={9}>
            <Container>
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <div className="search-panel-service">
                    <p>Search List</p>
                    <span>{<BsSearch />}</span>
                    <span className="sort-by-span">Sort By:</span>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Search by relevance"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />

                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          Relevance
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Something else
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </InputGroup>
                  </div>
                </Col>
              </Row>
              <Row>
                {projects?.data?.map((project) => (
                  <ProjectCard
                    key={project.key}
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    time={time}
                    budget={project.budget}
                    datePosted={datePosted}
                    id={project._id}
                  />
                ))}
                {/* <ProjectCard
                  title={title}
                  description={description}
                  location={location}
                  time={time}
                  budget={budget}
                  datePosted={datePosted}
                  id={id}
                />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard /> */}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProjectList;
