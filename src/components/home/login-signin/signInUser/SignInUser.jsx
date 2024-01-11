import React from "react";
import "./SignInUser.css";
import { LegalNotice } from "../../../carehub/LegalNotice";
import LogoProject from "../../../logoProject/LogoProject";
import { FormSignIn } from "../../formSignIn/FormSignIn";
import UserServiceAPI from "../../../../service/userServiceAPI";
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
      <div style={{ margin: "5% 0" }}>
        <FormSignIn url={"/login"} checkRole={"ROLE_USER"} api ={UserServiceAPI.signInUserReturnLogin}/>
      </div>

      <div className="legal-notice-user">
        <LegalNotice />
      </div>
    </>
  );
}
