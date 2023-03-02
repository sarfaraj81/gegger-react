import Sidebar from "src/Screens/Dashboard/Customer/Components/Sidebar/Sidebar";
import "src/Screens/Dashboard/Customer/Customer.scss";
import Widget from "src/Screens/Dashboard/Components/Widget/Widget";
import Featured from "src/Screens/Dashboard/Components/Featured/Featured";
import Chart from "src/Screens/Dashboard/Components/Chart/Chart";
import Table from "src/Screens/Dashboard/Components/Table/Table";
import Title from "src/Screens/Dashboard/Components/Title_text/Title";
import Wrapper from "src/Utlilities/Wrapper";

const wrapperHeight = "11vh";
const CustomerWrapper = (props) => {
  return (
    <>
      <Wrapper wrapperHeight={wrapperHeight} />
      <div className="customer">
        <Sidebar />
        <div className="customerContainer">
          {props.children}
        </div>
      </div>
    </>
  );
};

export default CustomerWrapper;
