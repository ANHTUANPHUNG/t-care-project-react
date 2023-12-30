import React from "react";
import "./SignInUser.css";
import { LegalNotice } from "../../../carehub/LegalNotice";
import LogoProject from "../../../logoProject/LogoProject";
import { FormUserSignIn } from "../../formUserSignIn/FormUserSignIn";
export function SignInUser() {
  return (
    <>
      <div>
        <div className="ms-5 my-2">
          <LogoProject />
        </div>
        <div className="row ">
          <div className="col-12 step-sign-in"></div>
        </div>
      </div>
      <FormUserSignIn url={"/sign-in/find-care"} />

      <div className="legal-notice-user">
        <LegalNotice />
      </div>
    </>
  );
}
