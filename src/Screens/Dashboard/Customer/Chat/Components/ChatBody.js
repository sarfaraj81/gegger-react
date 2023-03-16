import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ChatProposal from 'src/Screens/Dashboard/Customer/Chat/Components/ChatProposal';
import useSavePosts from "src/Hooks/useSavePosts";
import { useEffect } from "react";

// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

const ChatBody = (type) => {
    const getState = useSelector((state) => state);
    const { id } = useParams();
    const [inputs,setInput] = useState({proposal_id:id});
    const [request,sendMessage] = useState({url:'',data:{}});

    const message=useSavePosts(request.url,request.data)

    function SendMessage(){
        sendMessage({url:'send_message',data:inputs})
        setInput({...inputs,message:""})
    }
    useEffect(()=>{
        if(inputs.message==''){
            sendMessage({url:'',data:{}})
        }
    },[inputs.message])
    
    return (<>
        <div className="chatbody">
        {
            getState?.NewChats?.proposalNewMessages[id]?.map((value,index)=>{
                return (
                    <div className={"chatmessage message-"+ value.type +" message-"+value.from}>
                       <pre>
                        
                       {value.type=='message' && value.message}
                       {value.type=='proposal_update' && (<ChatProposal message={value} />) } 
                       </pre>  
                    </div>
                    
                )
            
            })
        }
        </div>
                    <div className="chatinput">
                <textarea name="message" onKeyUp={(e) => {  (e.key == "Enter" && !e.shiftKey) && SendMessage() }} onChange={(e) => setInput({...inputs,message:e.target.value })} value={inputs?.message} />
                <button className="btn btn-info" onClick={(e) => SendMessage()}>Send</button>
            </div>

    </>)
}

export default ChatBody;
