import React, { useState, useEffect } from "react";
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBContainer,
  MDBNavbar,
} from "mdb-react-ui-kit";
import { Container, Row, Col } from "react-bootstrap";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import useFetchPost from "../../../Hooks/useFetchPost";
import { useSelector } from "react-redux";
function ProjectListing() {
  // const btnColor1 = "green";
  // const btnColor2 = "yellow";
  // const btnColor3 = "red";
  const [status, setStatus] = useState("pending approval");
  const [count, setCount] = useState(4);

  const getState = useSelector((state) => state);
  // console.log(
  //   getState,
  //   "user data at customer projects"
  //    getState?.userSignin?.userInfo?.data?.token
  // );
  // console.log(getState, "at proejct lsiitng");
  // const data = {
  //   title: "testing add api satyam",
  //   description: "I need expert",
  //   budget: 150,
  //   category: "63b2a33561da98130a41eeb9",
  //   sub_category: "63b2a33561da98130a41eeb9",
  //   location: "san diego",
  //   lat: "5.0000",
  //   long: "70.000",
  // };
  // var requestOptions = {
  //   method: "POST",
  //   // body: JSON.stringify(data),
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Headers":
  //       "Origin, X-Requested-With, Content-Type, Accept",
  //     "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  //     "Access-Control-Allow-Credentials": "true",
  //     Accept: "application/json",
  //     "Content-Type": "application/json",

  //     token:
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzYjJhMmVmNjFkYTk4MTMwYTQxZWViNiIsImZpcnN0X25hbWUiOiJjdXN0b21lcm5ldyIsImVtYWlsIjoiY3VzdG9tZXJuZXdAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkM2pHSm93U1NZSUFwMHFDQUNyN1pZT0l1bFlKMFFrSjYvb05GY0FScVZjUXg0a29WRVJkYi4iLCJ0eXBlIjoidXNlciIsImZjbV90b2tlbiI6W10sImRlbGV0ZWQiOmZhbHNlLCJzdGF0dXMiOiJhY3RpdmUiLCJjcmVhdGVkX2F0IjoiMjAyMy0wMS0wMlQwOToyNTowMy42NjNaIiwiX192IjowfSwiaWF0IjoxNjcyODI1NjI1fQ._unC0kHynMwoYqSD_On2PZFRPPGQbYBfcvr6jzG_Lt0",
  //   },
  // };
  const body = {};
  const headers = {
    token: getState?.userSignin?.userInfo?.data?.token,
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzYjJhMmVmNjFkYTk4MTMwYTQxZWViNiIsImZpcnN0X25hbWUiOiJjdXN0b21lcm5ldyIsImVtYWlsIjoiY3VzdG9tZXJuZXdAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkM2pHSm93U1NZSUFwMHFDQUNyN1pZT0l1bFlKMFFrSjYvb05GY0FScVZjUXg0a29WRVJkYi4iLCJ0eXBlIjoidXNlciIsImZjbV90b2tlbiI6W10sImRlbGV0ZWQiOmZhbHNlLCJzdGF0dXMiOiJhY3RpdmUiLCJjcmVhdGVkX2F0IjoiMjAyMy0wMS0wMlQwOToyNTowMy42NjNaIiwiX192IjowfSwiaWF0IjoxNjcyODI1NjI1fQ._unC0kHynMwoYqSD_On2PZFRPPGQbYBfcvr6jzG_Lt0",
  };
  const bodyData = JSON.stringify(body);
  // const testing = () => {
  //   fetch(process.env.REACT_APP_URL + "/customer/projects", requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  // };
  const { response, error, isLoading, fetchByPost, data } = useFetchPost(
    process.env.REACT_APP_URL + "/customer/projects",
    bodyData,
    headers
  );
  useEffect(() => {
    fetchByPost();
  }, [getState?.userSignin?.userInfo?.data?.token]);

  console.log(data, "data at projects");
  // };
  // testing();
  return (
    <>
      <Col xs={12} md={12}>
        <Container>
          <Row>
            <Col xs={12} md={12}>
              <div className="customer">
                <div className="customerContainer">
                  <div className="breadcrumb-n-title">
                    <div className="dashboard-headline">
                      <h3>Manage Projects</h3>
                    </div>
                    <div className="breadcrum-ui-kit">
                      <MDBNavbar expand="lg" light bgColor="dark">
                        <MDBContainer fluid>
                          <MDBBreadcrumb>
                            <MDBBreadcrumbItem>
                              <a href="#">Home</a>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem>
                              <a href="#">Library</a>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem active>
                              <a href="#">Data</a>
                            </MDBBreadcrumbItem>
                          </MDBBreadcrumb>
                        </MDBContainer>
                      </MDBNavbar>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={12} xs={12}>
              <Container className="project-listing-container">
                <Row>
                  <Col md={12} xs={12}>
                    <div className="project-lisitng">
                      <BsFillBookmarkFill />
                      <p>Open Jobs</p>
                    </div>
                  </Col>
                </Row>
                {data?.data.map((d) => (
                  <Row key={d._id}>
                    <ProjectCard
                      data={d}
                      title={d.title}
                      // status={status}
                      createdAt={d.created_at}
                      count={count}
                      status={d.status}
                      proposalID={d._id}
                    />
                  </Row>
                ))}
                {/* <Row>
                  <ProjectCard title="" status={status} count={count} />
                </Row> */}
                {/* <Row>
                  <ProjectCard title="" status="expiring" count={count} />
                </Row>
                <Row>
                  <ProjectCard title="" status="expired" count={count} />
                </Row> */}
              </Container>
            </Col>
          </Row>
        </Container>
      </Col>
    </>
  );
}

export default ProjectListing;
