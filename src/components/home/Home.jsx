import React, { useState } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import About from "./about/About";
import { Assistant } from "./assistant/Assistant";
import { CheckFind } from "./checkFind/CheckFind";
import LogoProject from "../logoProject/LogoProject";
import { CareHub } from './../carehub/CareHub';
export function Home() {
  const [checkFind, setCheckFind] = useState("true");

  return (
    <>
      <div className="container-head">
        <LogoProject />
        <div id="logInHome">
          <NavLink className="navlink-no-underline" to="login">
            <Button className="buttonLogin" variant="contained">
              Log in
            </Button>
          </NavLink>
        </div>
      </div>
      <div style={{ backgroundColor: "#FFF1EB" }}>
        <div className="d-flex" style={{ backgroundColor: "white", borderBottom: "red" }}>
          <CheckFind setCheckFind={setCheckFind} checkFind={checkFind} />
          <div>
            <img
              src="https://res.cloudinary.com/dw4xpd646/image/upload/v1703748824/Cloudinary-React/gwsdfpleoznddaljvn9m.png"
              alt=""
              style={{ height: "400px" }}
            />
          </div>
        </div>
        <About />
        <div className="rate-average mt-3">
          <div className="rate-average-top">
            <p className="rate-average-content">
              Access a network of background checked caregivers
            </p>
          </div>
          <div className="rate-average-bot">
            <p className="rate-average-rate">
              With an average 4.7 star rating, you’ll find a caregiver to rave about too.
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center ">
          <div className="row profile-assistant mb-5">
            <div className="col-4">
              <Assistant />
            </div>
            <div className="col-4 ">
              <Assistant />
            </div>
            <div className="col-4 ">
              <Assistant />
            </div>
          </div>
        </div>
      </div>
      <CareHub />
    </>
  );
}
