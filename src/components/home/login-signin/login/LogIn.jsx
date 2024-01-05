import React, { useState } from "react";
import "./LogIn.css";
import LogoProject from "../../../logoProject/LogoProject";

import { Grid, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ButtonForMe } from "../../../ButtonForMe";
import { CheckLogInSignIn } from "../checkLogInSignIn/CheckLogInSignIn";
import { LegalNotice } from "../../../carehub/LegalNotice";

export function LogIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
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
              <TextField fullWidth id="email" label="Email" type="email" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth id="password" label="Password" type="password" />
            </Grid>
            <div className="forgot-password">
              <div>
                <span>Forgot Password?</span>
              </div>
            </div>

            <Grid item xs={12} className="d-flex justify-content-center ">
              <NavLink to="/user/index" style={{ width: "100%" }}>
                <ButtonForMe value={100} childrenButton={"Log In"} />
              </NavLink>
            </Grid>
          </Grid>
        </form>
        <div className="d-flex justify-content-center w-100 my-4">
          <div className="line"></div>
          <span className="mx-2">OR</span>
          <div className="line"></div>
        </div>
        <div className="login-google">
          <div className="w-100 d-flex">
            <img
              src="https://res.cloudinary.com/dw4xpd646/image/upload/v1703840518/Cloudinary-React/tvvynaojavi1o0t7lwlr.png"
              alt=""
            />
            <div className="login-google-content">
              <h6>Continue With Google</h6>
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
