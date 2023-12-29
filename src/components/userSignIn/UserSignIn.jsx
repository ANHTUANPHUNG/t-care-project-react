import React, { useState } from "react";
import LogoProject from "../logoProject/LogoProject";
import { LegalNotice } from "../carehub/LegalNotice";
import "./UserSignIn.css";

import { FormUserSignIn } from "../formLogInSignIn/FormUserSignIn";

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
      <FormUserSignIn url={'/user/address'}/>
      <div className="legal-notice-user">
        <LegalNotice />
      </div>
    </>
  );
}
