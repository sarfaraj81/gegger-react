import React, { useState } from "react";
import { Container, Row,Col } from "react-bootstrap";
import ActiveUsers from 'src/Screens/Dashboard/Customer/Chat/Components/ActiveUsers';
import ChatScreen from "src/Screens/Dashboard/Customer/Chat/Components/ChatScreen";
import Wrapper from "src/Utlilities/Wrapper";
import { useParams } from "react-router-dom";
const wrapperHeight = "11vh";
function CustomerChat() {

  const pid=useParams();
  console.log(pid);
  const users = ["John", "Jane", "Bob"];
  const messages = ["Hello", "How are you?", "Goodbye"];
  const wrapperHeight = "13vh";
  
  return (
    <>
    <Wrapper wrapperHeight={wrapperHeight} />
    <Container fluid>
      <Row>
        <Col xs={3} md={3}>
          <ActiveUsers users={users} />
        </Col>
        <Col xs={9} md={9}>
          <ChatScreen messages={messages} />
        </Col>
      </Row>
    </Container>
    
  </>
  );
}

export default CustomerChat;
