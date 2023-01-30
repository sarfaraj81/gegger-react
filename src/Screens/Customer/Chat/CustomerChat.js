import React from "react";
import { Container, Row } from "react-bootstrap";
import ActiveUsers from "./components/ActiveUsers";
import ChatScreen from "./components/ChatScreen";
import Wrapper from "../../../Utlilities/Wrapper";

function CustomerChat() {
  const users = ["John", "Jane", "Bob"];
  const messages = ["Hello", "How are you?", "Goodbye"];
  const wrapperHeight = "13vh";
  return (
    <>
      <Wrapper wrapperHeight={wrapperHeight} />
      <Container>
        <Row>
          <ActiveUsers users={users} />
          <ChatScreen messages={messages} />
        </Row>
      </Container>
    </>
  );
}

export default CustomerChat;
