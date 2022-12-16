import Sidebar from "../Components/Sidebar/Sidebar";
import "./Admin.scss";
import Widget from "../Components/Widget/Widget";
import Featured from "../Components/Featured/Featured";
import Chart from "../Components/Chart/Chart";
import Table from "../Components/Table/Table";
import Title from "../Components/Title_text/Title";
import { useState } from "react";
import { useAuth } from "../../Components/Hooks/useAuth";
const Admin = () => {
  const { token, updateToken } = useAuth();
  console.log(token);

  return (
    <div className="admin">
      <Sidebar />

      <div className="adminContainer">
        <Title />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>

        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
        {/* <div>
          <button onClick={() => updateToken("satyam_we are good")}>
            Auth Update
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Admin;
