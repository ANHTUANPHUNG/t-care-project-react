import React, { useState } from "react";
import LogoProject from "../logoProject/LogoProject";
import { LegalNotice } from "../carehub/LegalNotice";
import "./UserSignIn.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {
  ButtonGroup,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  
} from "@mui/material";
import { NavLink } from "react-router-dom";

export function UserSignIn() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [gender, setGender] = useState("");

  const handleGenderClick = (selectedGender) => {
    setGender(selectedGender);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Password validation
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    // Clear password error if passwords match
    setPasswordError("");

    // Handle form submission logic here
    console.log("Form submitted!");
  };
  return (
    <>
      <div>
        <div className="ms-5 my-2">
          <LogoProject />
        </div>
        <div className="row">
          <div className="col-2" style={{ backgroundColor: "#3b71aa", height: "3px" }}></div>
        </div>
      </div>
      <div style={{ justifyContent: "center" }} className="d-flex ">
        <div className="w-50 my-5">
          <div style={{ justifyContent: "center", display: "flex" }}>
            <h3>Add a few details about yourself.</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth id="email" label="Email" type="email" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth id="firstName" label="First Name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth id="lastName" label="Last Name" />
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth id="password" label="Password" type="password" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  error={Boolean(passwordError)}
                  helperText={passwordError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth id="personId" label="Person ID" />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Gender</FormLabel>
                  <div className="d-flex">
                    <Button
                      onClick={() => handleGenderClick("male")}
                      variant={gender === "male" ? "contained" : "outlined"}
                      className="mx-1"
                    >
                      Nam
                    </Button>
                    <Button
                      onClick={() => handleGenderClick("female")}
                      variant={gender === "female" ? "contained" : "outlined"}
                      className="mx-1"
                    >
                      Nữ
                    </Button>
                    <Button
                      onClick={() => handleGenderClick("other")}
                      variant={gender === "other" ? "contained" : "outlined"}
                      className="mx-1"
                    >
                      Khác
                    </Button>
                  </div>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={termsAgreed}
                      onChange={(e) => setTermsAgreed(e.target.checked)}
                      color="primary"
                    />
                  }
                  label="By clicking 'Join now', you agree to our Terms of Use and Privacy Policy."
                />
              </Grid>
              <Grid item xs={12} className="d-flex justify-content-center">
                <NavLink to="/user/address" style={{width:'50%'}}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ width: "100%", backgroundColor: "orangered" }}
                  >
                    Join now
                  </Button>
                </NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
      <div className="legal-notice-user">
        <LegalNotice />
      </div>
    </>
  );
}
