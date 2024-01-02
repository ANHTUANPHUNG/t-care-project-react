import React, { useState } from "react";
import "./DescriptionProcess.css";
import { NavBarFindJob } from "../navBarFindJob/NavBarFindJob";
import { Avatar } from "@mui/material";
import { NavLink } from "react-router-dom";

import CheckIcon from "@mui/icons-material/Check";
import { SideBarFindJob } from "../sideBarFindJob/SideBarFindJob";

export const DescriptionProcess = () => {
  const greatStart = (
    <div style={{ paddingTop: "20px" }} className="col-9">
      <h3>Great Start! Here's what comes next</h3>
      <div>
        <div className="d-flex" style={{ margin: "30px 0 10px 0" }}>
          <Avatar style={{ backgroundColor: "#3b71aa", width: "50px", height: "50px" }}>
            <CheckIcon />
          </Avatar>
          <div style={{ paddingLeft: "15px" }}>
            <span style={{ fontSize: "20px" }}>Create your account</span> <br></br>
            <span style={{ fontSize: "13px", color: "blue" }}>Done!</span>
          </div>
        </div>
        <div style={{ color: "#b3bac1" }}>
          <div className="d-flex" style={{ margin: "30px 0 10px 0" }}>
            <div
              style={{
                border: "1px solid #b3bac1",
                borderRadius: "40px",
                width: "50px",
                height: "50px",
                textAlign: "center",
                paddingTop: "11px",
              }}
            >
              2
            </div>

            <div style={{ paddingLeft: "15px" }}>
              <span style={{ fontSize: "20px" }}>Build your profile</span> <br></br>
              <span style={{ fontSize: "13px" }}>Your availability, pay rate, and bio.</span>
            </div>
          </div>
          <div className="d-flex" style={{ margin: "30px 0 10px 0" }}>
            <div
              style={{
                border: "1px solid #b3bac1",
                borderRadius: "40px",
                width: "50px",
                height: "50px",
                textAlign: "center",
                paddingTop: "11px",
              }}
            >
              3
            </div>
            <div style={{ paddingLeft: "15px" }}>
              <span style={{ fontSize: "20px" }}>Get screened</span> <br></br>
              <span style={{ fontSize: "13px" }}>
                Answer some required safety questions and earn a safety badge for your profile.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ justifyContent: "end", display: "flex", width: "70%", margin: "40px 0" }}>
        <NavLink style={{ textDecoration: "none" }} to={"/assistant/job-type"}>
          <div
            style={{
              border: "1px solid",
              borderRadius: "20px",
              padding: "10px 20px",
              backgroundColor: "#213f5f",
              cursor: "pointer",
            }}
          >
            <h6 style={{ margin: "0", color: "white" }}>Build your profile</h6>
          </div>
        </NavLink>
      </div>
    </div>
  );
  return (
    <NavBarFindJob children={<SideBarFindJob value={greatStart} check={false} activeIds={[]} />} />
  );
};
