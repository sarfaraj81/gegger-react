import { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFetchPost from "src/Hooks/useFetchPost";
import useGetPosts from "src/Hooks/useGetPosts";
import { useSelector } from "react-redux";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

const ActiveUsers = ({ users }) => {
  const getState = useSelector((state) => state);
  const chatList=useGetPosts("message_list",{})
  return (
    <div className=" chatsidebar">
     <div className="top-message">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">&lt;- Messages</span>
        </Link>
      </div>
      <div className="center">
        <div className="filterproposals">
          <select><option>All</option></select>
          <select><option>Select Project</option></select>
        </div> 
      <ul>
        {chatList?.data?.vendors?.map((username, index) => (
          
           <li>
              
              <Link to={"/customer_chat/"+ username._id} style={{ textDecoration: "none" }}> 
              <Container fluid>
                <Row>
                    <Col md={2} xs={2}>
                      <div className="d-flex justify-content-center"
                        style={{
                          position: "relative",
                          //   border: "1px solid black",
                        }}>
                          <img 
                              // src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                              src="akil"
                              className="rounded-circle"
                              
                            />
                        </div>
                    </Col>
                    <Col md={10} xs={10}>
                      <div className=""
                        style={{
                          position: "relative",
                          //   border: "1px solid black",
                        }}>
                          <h3>{username.service.vendor.first_name}</h3>
                          <span>Thanks for reaching out</span>
                        </div>
                    </Col>
                    </Row>
                  </Container>

              </Link>
            </li>
        ))}
      </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          //   onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          //   onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default ActiveUsers;
