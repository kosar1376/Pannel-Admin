import React, { useState, useEffect } from "react";
import "../assets/styles/SingleUser.scss";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleuser, userUpdator } from "../redux/Users/Usersactions";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const SingleUser = () => {
  const [image, setImage] = useState("");

  const [user, setuser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    username: "",
    password: "",
  });

  const { userid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSingleuser(userid));
  }, []);

  const user1 = useSelector((state) => state.usersdata.user);

  useEffect(() => {
    setuser({ ...user1 });
  }, [user1]);

  const changeHand = (event) => {
    setuser({ ...user, [event.target.name]: event.target.value });
  };

  const ClickHand = (event) => {
    event.preventDefault();
    dispatch(userUpdator(userid, user));
    navigate("/users");
  };

  return (
    <div className="singleuser">
      <Sidebar />
      <div className="singleUserContainer">
        <Navbar />
        <div className="container11">
          <div className="infoBox">
            <img src={user.image} alt={user.username} />

            <div className="info">
              <div className="infoDetail">
                <PersonIcon className='icon' />
                <h5>Firstname : </h5>
                <div>{user.firstname}</div>
              </div>

              <div className="infoDetail">
                <PermContactCalendarOutlinedIcon className='icon'/>
                <h5>Lastname : </h5>
                <div>{user.lastname}</div>
              </div>

              <div className="infoDetail">
                <EmailIcon className='icon'/>
                <h5>Email : </h5>
                <div>{user.email}</div>
              </div>

              <div className="infoDetail">
                <PhoneIcon className='icon'/>
                <h5>Phone Number : </h5>
                <div>{user.phone}</div>
              </div>

              <div className="infoDetail">
                <AccountCircleIcon className='icon'/>
                <h5>Username : </h5>
                <div>{user.username}</div>
              </div>

              <div className="infoDetail">
                <VpnKeyIcon className='icon'/>
                <h5>Password : </h5>
                <div>{user.password}</div>
              </div>
            </div>
          </div>

          <div className="editBox">
            <img
              src={
                image
                  ? URL.createObjectURL(image)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="avatar"
            />
            <form>
              <div className="inputcontainer">
                <label>Firsname : </label>
                <input
                  type={"text"}
                  name="firstname"
                  value={user.firstname || ""}
                  onChange={changeHand}
                />
              </div>

              <div className="inputcontainer">
                <label>Lastname : </label>
                <input
                  type={"text"}
                  name="lastname"
                  value={user.lastname || ""}
                  onChange={changeHand}
                />
              </div>

              <div className="inputcontainer">
                <label>Email : </label>
                <input
                  type={"email"}
                  name="email"
                  value={user.email || ""}
                  onChange={changeHand}
                />
              </div>

              <div className="inputcontainer">
                <label>Phone Number : </label>
                <input
                  type={"text"}
                  name="phone"
                  value={user.phone || ""}
                  onChange={changeHand}
                />
              </div>

              <div className="inputcontainer">
                <label>Username : </label>
                <input
                  type={"text"}
                  name="username"
                  value={user.username || ""}
                  onChange={changeHand}
                />
              </div>

              <div className="inputcontainer">
                <label>password : </label>
                <input
                  type={"text"}
                  name="password"
                  value={user.password || ""}
                  onChange={changeHand}
                />
              </div>

              <div className="inputcontainer">
                <label htmlFor="file">
                  Image : <DriveFolderUploadOutlinedIcon />{" "}
                </label>
                <input
                  type={"file"}
                  name="image"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(event) => {
                    setImage(event.target.files[0]);
                  }}
                />
              </div>

              <button type="submit" onClick={ClickHand}>
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
