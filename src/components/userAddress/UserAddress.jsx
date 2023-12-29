import React from "react";
import { LegalNotice } from "../carehub/LegalNotice";
import LogoProject from "../logoProject/LogoProject";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { AddLocation } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { ButtonForMe } from "../ButtonForMe";
export function UserAddress() {
  return (
    <>
      <div>
        <div className="ms-5 my-2">
          <LogoProject />
        </div>

        <div className="row">
          <div className="col-4" style={{ backgroundColor: "#3b71aa", height: "3px" }}></div>
        </div>
      </div>
      <div className="m-5 " style={{ textAlign: "-webkit-center" }}>
        <h3 className="mb-5">Where are you looking for care?</h3>
        <form style={{ width: "40%" }}>
          <TextField
            fullWidth
            id="address"
            label="Zip Code"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <AddLocation />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
        <div className="mt-5" style={{ height: "50px" }}>
          <NavLink to="/user/service">
          <ButtonForMe childrenButton={'Next'}/>
          </NavLink>
        </div>
      </div>
      <div className="legal-notice-user">
        <LegalNotice />
      </div>
    </>
  );
}
