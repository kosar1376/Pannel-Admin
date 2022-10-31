import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../assets/styles/Home.scss";
import Widjet from "../components/Widjet";
import Featured from "../components/Featured";
import Chart from "../components/Chart";
import Widjetsm from "../components/Latesttable/Widjetsm";
import Widjetlg from "../components/Latesttable/Widjetlg";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="widjets">
          <Widjet type="user" />
          <Widjet type="earnings" />
          <Widjet type="balance" />
          <Widjet type="order" />
        </div>
        <div className="charts">
            <Featured/>
            <Chart/>
        </div>

      
        
        <div className="Homelatesttable">
          <Widjetsm/>
          <Widjetlg/>

      

        </div>
      </div>
    </div>
  );
};

export default Home;
