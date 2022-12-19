import "./login.scss";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
//formik import
import { Formik } from "formik";
import * as Yup from "yup";

//imports for login functionalty

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import { useEffect } from "react";

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(3, "Password must be at least 8 characters"),
});

function Login() {
  //states
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      login({
        email: user,
        password: pwd,
        token: token,
      })
    );
  }, [user, pwd, token, dispatch]);
  return (
    <Container fluid className="login-container">
      <Row>
        <Col md={12} xs={12}>
          {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
          <Formik
            validationSchema={schema}
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values) => {
              setUser(values.email);
              setPwd(values.password);
              // Alert the input values of the form that we filled
              console.log(values.email, values.password);
              axios
                .post(process.env.REACT_APP_URL + "/auth/", { ...values })
                .then((res) => {
                  console.log(res);
                  console.log(res.data);
                  setToken(res.data.data.token);
                  setUser(values.email);
                  setPwd(values.password);
                });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <div className="login">
                <div className="form">
                  {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                  <form noValidate onSubmit={handleSubmit}>
                    <span>Login</span>
                    {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="Enter email id / username"
                      className="form-control inp_text"
                      id="email"
                    />
                    {/* If validation is not passed show errors */}
                    <p className="error">
                      {errors.email && touched.email && errors.email}
                    </p>
                    {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder="Enter password"
                      className="form-control"
                    />
                    {/* If validation is not passed show errors */}
                    <p className="error">
                      {errors.password && touched.password && errors.password}
                    </p>
                    {/* Click on submit button to submit the form */}
                    <button type="submit">Login</button>
                  </form>
                </div>
              </div>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
