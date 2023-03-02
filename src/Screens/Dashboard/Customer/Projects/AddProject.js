import React from "react";
import { Formik, Form, Field } from "formik";
import { Col, Container, Row } from "react-bootstrap";

import Wrapper from "src/Utlilities/Wrapper";
import useFetchAndPost from "src/Hooks/useFetchAndPost";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import useFetchPost from "src/Hooks/useFetchPost";
import usePost from "src/Hooks/usePost";
import axios from "axios";
import useFetch from "src/Hooks/useFetch";
function AddProject() {
  const [token, setToken] = useState({ token: "" });
  const { userSignin: userInfo } = useSelector((state) => state);
  const [project, setProject] = useState("");
  const wrapperHeight = "11vh";
  const getState = useSelector((state) => state);
  const [dataState, setDataState] = useState();
  const [ids, setIds] = useState({
    category: "",
    sub_category: "",
  });
  const [categoryId, setCategoryId] = useState();
  const [subCategoryId, setSubCategoryId] = useState();
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

  const { response, isLoading, fetchByPost, data } = usePost(
    process.env.REACT_APP_URL + "/customer/project/add",
    requestOptions
  );
  useEffect(() => {
    if (dataState) {
    }
    fetchByPost();
  }, [dataState, token]);
  // console.log(getState?.userSignin?.userInfo);

  const {
    error,
    isPending,
    data: categoryData,
  } = useFetch(process.env.REACT_APP_URL + "/front/");
  // console.log("category", categoryData);
  useEffect(() => {
    if (categoryData) {
      console.log(categoryData, "boom");
    }
  }, [categoryData]);
  const captureCatId = (e) => {
    // setCategoryID(e.target.value);
    setCategoryId(e.target.value);
    // setDataState(...dataState, );
    console.log(ids);
  };
  const captureSubcatId = (e) => {
    // setSubCategoryID(e.target.value);
    setSubCategoryId(e.target.value);
    // setSubCategoryID(e.target.value);
    // setDataState(...dataState);
    console.log(ids);
  };
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
                category: "",
                sub_category: "",
                location: "",
                lat: "5.0",
                long: "4.0",
              }}
              onSubmit={(values, { setSubmitting }) => {
                // Submit the form
                values.category = categoryId;
                values.sub_category = subCategoryId;
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
                        <div className="label-div">
                          <label>Category:</label>
                          <select onChange={(e) => captureCatId(e)}>
                            {categoryData?.data?.categories?.map((cat) => (
                              <option key={cat._id} value={cat._id}>
                                {cat.title}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* <Field
                          type="text"
                          name="category"
                          placeholder="Category"
                        /> */}
                      </Col>
                      <Col md={6} sm={6} lg={6}>
                        <div className="label-div">
                          <label>Sub-category:</label>
                          <select onChange={(e) => captureSubcatId(e)}>
                            {categoryData?.data?.categories?.map((cat) => (
                              <option key={cat._id} value={cat._id}>
                                {cat.title}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* <Field
                          type="text"
                          name="sub_category"
                          placeholder="Sub Category"
                        /> */}
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
