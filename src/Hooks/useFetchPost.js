import { useState, useEffect } from "react";

function useFetchPost(url, options, headerData) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setIsLoading(true);
  //       try {
  //         const res = await fetch(url, {
  //           method: "POST",
  //           ...options,
  //         });
  //         const data = await res.json();
  //         setResponse(data);
  //       } catch (error) {
  //         setError(error);
  //       }
  //       setIsLoading(false);
  //     };

  //     fetchData();
  //   }, [url]);

  const fetchByPost = async () => {
    var requestOptions = {
      method: "POST",
      body: options,
      headers: headerData,
      redirect: "follow",
    };
    fetch(url, requestOptions)
      .then((result) => result.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  };
  return { response, error, isLoading, fetchByPost, data };
}
export default useFetchPost;
