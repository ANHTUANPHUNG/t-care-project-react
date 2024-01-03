import React, { useState } from "react";
import "./FormSignIn.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Checkbox, FormControl, FormControlLabel, FormLabel } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ButtonForMe } from "../../ButtonForMe";

export function FormSignIn({ url, marginContainer, marginHeader, termAgreed, color }) {
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
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    setPasswordError("");
    console.log("Form submitted!");
  };

  return (
    <div className="container-form-sign-in" style={{ margin: marginContainer || "0 27%" }}>
      <div>
        <div className="form-sign-in-header" style={{ margin: marginHeader || "3% 16%" }}>
          <h3 className="form-sign-in-content">
            {marginHeader || "Add a few details about yourself."}
          </h3>
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
                  "By clicking 'Join now', you agree to our Terms of Use and Privacy Policy."
                }
              />
            </Grid>
            <Grid item xs={12} className="d-flex justify-content-center">
              <NavLink to={url} style={{ width: "50%" }}>
                <ButtonForMe value={100} childrenButton={"Join Now"} colorButton={color} />
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}
