import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { useEffect,useState } from "react";
import useFetchPost from "src/Hooks/useFetchPost";
import { useSelector, useDispatch } from "react-redux";
import socketServcies from 'src/Utlilities/socketServices';

function Wrapper({ wrapperHeight }) {
  let dispatch=useDispatch()
  const [PID,setPIDInSockets]=useState([]);
  const getState = useSelector((state) => state);
  const bodyData = {};
  const headers = {
    method: "POST",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Content-Type": "application/json",
    token: getState?.userSignin?.userInfo?.data?.token,
  };
  const body = JSON.stringify(bodyData);

  const { data: chatList, fetchByPost: getChatList } = useFetchPost(
    process.env.REACT_APP_URL + "/customer/chat/messagelist",
    body,
    headers
  );




  useEffect(() => {
      socketServcies.initializeSocket()
      getChatList(); 
      console.log("wrappercount")  
  }, [])
  useEffect(() => {
      console.log(chatList)
      chatList?.data?.vendors?.map((value,key)=>{
        if(!PID.includes(value._id)){
          console.log(value._id)
          setPIDInSockets([...PID,value._id])
          socketServcies.on(value._id, (msg) => {
            dispatch({ type: "NEW_MESSAGE", payload: {...msg,proposal_id:value._id} }) 
          })
        }  


      })
  
  },[chatList])



  return (
    <Container>
      <Row>
        <Col>
          <div
            className="wrapper-div"
            style={{ minHeight: wrapperHeight }}
          ></div>
        </Col>
      </Row>
    </Container>
  );
}

export default Wrapper;
