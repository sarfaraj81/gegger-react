import "./Signup.scss";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//formik import
import { Formik } from "formik";
import * as Yup from "yup";

// Creating schema
const schema = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  phone: Yup.number().required("Please enter your phone number"),
  password: Yup.string()
    .required("Password is required")
    .min(5, "Your password is too short.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  confirmpassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

function Signup() {
  return (
    <Container fluid className="login-container">
      <Row>
        <Col md={12} xs={12}>
          {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
          <Formik
            validationSchema={schema}
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              // Alert the input values of the form that we filled
              alert(JSON.stringify(values));
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
                    <span>Sign Up</span>
                    {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                    <input
                      type="name"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      placeholder="Enter your name"
                      className="form-control inp_text"
                      id="name"
                    />
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
                    <input
                      type="password"
                      name="confirmpassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmpassword}
                      placeholder="Re-enter your password"
                      className="form-control"
                    />
                    {/* If validation is not passed show errors */}
                    <p className="error">
                      {errors.password && touched.password && errors.password}
                    </p>
                    {/* Click on submit button to submit the form */}
                    <button type="submit">Sign Up</button>
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

export default Signup;
