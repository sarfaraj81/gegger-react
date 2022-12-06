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
import ServiceCard from "./Componenets/ServiceCard";

function VendorServices() {
  return (
    <>
      <Container className="">
        <Row>
          {/* controls for searching services starts here */}
          <Col sm={4}>
            <Container>
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <div className="my-3">
                    <p>Location</p>
                    <div class="search">
                      <i class="fa fa-location"></i>
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
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <div className="my-3">
                    <p>Keywords</p>
                    <div class="add">
                      <i class="fa fa-search"></i>
                      <input
                        type="text"
                        className="form-control z-depth-1"
                        placeholder="e.g. plumber"
                      />
                      <button className="btn btn-primary custom-btn-add">
                        +
                      </button>
                    </div>
                    <div className="search-skills">
                      <button>Plumber</button>
                    </div>
                  </div>
                </Col>
              </Row>
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
                  <p>Skills</p>
                  <div className="my-3 skills-buttons-div">
                    <button>Plumbing</button>
                    <button>Planting</button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <div class="add my-4">
                    <i class="fa fa-search"></i>
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
            </Container>
          </Col>
          {/* listing of cards with services starts here */}
          <Col md={8} sm={8} xs={8}>
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
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default VendorServices;
