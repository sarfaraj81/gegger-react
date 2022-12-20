import React from "react";
import CategoryList from "./components/CategoryList";
import HeroSection from "./components/HeroSection";
import VendorCard from "./components/VendorCard";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/authSlice";
function Home() {
  const user = useSelector(selectUser);

  return (
    <>
      <HeroSection />
      <CategoryList />
      {/* <VendorCard /> */}
    </>
  );
}

export default Home;
