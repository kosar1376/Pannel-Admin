import React, { useState } from "react";
import "../assets/styles/Login.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import join from "../assets/images/join.svg";
import login1 from "../assets/images/Login1.svg";







const Login = () => {
  const [isveryfied,setIsveryfied]=useState(false)
  const navigate = useNavigate();

  const [Class, setClass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/home");
  };
  const onSubmit1 = (data1) => {
    console.log(data1);
    navigate("/home");
  };

  const Signup = () => {
    setClass(true);
  };

  const Signin = () => {
    setClass(false);
  };

  const onChangeHandle=(value)=>{
 

setIsveryfied(true);
console.log(value);

  }

  return (
    <div className={Class ? "container1 sign-up-mod" : "container1"}>
      <div className="forms-container1">
        <div className="signin-signup1">
          <form className="sign-in-form1" onSubmit={handleSubmit(onSubmit1)}>
            <h2 className="title1">Sign in</h2>
            <div className="input-filed1">
              <i class="fa fa-user"></i>
              <input
                type={"text"}
                placeholder="Username"
                {...register("uusername")} 
               
                name='bb'
              />
           
            </div>
            <div className="input-filed1">
              <i class="fa fa-lock"></i>
              <input
                type={"password"}
                placeholder="Password"
                {...register("password")}
              />
            </div>
            <ReCAPTCHA
              style={{margin:"10px 0"}}
    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
    onChange={onChangeHandle}
   
  />
          <input type={"submit"} className="btn1 solid" value={"sgin in"} disabled={!isveryfied} style={{backgroundColor:!isveryfied && "lightgray"}} />
            <p className="social-text1">Or sign in with social platforms</p>
            <div className="social-mediaa">
              <Link to={""} className="social-icoon">
                <i class="fa fa-facebook-f"></i>
              </Link>
              <Link to={""} className="social-icoon">
                <i class="fa fa-twitter"></i>
              </Link>
              <Link to={""} className="social-icoon">
                <i class="fa fa-google"></i>
              </Link>
            </div>

          </form>

          <form className="sign-up-form1" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="title1">Sign up</h2>
            <div className="input-filed1">
              <i class="fa fa-user"></i>
              <input
                type={"text"}
                placeholder="Username"
                {...register("Username")}
                
              />
            </div>

            <div className="input-filed1">
              <i class="fa fa-envelope"></i>
              <input
                type={"email"}
                placeholder="Email"
                {...register("Email")}
              />
              
            </div>

            <div className="input-filed1">
              <i class="fa fa-lock"></i>
              <input
                type={"password"}
                placeholder="Password"
                {...register("Password")}
              />
            </div>
            <ReCAPTCHA
            style={{margin:"10px 0"}}
    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
    onChange={onChangeHandle}
   
  />
    
            <input type={"submit"} className="btn1 solid" value={"sign up"} disabled={!isveryfied} style={{backgroundColor:!isveryfied && "lightgray"}} />
            <p className="social-text1">Or sign up with social platforms</p>
            <div className="social-mediaa">
              <a href="" className="social-icoon">
                <i class="fa fa-facebook-f"></i>
              </a>
              <a href="" className="social-icoon">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="" className="social-icoon">
                <i class="fa fa-google"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container1">
        <div className="panel1 panel-left1">
          <div className="content1">
            <h3>New here ? </h3>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate
            </p>
            <button
              className="btn1 transparent"
              id="sign-up-btn"
              onClick={() => {
                Signup();
              }}
            >
              Sign up
            </button>
          </div>
          <img src={join} className="image1" alt="signup" />
        </div>

        <div className="panel1 panel-right1">
          <div className="content1">
            <h3 className="h3">One of Us ? </h3>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate
            </p>
            <button
              className="btn1 transparent"
              id="sign-in-btn"
              onClick={() => {
                Signin();
              }}
            >
              Sign in
            </button>
          </div>
          <img src={login1} className="image1" alt="signin" />
     
    
        </div>
      </div>
    </div>
  );
};

export default Login;
