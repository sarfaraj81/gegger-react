import React from "react";
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBContainer,
  MDBNavbar,
} from "mdb-react-ui-kit";
import { Container, Row, Col } from "react-bootstrap";
import ChatBody from 'src/Screens/Dashboard/Customer/Chat/Components/ChatBody';
import ProjectDetails from 'src/Screens/Dashboard/Customer/Chat/Components/ProjectDetails';
import ActiveUsers from 'src/Screens/Dashboard/Customer/Chat/Components/ActiveUsers';
import { BsFillBookmarkFill } from "react-icons/bs";
// import useFetchPost from "../../../Hooks/useFetchPost";
import { useSelector } from "react-redux";

const ChatScreen = ({ messages }) => {
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
            <Container className="customer-chat-container">
              <Row>
                <Col md={8} xs={8}>
                    <ChatBody />
                </Col>
                <Col md={4} xs={4}>
                 <div className="project-proposal-details">
                  {
                  <ProjectDetails />
                  /* <ProjectDetails />
                  <ProposalsDetails />
                  <Transactions /> */}
                  </div>
                </Col>
              </Row>
              
            </Container>
          </Col>
        </Row>
      </Container>
    </Col>
  </>
  );
};

export default ChatScreen;
