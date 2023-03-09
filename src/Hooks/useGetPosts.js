import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useGetPosts = (request_url="",request_data={}) => {

  const [data, setData] = useState(null);
  const getState = useSelector((state) => state);
  const urls={
    "service_details": "/front/service/details",
    "customer_projects": "/customer/projects"
  }
  const headers = {
    method: "POST",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Content-Type": "application/json",
    token: getState?.userSignin?.userInfo?.data?.token,
  };
  var requestOptions = {
    method: "POST",
    body: JSON.stringify(request_data),
    headers: headers,
    redirect: "follow",
  };
  useEffect(() => {
    if(request_url==''){
        setData({})
    } else{
        fetch(process.env.REACT_APP_URL + urls[request_url],requestOptions)
        .then((res) => res.json())
        .then((data) => setData(data));
    }

  }, [request_url]);

  return data;
};

export default useGetPosts;