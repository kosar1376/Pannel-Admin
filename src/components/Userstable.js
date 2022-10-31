import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchusers } from "../redux/Users/Usersactions";
import { Deleteuser } from "../redux/Users/Usersactions";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Userstable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Userstable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchusers());
  }, []);

  const Users = useSelector((state) => state.usersdata.users);
  const loading = useSelector((state) => state.usersdata.loading);
  const error = useSelector((state) => state.usersdata.error);

  const Delete = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(Deleteuser(id));
      dispatch(fetchusers());
      if (error) {
        toast.error(`${error}😔`, {
          position: toast.POSITION.TOP_CENTER,
          theme: "dark",
        });
      } else {
        toast.success(`successfuly Deleted !!😊 please reload`, {
          position: toast.POSITION.TOP_CENTER,
          theme: "dark",
        });
      }
    }
  };

  if (loading) {
    return <h1 className="loadingtext">Loadding...</h1>;
  }
  if (error) {
    return <div className="errortext">{error}</div>;
  } else {
    return (
      <div>
        <div className="userdatatable">
          <button
            className="CreateNewUser"
            onClick={() => {
              navigate("new");
            }}
          >
            Add New Users
          </button>
          <TableContainer className="table1">
            <Table>
              <TableHead>
                <TableRow className="row">
                  <TableCell className="cellheader">Image</TableCell>
                  <TableCell className="cellheader">Firsname</TableCell>
                  <TableCell className="cellheader">Lastname</TableCell>
                  <TableCell className="cellheader">Phone</TableCell>
                  <TableCell className="cellheader">Email</TableCell>
                  <TableCell className="cellheader">Usernsme</TableCell>
                  <TableCell className="cellheader">Password</TableCell>
                  <TableCell className="cellheader">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Users.map((user) => (
                  <TableRow
                    key={user.id}
                    style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}
                    className="hover"
                  >
                    <TableCell className="cell">
                      <div className="cellwithimg">
                        <img src={user.image} className="image" />
                      </div>
                    </TableCell>
                    <TableCell className="cell">{user.firstname}</TableCell>
                    <TableCell className="cell">{user.lastname}</TableCell>
                    <TableCell className="cell">{user.phone}</TableCell>
                    <TableCell className="cell">{user.email}</TableCell>
                    <TableCell className="cell">{user.username}</TableCell>
                    <TableCell className="cell">{user.password}</TableCell>
                    <TableCell className="cell buttonwrapper">
                      <button
                        className="edituser"
                        onClick={() => navigate(`${user.id}`)}
                      >
                        <ModeEditOutlineOutlinedIcon className="editicon" />
                        Edit
                      </button>
                      <button
                        className="deleteuser"
                        onClick={() => {
                          Delete(user.id);
                        }}
                      >
                        <DeleteIcon className="editicon" />
                        Delete
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <p
            style={{
              textAlign: "center",
              marginTop: "10px",
              fontSize: "25px",
              color: "#7451f8",
              fontWeight: "600",
              textShadow: "3px 3px 2px lightgray",
            }}
          >
            {" "}
            Reload and Scroll to see New added Users
          </p>
        </div>
      </div>
    );
  }
};

export default Userstable;
