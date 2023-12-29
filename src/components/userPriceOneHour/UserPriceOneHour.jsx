import React from "react";
import { NavLink } from "react-router-dom";
import LogoProject from "../logoProject/LogoProject";
import { Button, Slider } from "@mui/material";
import { LegalNotice } from "../carehub/LegalNotice";
import "./UserPriceOneHour.css";
import { ButtonForMe } from "../ButtonForMe";

export function UserPriceOneHour() {
  const [value, setValue] = React.useState([20, 35]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const valuetext = (value) => {
    return `${value}$`;
  };
  console.log(value);
  return (
    <>
      <div>
        <div className="ms-5 my-2">
          <LogoProject />
        </div>
        <div className="row ">
          <div className="col-10 header"></div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="render-price" >
          <h5 className="mt-5">What would you like to pay for care?</h5>
          <span className="my-3">The average range in your area is $20 - $35.</span>
          <div className="mt-5">
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="on"
              valueLabelFormat={(value) => `${value}$`}
              getAriaValueText={valuetext}
              min={15}
              max={50}
            />
            <span className="per-hour">per hour</span>
            <div className="my-4 ruler-select-per-hour">Pay range starts at your area's minimum wage.</div>
          </div>
        </div>
      </div>
      <div className="mt-2 mb-5 button-date-session">
        <NavLink to="/user/needcare">
          <ButtonForMe childrenButton={'Next'}/>
        </NavLink>
      </div>
      <div className="legal-notice-user">
        <LegalNotice />
      </div>
    </>
  );
}
