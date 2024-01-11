import React, { useState } from "react";
import LogoProject from "../../../logoProject/LogoProject";

import "./UserSignIn.css";

import { FormSignIn } from "../../formSignIn/FormSignIn";
import { LegalNotice } from "../../../carehub/LegalNotice";
import UserServiceAPI from "../../../../service/userServiceAPI";

export function UserSignIn() {
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
      <div style={{ margin: "5% 0" }}>
        <FormSignIn url={"/user/address"} checkRole={"ROLE_USER"} api ={UserServiceAPI.signInUser} />
      </div>
      <div className="legal-notice-user">
        <LegalNotice />
      </div>
    </>
  );
}
