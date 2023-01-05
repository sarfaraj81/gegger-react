import React from "react";
import { Formik, Form, Field } from "formik";
import { Col, Container, Row } from "react-bootstrap";
import Wrapper from "../../../Utlilities/Wrapper";
import useFetchAndPost from "../../../Hooks/useFetchAndPost";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function AddProject() {
  const [token, setToken] = useState({ token: "" });
  const { userSignin: userInfo } = useSelector((state) => state);
  const [project, setProject] = useState("");
  const wrapperHeight = "11vh";
  const params = {
    title: "testing add api satyam",
    description: "I need expert",
    budget: 150,
    category: "63b2a33561da98130a41eeb9",
    sub_category: "63b2a33561da98130a41eeb9",
    location: "san diego",
    lat: "5.0000",
    long: "70.000",
  };

  var requestOptions = {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Credentials": "true",
      Accept: "application/json",
      "Content-Type": "application/json",

      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzYjJhMmVmNjFkYTk4MTMwYTQxZWViNiIsImZpcnN0X25hbWUiOiJjdXN0b21lcm5ldyIsImVtYWlsIjoiY3VzdG9tZXJuZXdAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkM2pHSm93U1NZSUFwMHFDQUNyN1pZT0l1bFlKMFFrSjYvb05GY0FScVZjUXg0a29WRVJkYi4iLCJ0eXBlIjoidXNlciIsImZjbV90b2tlbiI6W10sImRlbGV0ZWQiOmZhbHNlLCJzdGF0dXMiOiJhY3RpdmUiLCJjcmVhdGVkX2F0IjoiMjAyMy0wMS0wMlQwOToyNTowMy42NjNaIiwiX192IjowfSwiaWF0IjoxNjcyODI1NjI1fQ._unC0kHynMwoYqSD_On2PZFRPPGQbYBfcvr6jzG_Lt0",
    },
  };

  const testing = () => {
    fetch(process.env.REACT_APP_URL + "/customer/project/add", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  console.log("params", params);
  console.log("headders", requestOptions);
  //   const jwtToken = userInfo?.userInfo?.data?.token;
  useEffect(() => {
    setToken(userInfo?.userInfo?.data?.token);
  }, [userInfo]);
  // const { data, error, loading, postData } = useFetchAndPost(
  //   process.env.REACT_APP_URL + "/customer/project/add"
  // );

  //   console.log(data);
  return (
    <>
      <Wrapper wrapperHeight={wrapperHeight} />
      <Container>
        <Row>
          <Col>
            <Formik
              initialValues={{
                title: "",
                description: "",
                budget: "",
                category: "",
                sub_category: "",
                location: "",
                lat: "",
                long: "",
                token: "",
              }}
              onSubmit={(values, { setSubmitting }) => {
                // Submit the form
                console.log(values);
                values.token = token;
                // axios
                //   .post(
                //     process.env.REACT_APP_URL + "/customer/project/add",
                //     values,
                //     {
                //       headers: {
                //         token: token,
                //       },
                //     }
                //   )
                //   .then((response) => console.log(response.data))
                //   .catch((error) => console.error(error));
                // (async () => {
                //   const rawResponse = await fetch(
                //     process.env.REACT_APP_URL + "/customer/project/add",
                //     {
                //       method: "POST",
                //       headers: {
                //         Accept: "application/json",
                //         "Content-Type": "application/json",
                //         token: token,
                //       },
                //       body: JSON.stringify({
                //         title: "Plumber for bathroom tap",
                //         description: values.description,
                //         budget: values.budget,
                //         category: "638b0413a15ec9d0291662ae",
                //         sub_category: "638b0413a15ec9d0291662ae",
                //         location: values.location,
                //         lat: values.lat,
                //         long: values.long,
                //       }),
                //     }
                //   );
                //   const data = await rawResponse.json();
                //   setProject(data);
                //   console.log(project);
                // })();

                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field type="text" name="title" placeholder="Title" />
                  <Field
                    type="text"
                    name="description"
                    placeholder="Description"
                  />
                  <Field type="text" name="budget" placeholder="Budget" />
                  <Field type="text" name="category" placeholder="Category" />
                  <Field
                    type="text"
                    name="sub_category"
                    placeholder="Sub Category"
                  />
                  <Field type="text" name="location" placeholder="Location" />
                  <Field type="number" name="lat" placeholder="Latitude" />
                  <Field type="number" name="long" placeholder="Longititude" />

                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
        <Row>
          <Col>
            <button type="submit" onClick={() => testing()}>
              Click
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddProject;
