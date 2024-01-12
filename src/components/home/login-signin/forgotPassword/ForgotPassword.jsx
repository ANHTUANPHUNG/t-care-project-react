import React, { useState } from "react";
import { useFormik } from "formik";
import { FrameLoginSignIn } from "../frameLoginSignIn/FrameLoginSignIn";
import { Grid, TextField } from "@mui/material";
import { ButtonForMe } from "../../../ButtonForMe";
import axios from "axios";
import { NavLink } from "react-router-dom";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import "./ForgotPassword.css";

export function ForgotPassword() {
  const [checkEmail, setCheckEmail] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      const emailSubmit = {
        email: values.email,
      };
      axios
        .post("http://localhost:8080/api/auth/check-mail", emailSubmit)
        .then((resp) => {
          console.log(resp.data);
          setCheckEmail(true);
          return resp.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  const forgotPassword = (
    <>
      <div className="forgot-password-container">
        <h2> Nhập Email của bạn</h2>
        <div className="forgot-password-header"></div>
        <span>Vui lòng nhập email để tìm kiếm tài khoản của bạn.</span>
        <form className="mt-2" onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                size="small"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>

            <div className="forgot-password-button">
              <div className="forgot-password-button-left">
                <NavLink to={"/login"} className="forgot-password-button-left-style-nav-link">
                  <div className="forgot-password-button-left-style">
                    <span>Hủy</span>
                  </div>
                </NavLink>
              </div>
              <Grid item xs={4} className="forgot-password-button-right">
                <ButtonForMe value={100} childrenButton={"Tìm kiếm"} type="submit" />
              </Grid>
            </div>
          </Grid>
        </form>
      </div>
    </>
  );

  return <FrameLoginSignIn children={forgotPassword} />;
}
