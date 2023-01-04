import React, { Component, Suspense } from "react";
//Header
import Header from "./Components/Header/Header";
//Styling
import "./index.scss";
//React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Bootstrap
import "bootstrap/dist/css/bootstrap.css";
//footer
import Footer from "./Components/Footer/Footer";
//Home module
import Home from "./Screens/Home/Home";
//Service Listing

import ProjectList from "./Screens/Project/List/ProjectList";
import ServiceDetial from "./Screens/Service/details/ServiceDetail";
import ProjectDetail from "./Screens/Project/details/ProjectDetail";
import Admin from "./Screens/Admin/Admin";
import Login from "./Authenticator/Login/Login";
import Signup from "./Authenticator/Signup/Signup";
import ServiceList from "./Screens/Service/List/ServiceList";
import Customer from "./Screens/Customer/Customer";
import Proposals from "./Screens/Customer/Proposals/Proposals";
import Projects from "./Screens/Customer/Projects/Projects";
import ProtectedRoutes from "./protected.routes";
import AddProject from "./Screens/Customer/Projects/AddProject";
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Suspense fallback={loading}>
          {/* protected routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" name="dasboard" element={<ProtectedRoutes />}>
              <Route exact path="/admin_dashboard" element={<Admin />} />
              <Route exact path="/customer_dashboard" element={<Customer />} />
              <Route exact path="/customer_proposals" element={<Proposals />} />
              <Route exact path="/customer_projects" element={<Projects />} />
              <Route
                exact
                path="/customer_project_add"
                element={<AddProject />}
              />
            </Route>
            {/* <Home />
          <ServiceList /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/services" element={<ServiceList />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/vendor_detail/:id" element={<ServiceDetial />} />
            <Route path="/project_detail/:id" element={<ProjectDetail />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      {/* <ProjectListing /> */}
      <Footer />
    </div>
  );
}

export default App;
