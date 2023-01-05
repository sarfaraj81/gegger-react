import React from "react";
import CategoryList from "./components/CategoryList";
import HeroSection from "./components/HeroSection";
import useFetch from "../../Hooks/useFetch";
import useFetchAndPost from "../../Hooks/useFetchAndPost";
function Home() {
  //csutom - fetch hook
  // const { error, isPending, data } = useFetch(
  //   process.env.REACT_APP_URL + "/front/"

  // );

  const { error, data } = useFetchAndPost(
    process.env.REACT_APP_URL + "/front/"
  );
  return (
    <>
      <HeroSection />
      <CategoryList homeData={data?.data?.categories} />
      {/* <VendorCard /> */}
    </>
  );
}

export default Home;
