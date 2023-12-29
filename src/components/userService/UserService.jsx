import React from "react";
import LogoProject from "../logoProject/LogoProject";
import { LegalNotice } from "../carehub/LegalNotice";
import Checkbox from "@mui/material/Checkbox";
import { CheckBoxService } from "./CheckboxService";
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { ButtonForMe } from "../ButtonForMe";

export function UserService() {
  return (
    <>
      <div>
        <div className="ms-5 my-2">
          <LogoProject />
        </div>

        <div className="row">
          <div className="col-6" style={{ backgroundColor: "#3b71aa", height: "3px" }}></div>
        </div>
      </div>
      <div className="d-flex my-5 " style={{ justifyContent: "center" }}>
        <div>
          <h3 className="mb-4">What kind of help are you looking for?</h3>
          <CheckBoxService />
          <CheckBoxService />
          <CheckBoxService />
          <CheckBoxService />
        </div>
      </div>
      <div className="my-5" style={{ height: "50px", textAlign:'center' }}>
        <NavLink to="/user/jobtype">
        <ButtonForMe childrenButton={'Next'}/>
        </NavLink>
      </div>
      <div className="legal-notice-user">
        <LegalNotice />
      </div>
    </>
  );
}
