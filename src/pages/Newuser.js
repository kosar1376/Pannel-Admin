import React, { useState } from "react";
import "../assets/styles/NewUser.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import profile from "../assets/images/profile.svg";

import PersonIcon from "@mui/icons-material/Person";
import PortraitIcon from "@mui/icons-material/Portrait";
import MailIcon from "@mui/icons-material/Mail";
import FaceIcon from "@mui/icons-material/Face";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Newuser = () => {
  
  const [data1, setData1] = useState({});
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setData1(data);
  };

  const onSubmit1 = (data) => {
    const tutal = { ...data1, ...data };
    axios.post("  http://localhost:8000/users", tutal);
    navigate("/users");
  };



  return (
    <div className="NewUser">
      <Sidebar />
      <div className="newUserContainer">
        <Navbar />

     <div className="container111">
       <div className="imgcontainer">
         <img src={profile}/>
       </div>
      


       <div className="formcontainer111">
         <div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-filed111">
              <FaceIcon className='icon'/>
              <input type={"text"} placeholder='Firstname' {...register("firstname")}/>
            </div>

            <div className="input-filed111">
              <PortraitIcon className='icon'/>
              <input type={"text"} placeholder='Lastname' {...register("lastname")}/>
            </div>
            <div className="input-filed111">
              <MailIcon className='icon'/>
              <input type={"email"} placeholder='Email' {...register("email")}/>
            </div>
            <div className="input-filed111">
              <LocalPhoneIcon className='icon'/>
              <input type={"text"} placeholder='Phone' {...register("phone")}/>
            </div>
          </form>
         </div>

         <div>
         <form onSubmit={handleSubmit(onSubmit1)}>
            <div className="input-filed111">
              <PersonIcon className='icon'/>
              <input type={"text"} placeholder='username' {...register("username")}/>
            </div>
            <div className="input-filed111">
              <VpnKeyIcon className='icon'/>
              <input type={"password"} placeholder='Password' {...register("password")}/>


            </div>

            <div >
            <label htmlFor="file"> Image <DriveFolderUploadOutlinedIcon className='icon icon1'/></label>  
              <input type={"file"}  {...register("image")} id='file' style={{display:"none"}}/>


            </div>

            <div >
              <input type={"submit"} className='btn'/>


            </div>

            
            
           
          </form>
          
         </div>
         

       </div>
       <p className="social-text">Or Adding with social platforms</p>
       <div className="social-media">
         <Link to='' className="social-icon"><FacebookOutlinedIcon/></Link>
         <Link to='' className="social-icon"><TwitterIcon/></Link>
         <Link to='' className="social-icon"><GoogleIcon/></Link>
         <Link to='' className="social-icon"><LinkedInIcon/></Link>
       </div>
      
     </div>
      </div>
    </div>
  );
};

export default Newuser;
