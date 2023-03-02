import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Wrapper from "src/Utlilities/Wrapper";
import Sidebar from "src/Screens/Dashboard/Customer/Components/Sidebar/Sidebar";
import ProjectListing from "src/Screens/Dashboard/Customer/Projects/ProjectListing";
import CustomerWrapper from "src/Screens/Dashboard/Customer/CustomerWrapper";
const wrapperHeight = "11vh";
function Projects() {
  return (
    <CustomerWrapper>
            <ProjectListing />
    </CustomerWrapper>
  );
}

export default Projects;
