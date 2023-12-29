import React, { useState } from "react";
import { LegalNotice } from "../carehub/LegalNotice";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import LogoProject from "../logoProject/LogoProject";
import { RadioJobType } from "./RadioJobType";
import { ButtonForMe } from "../ButtonForMe";

export function UserJobType() {
  const [check, setCheck] = useState()
  return (
    <>
      <div>
        <div className="ms-5 my-2">
          <LogoProject />
        </div>

        <div className="row">
          <div className="col-8" style={{ backgroundColor: "#3b71aa", height: "3px" }}></div>
        </div>
      </div>
      <div className=" mt-5" style={{ textAlign: "-webkit-center" }}>
        <div style={{ width: "30%" }}>
          <h5>Great! Time to find the right fit</h5>
          <span>
            Share a bit more about what you need, and we’ll create a job post to help you quickly
            find caregivers.
          </span>
          <h6 className="mt-5 mb-3">What type of care are you looking for?</h6>
        </div>
        <div style={{ width: "30%" }}>
          <RadioJobType id="1"/>
          <RadioJobType id="2"/>
          <RadioJobType id="3"/>
        </div>
      </div>
      <div className="my-5" style={{ height: "50px", textAlign: "center" }}>
        <NavLink to="/user/datesession">
        <ButtonForMe childrenButton={'Next'}/>
        </NavLink>
      </div>
      <div className="legal-notice-user">
        <LegalNotice />
      </div>
    </>
  );
}
