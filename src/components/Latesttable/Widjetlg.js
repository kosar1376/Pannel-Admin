import React from "react";
import "../../assets/styles/WidjetLg.scss";
import {latestTransactions} from '../../Database/LatestTransactions'

const Widjetlg = () => {
  const Button = ({ type }) => {
    return <button className={"widjetlgbtn " + type}>{type}</button>;
  };

  return (
    <div className="widjetlg">
      <h3 className="widjetlgtitle">Latest transactions</h3>
      <table className="widjetlgtable">
        <tr className="widjetlgtr">
          <th className="widjetlgth">custumor</th>
          <th className="widjetlgth">Dtae</th>
          <th className="widjetlgth">amount</th>
          <th className="widjetlgth">Status</th>
        </tr>

     {latestTransactions.map(item=>   <tr className="widjetlgtr" key={item.id}>
          <td className="widjetlgUser">
            <img src={item.image} className="widjetlgimg" alt="avatar" />
            <span className="widjetlgname">{item.firstname}</span>
          </td>

          <td className="widjeclgDate">{item.Date}</td>

          <td className="widjeclgamount">{item.amount}</td>
          <td className="widjeclgstatus">
            <Button type={item.type} />
          </td>
        </tr>)}


        
      </table>
    </div>
  );
};

export default Widjetlg;
