import React from "react";
import { Formik, Form, Field } from "formik";
import { Col, Container, Row } from "react-bootstrap";
import Wrapper from "../../../Utlilities/Wrapper";
import useFetchAndPost from "../../../Hooks/useFetchAndPost";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import useFetchPost from "../../../Hooks/useFetchPost";
import usePost from "../../../Hooks/usePost";
import axios from "axios";
function AddProject() {
  const [token, setToken] = useState({ token: "" });
  const { userSignin: userInfo } = useSelector((state) => state);
  const [project, setProject] = useState("");
  const wrapperHeight = "11vh";
  const getState = useSelector((state) => state);
  const [dataState, setDataState] = useState();

  var requestOptions = {
    method: "POST",
    body: JSON.stringify(dataState),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",

      "Content-Type": "application/json",

      token: getState?.userSignin?.userInfo?.data?.token,
    },
  };

  const { response, error, isLoading, fetchByPost, data } = usePost(
    process.env.REACT_APP_URL + "/customer/project/add",
    requestOptions
  );
  useEffect(() => {
    fetchByPost();
  }, [dataState, token]);
  console.log(getState?.userSignin?.userInfo);
  return (
    <>
      <Wrapper wrapperHeight={wrapperHeight} />
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <div className="title-headline">
              <h3>Add Project</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Formik
              initialValues={{
                title: "",
                description: "",
                budget: "",
                category: "638b0413a15ec9d0291662ae",
                sub_category: "638b0413a15ec9d0291662ae",
                location: "",
                lat: "5.0",
                long: "4.0",
              }}
              onSubmit={(values, { setSubmitting }) => {
                // Submit the form
                setDataState(values);
                if (dataState) {
                  fetchByPost();
                }
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Container>
                  <Form className="customer_add_form">
                    <Row>
                      <Col md={6} sm={6} lg={6}>
                        <label>Title:</label>
                        <Field type="text" name="title" placeholder="Title" />
                      </Col>
                      <Col md={6}></Col>
                      <Col md={12} sm={12} lg={12}>
                        <label>Description:</label>
                        <Field
                          type="textarea"
                          name="description"
                          placeholder="Description"
                        />
                      </Col>
                      <Col md={6} sm={6} lg={6}>
                        <label>Budget:</label>
                        <Field type="text" name="budget" placeholder="Budget" />
                      </Col>
                      <Col md={6} sm={6} lg={6}>
                        <label>Category:</label>
                        <Field
                          type="text"
                          name="category"
                          placeholder="Category"
                        />
                      </Col>
                      <Col md={6} sm={6} lg={6}>
                        <label>Sub-category:</label>
                        <Field
                          type="text"
                          name="sub_category"
                          placeholder="Sub Category"
                        />
                      </Col>
                      <Col md={6} sm={6} lg={6}>
                        <label>Location</label>
                        <Field
                          type="text"
                          name="location"
                          placeholder="Location"
                        />
                      </Col>
                      <Col md={6} sm={6} lg={6}>
                        <Field
                          type="number"
                          name="lat"
                          placeholder="Latitude"
                        />
                      </Col>
                      <Col md={6} sm={6} lg={6}>
                        <Field
                          type="number"
                          name="long"
                          placeholder="Longititude"
                        />
                      </Col>
                      <Col md={6} sm={6} lg={6}>
                        <button
                          className="btn"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          Submit
                        </button>
                      </Col>
                    </Row>
                  </Form>
                </Container>
              )}
            </Formik>
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <button type="submit" onClick={() => testing()}>
              Click
            </button>
          </Col>
        </Row> */}
      </Container>
    </>
  );
}

export default AddProject;
