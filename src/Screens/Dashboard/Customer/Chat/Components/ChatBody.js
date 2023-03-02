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
import { useEffect } from "react";

// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

const ChatBody = (type) => {
    const getState = useSelector((state) => state);
    const [inputs,setInput] = useState({});
    const { id } = useParams();

    return (<>
        <div className="chatbody">
        {
            getState?.NewChats?.proposalNewMessages[id]?.map((value,index)=>{
                return (
                    <div className={"chatmessage message-"+ value.type +" message-"+value.from}>
                       {value.type=='message' && value.message}
                       {value.type=='proposal_update' && (<ChatProposal message={value} />) }   
                    </div>
                    
                )
            
            })
        }
        </div>
                    <div className="chatinput">
                <textarea name="chatmessage" onChange={(e) => setInput({...inputs,[inputs.chatMessage]:e.target.value })}>{inputs?.chatMessage}</textarea>
                <button className="btn btn-info">Send</button>
            </div>

    </>)
}

export default ChatBody;
