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
import Home from "./Components/Home/Home";
//Service Listing

import Wrapper from "../src/Utlilities/Wrapper";
import VendorServices from "./Components/FrontView/VendorServices";
import ProjectList from "./Components/FrontView/ProjectList";
import VendorDetail from "./Components/FrontView/VendorDetail";
import ProjectDetail from "./Components/FrontView/ProjectDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Home />
          <ServiceList /> */}
          <Route path="/services" element={<VendorServices />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/vendor_detail" element={<VendorDetail />} />
          <Route path="/project_detail" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
      {/* <ProjectListing /> */}
      <Footer />
    </div>
  );
}

export default App;
