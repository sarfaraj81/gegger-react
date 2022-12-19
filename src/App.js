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
import ProjectDetail from "./Screens/Project/List/ProjectList";
import Admin from "./Dashboard/Admin/Admin";
import Login from "./Authenticator/Login/Login";
import Signup from "./Authenticator/Signup/Signup";
import ServiceList from "./Screens/Service/List/ServiceList";
function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Home />
          <ServiceList /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services" element={<ServiceList />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/vendor_detail/:id" element={<ServiceDetial />} />
          <Route path="/project_detail/:id" element={<ProjectDetail />} />
          <Route path="/admin_dashboard" element={<Admin />} />
        </Routes>
      </BrowserRouter>
      {/* <ProjectListing /> */}
      <Footer />
    </div>
  );
}

export default App;
