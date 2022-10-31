import React from "react";
import "../assets/styles/Widjet.scss";
import { Link } from "react-router-dom";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widjet = ({ type }) => {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        money: false,
        link: "See All users",
        icon: <PersonOutlinedIcon className="icon" style={{color:"crimson",backgroundColor:"rgba(255,0,0,0.2)"}}/>,
      };
      break;
      case "order":
        data = {
          title: "ORDERS",
          money: false,
          link: "View All orders",
          icon: <CreditCardOutlinedIcon className="icon" style={{color:"goldenrod",backgroundColor:"rgba(218,165,32,0.2)"}} />,
        };
        break;

        case "earnings":
            data = {
              title: "EARNINGS",
              money: true,
              link: "View net earnings",
              icon: <MonetizationOnOutlinedIcon className="icon" style={{color:"green",backgroundColor:"rgba(0,128,0,0.2)"}}/>,
            };
            break;
            case "balance":
            data = {
              title: "BALANCE",
              money: true,
              link: "See details",
              icon: <AccountBalanceWalletOutlinedIcon className="icon" style={{color:"purple",backgroundColor:"rgba(128,0,128,0.2)"}}/>,
            };
            break;
            default:
                break;
  }

  return (
    <div className="widjet">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">100 {data.money&&"$"}</span>
        <span className="link">
          <Link to={""} className="link">
            {data.link}
          </Link>
        </span>
      </div>
      <div className="right">
        <div className="percentage">
          <KeyboardArrowUpOutlinedIcon />
          20%
        </div>

        {data.icon}
      </div>
    </div>
  );
};

export default Widjet;
