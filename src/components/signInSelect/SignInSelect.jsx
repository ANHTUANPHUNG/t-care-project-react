import React, { useState } from "react";
import "./SignInSelect.css";
import LogoProject from "../logoProject/LogoProject";
import { CheckLogInSignIn } from "../checkLogInSignIn/CheckLogInSignIn";
import { LegalNotice } from "../carehub/LegalNotice";
import { NavLink } from "react-router-dom";

export function SignInSelect({}) {
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
      <div className="select-category">
        <CheckLogInSignIn value={"signIn"} />
      </div>
      <div className="container-sign-in">
        <h5 className="sign-in-title">Let’s get started. Choose an option.</h5>
        <div className="sign-in-select">
          <div className="find-care">
            <img
              src="https://res.cloudinary.com/dw4xpd646/image/upload/v1703859018/Cloudinary-React/br2chgppnqhqxbz1mojt.png"
              alt=""
            />
            <h5>I need a caregiver</h5>
            <span>Start your free search for care in your area.</span>
            <NavLink to={"/sign-in/find-care"} className="nav-link-select">
              <div className="find-care-title">
                <span>Find Care</span>
              </div>
            </NavLink>
          </div>
          <div className="find-jobs">
            <img
              src="https://res.cloudinary.com/dw4xpd646/image/upload/v1703859013/Cloudinary-React/mzyueuz5ouilpslba9zv.png"
              alt=""
            />
            <h5>I want a care job</h5>
            <span>Create a profile and search for jobs.</span>
            <NavLink className="nav-link-select">
              <div className="find-jobs-title">
                <span>Find Jobs</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="legal-notice-user">
        <LegalNotice />
      </div>
    </>
  );
}
