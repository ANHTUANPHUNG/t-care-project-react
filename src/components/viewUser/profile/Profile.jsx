import React, { useState } from "react";
import "./Profile.css";
import { LegalNotice } from "../../carehub/LegalNotice";
import { ContainerViewUser } from "../containerViewUser/ContainerViewUser";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DoneAllIcon from "@mui/icons-material/DoneAll";
const preferencesRender = [
  {
    id: 1,
    name: "Email me about T-Care.com features, services, special offers, and other cool stuff.",
  },
  {
    id: 2,
    name: "Email me about new caregivers near me who have recently joined T-Care.com.",
  },
  {
    id: 3,
    name: "Email me about Care.com features, services, special offers, and other cool stuff.",
  },
  {
    id: 4,
    name: "Share my online status with other members of T-Care.com.",
  },
  {
    id: 5,
    name: "Send read receipts with messages.",
  },
  {
    id: 6,
    name: "Make my profile and job posts public. (?)",
  },
  {
    id: 7,
    name: "Include my profile in caregiver search results and certain caregiver emails.",
  },
  { id: 8, name: "Allow caregivers to see that I viewed their profile." },
  {
    id: 9,
    name: "Share information about me with third party communication facilitators so they may send me direct mail solicitations on behalf of other companies. (?)",
  },
];
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

        <div className="my-profile-header" style={{ display: "flex" }}>
          <div className="my-profile-header-form" style={{ display: "flex" ,borderRight:'1px solid #e7e7e7' }}>
            <div>
              <div className="my-profile-img" style={{ marginBottom: "10px" }}>
                <img
                  style={{ width: "180px", border: "1px solid #53585d", borderRadius: "15px" }}
                  src="https://res.cloudinary.com/dw4xpd646/image/upload/v1703929545/Cloudinary-React/gfxdp8xr8hhsdx0jxyea.png"
                  alt=""
                />
              </div>
              <span
                className=""
                style={{ color: "blue", marginLeft: "40px", paddingTop: "10px", cursor: "pointer" }}
              >
                Upload photo
              </span>
            </div>
            <div style={{ margin: " 0 10px 0 20px" }}>
              <h1>Name</h1>

              <h5>Email</h5>
              <div>Thời gian tạo </div>
              <div style={{ margin: "5px 0" }}>Hired 0 providers </div>
              <div style={{ margin: "5px 0" }}> Posted 0 reviews </div>
              <div
                style={{ textAlign: "center", marginTop: "20px", color: "blue", cursor: "pointer" }}
              >
                Edit profile
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "15px" }}>
            <div
              style={{
                width: "760px",
                borderTop: "1px solid #e7e7e7",
                height: "26px",
                backgroundColor: "#e7e7e7",
                borderTopRightRadius: "25px",
                borderTopLeftRadius: "25px",
                paddingLeft: "15px",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Membership Information </span>
              <span
                style={{ fontSize: "13px", marginLeft: "10px", color: "blue", cursor: "pointer" }}
              >
                Close Account
              </span>
            </div>
            <div
              style={{
                width: "760px",
                backgroundColor: "#f5f5f5",
                paddingLeft: "15px",
              }}
            >
              <div style={{ padding: "15px 0 5px" }}>
                <span style={{ fontWeight: "bold", fontSize: "13px" }}>Member Since </span>
                <span style={{ fontSize: "11px", marginLeft: "115px", cursor: "pointer" }}>
                  12/30/2023
                </span>
              </div>
              <div style={{ padding: "5px 0" }}>
                <span style={{ fontWeight: "bold", fontSize: "13px" }}>Account Status</span>
                <span style={{ fontSize: "11px", marginLeft: "115px", cursor: "pointer" }}>
                  Active
                </span>
              </div>
              <div style={{ padding: "5px 0 15px" }}>
                <span style={{ fontWeight: "bold", fontSize: "13px" }}>Membership Plan </span>
                <span style={{ fontSize: "11px", marginLeft: "95px", cursor: "pointer" }}>
                  Basic
                </span>
              </div>
            </div>
            <div
              style={{
                width: "760px",
                borderTop: "1px solid #e7e7e7",
                height: "26px",
                backgroundColor: "#e7e7e7",
                borderTopRightRadius: "25px",
                borderTopLeftRadius: "25px",
                paddingLeft: "15px",
                marginTop: "25px",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Preferences </span>
            </div>
            <div
              style={{
                width: "760px",
                backgroundColor: "#f5f5f5",
                paddingLeft: "15px",
                marginBottom:'40px'
              }}
            >
              {preferencesRender.map((e) => (
                <div key={e.id} style={{ padding: "5px 0 " , color:'#737373'}}>
                  <DoneAllIcon />
                  <span style={{ fontSize: "14px", marginLeft: "5px" }}>{e.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <LegalNotice />
    </>
  );
}
