import React from "react";
import "../assets/styles/Sidebar.scss";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FaceIcon from "@mui/icons-material/Face";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <AdminPanelSettingsIcon className="icon" />
        <span className="logo">panel Admin </span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Dashboard</p>
          <li>
            <DashboardIcon className="icon" />
            <Link to={"/home"} className="link">
              Home
            </Link>
          </li>
          <li>
            <TrendingUpIcon className="icon" />
            <Link to={""} className="link">
              Analytics
            </Link>
          </li>

          <p className="title">Quick Menue</p>
          <li>
            <PersonIcon className="icon" />
            <Link to={"/users"} className="link">
              users
            </Link>
          </li>

          <li>
            <PendingActionsIcon className="icon" />
            <Link to={""} className="link">
              Transactions
            </Link>
          </li>
          <li>
            <SignalCellularAltIcon className="icon" />
            <Link to={""} className="link">
              Reports
            </Link>
          </li>
          <p className="title">Notifications</p>
          <li>
            <MailOutlineIcon className="icon" />
            <Link to={""} className="link">
              Mail
            </Link>
          </li>
          <li>
            <DynamicFeedOutlinedIcon className="icon" />
            <Link to={""} className="link">
              Feedback
            </Link>
          </li>
          <li>
            <MessageOutlinedIcon className="icon" />
            <Link to={""} className="link">
              Messages
            </Link>
          </li>
          <p className="title">USER</p>
          <li>
            <FaceIcon className="icon" />
            <Link to={""} className="link">
              Profile
            </Link>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <Link to={""} className="link">
              Logout
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="coloroption"></div>
        <div className="coloroption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
