import React, { useState } from "react";
import "./LogIn.css";
import LogoProject from "../../../logoProject/LogoProject";

import { Grid, TextField } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { ButtonForMe } from "../../../ButtonForMe";
import { CheckLogInSignIn } from "../checkLogInSignIn/CheckLogInSignIn";
import { LegalNotice } from "../../../carehub/LegalNotice";
import axios from "axios";
import { toast } from "react-toastify";

export function LogIn() {
  let navigate = useNavigate();
  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    const login =
    { username: email, password:pass }

    try {
      const resp = await axios.post("http://localhost:8080/api/auth/login", login);
      toast.success("Đăng nhập thành công");
      navigate("/user/index/" + resp.data.idUser);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <div className="ms-5 my-2">
          <LogoProject />
        </div>
        <div className="row ">
          <div className="col-12 step"></div>
        </div>
      </div>
      <div className="form-login">
        <CheckLogInSignIn value={"login"} />

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth id="email" label="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth id="password" label="Password" type="password" onChange={(e) => setPass(e.target.value)} />
            </Grid>
            <div className="forgot-password">
              <div>
                <span>Quên mật khẩu?</span>
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

      <div className="legal-notice-user">
        <LegalNotice />
      </div>
    </>
  );
}
