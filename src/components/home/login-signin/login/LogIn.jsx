import React, { useContext, useState } from "react";
import "./LogIn.css";
import LogoProject from "../../../logoProject/LogoProject";

import { Grid, TextField } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { ButtonForMe } from "../../../ButtonForMe";
import { CheckLogInSignIn } from "../checkLogInSignIn/CheckLogInSignIn";
import { LegalNotice } from "../../../carehub/LegalNotice";
import axios from "axios";
import { toast } from "react-toastify";
import { FrameLoginSignIn } from "../frameLoginSignIn/FrameLoginSignIn";
import { AuthContext } from "../../../../App";

export function LogIn() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [role, setRole] = useState("");

  let userDispatch = null;
  const { user, dispatch} = useContext(AuthContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const login = { username: email, password: pass };

    try {
      const resp = await axios.post("http://localhost:8080/api/auth/login", login);
      toast.success("Đăng nhập thành công");
      console.log("resp", resp.data);
      
      if (resp.data.isUser) {
        // setRole("ROLE_USER")
        // authContext.updateRole("ROLE_USER");
        userDispatch = {
          type: "UPDATE_ROLE",
          payload: {
            username: "aa",
            role: "ROLE_USER"
          }
        };
        dispatch(userDispatch)
        localStorage.setItem("user", JSON.stringify(userDispatch))
        // navigate("/user/index/" + resp.data.idAccount);
      } else if(resp.data.isSale){
        // setRole("ROLE_SALE")
        // authContext.updateRole("ROLE_SALE");
        navigate("/sale/" + resp.data.idAccount);
        userDispatch = {
          type: "UPDATE_ROLE",
          payload: {
            username: "aa",
            role: "ROLE_SALE"
          }
        }
        dispatch(userDispatch)
        localStorage.setItem("user", JSON.stringify(userDispatch))
      }
       else if(resp.data.isEmployee){
        // setRole("ROLE_EMPLOYEE")
        // authContext.updateRole("ROLE_EMPLOYEE");
        navigate("/employee/index/" + resp.data.idAccount);
        userDispatch = {
          type: "UPDATE_ROLE",
          payload: {
            username: "aa",
            role: "ROLE_EMPLOYEE"
          }
        }
        dispatch(userDispatch)
        localStorage.setItem("user", JSON.stringify(userDispatch))
        

      } else{
        // setRole("ROLE_ADMIN")
        // authContext.updateRole("ROLE_ADMIN");
        navigate("/admin/home/" + resp.data.idAccount);
        userDispatch = {
          type: "UPDATE_ROLE",
          payload: {
            username: "aa",
            role: "ROLE_ADMIN"
          }
        }
        dispatch(userDispatch)
        localStorage.setItem("user", JSON.stringify(userDispatch))
      }
    } catch (err) {
      console.log(err);
      toast.error("Tên đăng nhập hoặc mật khẩu không đúng");
    }
  };
  console.log(role);
  const logIn = (
    <div className="form-login">
      <CheckLogInSignIn value={"login"} />

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="password"
              label="Password"
              type="password"
              onChange={(e) => setPass(e.target.value)}
            />
          </Grid>
          <div className="forgot-password">
            <div>
              <NavLink to={"/forgot-password"}>
                <span>Quên mật khẩu?</span>
              </NavLink>
            </div>
          </div>

          <Grid item xs={12} className="d-flex justify-content-center ">
            <ButtonForMe value={100} childrenButton={"Log In"} />
          </Grid>
        </Grid>
      </form>
      <div className="d-flex justify-content-center w-100 my-4">
        <div className="line"></div>
        <span className="mx-2">Hoặc</span>
        <div className="line"></div>
      </div>
      <div className="login-google">
        <div className="w-100 d-flex">
          <img
            src="https://res.cloudinary.com/dw4xpd646/image/upload/v1703840518/Cloudinary-React/tvvynaojavi1o0t7lwlr.png"
            alt=""
          />
          <div className="login-google-content">
            <h6>Tiếp tục với Google</h6>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <FrameLoginSignIn children={logIn} />
    </>
  );
}
