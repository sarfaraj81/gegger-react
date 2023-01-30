import React from "react";
import { ListGroup } from "react-bootstrap";

const ActiveUsers = ({ users }) => {
  return (
    <div className="col-md-4">
      <h3>Active Users</h3>
      <ListGroup>
        {users.map((user, index) => (
          <ListGroup.Item key={index}>{user}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ActiveUsers;
