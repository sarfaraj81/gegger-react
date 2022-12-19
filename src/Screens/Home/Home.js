import React from "react";
import CategoryList from "./components/CategoryList";
import HeroSection from "./components/HeroSection";
import VendorCard from "./components/VendorCard";

function Home() {
  return (
    <>
      <HeroSection />
      <CategoryList />
      {/* <VendorCard /> */}
    </>
  );
}

export default Home;
