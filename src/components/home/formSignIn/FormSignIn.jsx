import React, { useState } from "react";
import "./FormSignIn.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Checkbox, FormControl, FormControlLabel, FormLabel } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { ButtonForMe } from "../../ButtonForMe";
import axios from "axios";
import { toast } from "react-toastify";

export function FormSignIn({ url, marginContainer, marginHeader, termAgreed, color }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [personID, setPersonId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [gender, setGender] = useState("");
  let navigate = useNavigate();

  const handleGenderClick = (selectedGender) => {
    setGender(selectedGender);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    setPasswordError("");
    console.log("Form submitted!");
    axios.post("http://localhost:8080/api/employees/account", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      gender: gender,
      personID: personID
    })
    .then(response => {
      toast.success("Tài khoản được tạo thành công")
      console.log('Data sent successfully!');
      console.log(response);
      navigate(url + "/" + response.data);
    })
    .catch(error => {
      console.error('Error sending data:', error);
    });
  };

  return (
    <div className="container-form-sign-in" style={{ margin: marginContainer || "0 27%" }}>
      <div>
        <div className="form-sign-in-header" style={{ margin: marginHeader || "3% 16%" }}>
          <h3 className="form-sign-in-content">
            {marginHeader || "Một số thông tin về bản thân bạn"}
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth id="email" label="Email" type="email" value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth id="firstName" label="Tên" value={firstName}
                onChange={(e) => setFirstName(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth id="lastName" label="Họ" value={lastName}
                onChange={(e) => setLastName(e.target.value)} />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth id="password" label="Mật khẩu" type="password" value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="confirmPassword"
                label="Xác nhận mật khẩu"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={Boolean(passwordError)}
                helperText={passwordError}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth id="personID" label="Số Căn Cước Công Dân" value={personID}
                onChange={(e) => setPersonId(e.target.value)}/>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Giới tính</FormLabel>
                <div className="d-flex">
                  <Button
                    onClick={() => handleGenderClick("MALE")}
                    variant={gender === "MALE" ? "contained" : "outlined"}
                    className="mx-1"
                  >
                    Nam
                  </Button>
                  <Button
                    onClick={() => handleGenderClick("FEMALE")}
                    variant={gender === "FEMALE" ? "contained" : "outlined"}
                    className="mx-1"
                  >
                    Nữ
                  </Button>
                  <Button
                    onClick={() => handleGenderClick("OTHER")}
                    variant={gender === "OTHER" ? "contained" : "outlined"}
                    className="mx-1"
                  >
                    Khác
                  </Button>
                </div>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                className="term-agreed"
                control={
                  <Checkbox
                    checked={termsAgreed}
                    onChange={(e) => setTermsAgreed(e.target.checked)}
                    color="primary"
                  />
                }
                label={
                  termAgreed ||
                  " Khi chọn vào ô này, bạn đã chấp thuận với điều khoản và dịch vụ của công ty chúng tôi."
                }
              />
            </Grid>
            <Grid item xs={12} className="d-flex justify-content-center">
              <NavLink to={url} style={{ width: "50%" }}>
                <ButtonForMe value={100} childrenButton={"Đăng kí"} colorButton={color} />
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}
