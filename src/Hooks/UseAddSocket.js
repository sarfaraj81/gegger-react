import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import socketServcies from 'src/Utlilities/socketServices';

const useAddSocket = (flag) => {

    let dispatch=useDispatch()
    const [data, setData] = useState(null);
    const getState = useSelector((state) => state);

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
        body: JSON.stringify({}),
        headers: headers,
        redirect: "follow",
    };


    if(flag===false){
        socketServcies.initializeSocket()
        console.log("I am false")
        console.log("socket-customhool-test")
        fetch(process.env.REACT_APP_URL + '/customer/chat/messagelist',requestOptions)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            data?.data?.vendors.map((value,index) =>{
                console.log(value,"vendr");
                dispatch({ type: "FETCH_OLD_MESSAGE", payload: {oldmessages:value.messagelist,proposal_id:value._id} }) 
                socketServcies.on(value._id, (msg) => {
                    dispatch({ type: "NEW_MESSAGE", payload: {...msg,proposal_id:value._id} }) 
                })
            })

        });
    }
    console.log(flag)


    return data;
};

export default useAddSocket;