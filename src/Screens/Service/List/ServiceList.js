import React, { useEffect, useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import { MDBContainer } from "mdb-react-ui-kit";
import { BsFillStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import ServiceCard from "../components/ServiceCard";
// import useFetch from "../../../Hooks/useFetch";
import { Verified } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import Wrapper from "../../../Utlilities/Wrapper";
import useFetchAndPost from "../../../Hooks/useFetchAndPost";
import useFetchPost from "../../../Hooks/useFetchPost";
function ServiceList() {
  //states
  const [name, setName] = useState("Tom Cruise");
  const [title, setTitle] = useState("Electrician");
  const [rating, setRating] = useState("");
  const [location, setLocation] = useState("San Diego");
  const [rate, setRate] = useState(60);
  const [successRate, setSuccessrate] = useState(95);
  const [vertified, setVerified] = useState(true);
  const [picture, setPicture] = useState("");
  const [params, setParams] = useState("");
  const [changeLocation, setChangeLocation] = useState("");
  const [range, setRange] = useState();
  const wrapperHeight = "14vh";
  const { id } = useParams();
  // console.log(id);
  const handleChange = (e) => {
    setParams(e.target.value);
  };
  const handleChangeLocation = (e) => {
    setChangeLocation(e.target.value);
    // console.log(e.target.value, "location");
  };
  const handleRange = (e) => {
    setRange(e.target.value);
    // console.log(e.target.value);
  };
  var search = {
    cat_id: id,
    s: params,
    location: changeLocation,
    service_charge: range,
  };
  var body = JSON.stringify(search);
  // console.log(body);

  //csutom - fetch hook
  const {
    response,
    error,
    isLoading,
    fetchByPost,
    data: services,
  } = useFetchPost(process.env.REACT_APP_URL + "/front/services", body);
  useEffect(() => {
    fetchByPost();
  }, [body]);
  console.log(services, "data at service lisitng");
  return (
    <>
      <Wrapper wrapperHeight={wrapperHeight} />
      <Container className="">
        <Row>
          {/* controls for searching services starts here */}
          <Col sm={3} md={3}>
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
                        onChange={(e) => handleChangeLocation(e)}
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
                {/* <Col md={12} sm={12} xs={12}>
                  <div className="my-3">
                    <p>Keywords</p>
                    <div className="add">
                      <i className="fa fa-search"></i>
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
                </Col> */}
              </Row>
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <div className="my-3">
                    <p>Price Range : {range}$</p>
                    <Form.Range
                      min={0}
                      max={10000}
                      onChange={(e) => handleRange(e)}
                    />
                    {/* <FormControl type="range" min={0} max={100} /> */}
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
              {/* <Row>
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
              </Row> */}
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
                    {/* <span className="sort-by-span">Sort By:</span> */}
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Search by relevance"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={(e) => handleChange(e)}
                      />

                      {/* <Dropdown>
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
                      </Dropdown> */}
                    </InputGroup>
                  </div>
                </Col>
              </Row>
              <Row>
                {services?.data?.map((service) => (
                  <ServiceCard
                    key={service._id}
                    name={name}
                    title={service.title}
                    rating={service.rating}
                    vertified={service.vertified}
                    location={service.location}
                    rate={rate}
                    successRate={successRate}
                    id={service._id}
                    subtitle={service.category.title}
                    serviceCharge={service.service_charge}
                    displayImage={service.display_image}
                  />
                ))}

                {/* <ServiceCard
                  name={name}
                  title={title}
                  rating={rating}
                  vertified={Verified}
                  location={location}
                  rate={rate}
                  successRate={successRate}
                />
                <ServiceCard
                  name={name}
                  title={title}
                  rating={rating}
                  vertified={Verified}
                  location={location}
                  rate={rate}
                  successRate={successRate}
                />
                <ServiceCard
                  name={name}
                  title={title}
                  rating={rating}
                  vertified={Verified}
                  location={location}
                  rate={rate}
                  successRate={successRate}
                /> */}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ServiceList;
