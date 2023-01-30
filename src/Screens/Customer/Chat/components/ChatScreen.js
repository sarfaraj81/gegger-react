import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const ChatScreen = ({ messages }) => {
  return (
    <div className="col-md-8">
      <h3>Chat Screen</h3>
      <Card>
        <ListGroup variant="flush">
          {messages.map((message, index) => (
            <ListGroup.Item key={index}>{message}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default ChatScreen;
