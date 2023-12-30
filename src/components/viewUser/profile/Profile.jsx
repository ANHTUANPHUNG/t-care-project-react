import React, { useState } from "react";
import "./Profile.css";
import { LegalNotice } from "../../carehub/LegalNotice";
import { ContainerViewUser } from "../containerViewUser/ContainerViewUser";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
export function Profile() {
  return (
    <>
      <ContainerViewUser />
      <div className="container-profile-user" style={{ margin: "0px 90px", padding: "0 15px" }}>
        <div
          className="notification-user"
          style={{
            padding: "30px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderBottom: "3px solid #ccd1d6",
          }}
        >
          <div className="d-flex">
            <TipsAndUpdatesIcon />
            <span>
              This is what your profile looks now. Grab attention from caregivers by describing your
              family's needs and interests.
            </span>
          </div>
        </div>
        <h6 className="my-profile" style={{ padding: "25px 0" }}>
          <AccountBoxIcon />
          My Profile
        </h6>

        <div className="my-profile-header" style={{ margin: "0 200px" }}>
          <div className="my-profile-header-form" style={{ display: "flex" }}>
            <div>
              <div className="my-profile-img" style={{ marginBottom:'10px'}}>
                <img
                  style={{ width: "180px", border: "1px solid #53585d", borderRadius: "15px" }}
                  src="https://res.cloudinary.com/dw4xpd646/image/upload/v1703929545/Cloudinary-React/gfxdp8xr8hhsdx0jxyea.png"
                  alt=""
                />
              </div>
              <span className="" style={{color: 'blue', marginLeft:'40px', paddingTop:'10px'}}>Upload photo</span>
            </div>
          </div>
        </div>
      </div>
      <LegalNotice />
    </>
  );
}
