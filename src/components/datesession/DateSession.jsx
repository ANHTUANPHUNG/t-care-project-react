import React, { useState } from "react";
import LogoProject from "../logoProject/LogoProject";
import { LegalNotice } from "../carehub/LegalNotice";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const dateInWeek = [
  { id: 1, name: "CN" },
  { id: 2, name: "TH2" },
  { id: 3, name: "TH3" },
  { id: 4, name: "TH4" },
  { id: 5, name: "TH5" },
  { id: 6, name: "TH6" },
  { id: 7, name: "TH7" },
];
const sessionInDate = [
  { id: 1, name: "Buổi sáng" },
  { id: 2, name: "Buổi chiều" },
  { id: 3, name: "Buổi tối" },
  { id: 4, name: "Cả ngày" },
];
export function DateSession() {
  const [valueDate, setValueDate] = useState();
  const [checkButtonSession, setCheckButtonSession] = useState(false);
  const [selectSessionInDate, setSelectSessionInDate] = useState([]);

  return (
    <>
      <div>
        <div className="ms-5 my-2">
          <LogoProject />
        </div>

        <div className="row">
          <div className="col-10" style={{ backgroundColor: "#3b71aa", height: "3px" }}></div>
        </div>
      </div>
      <div className="d-flex mt-5" style={{ justifyContent: "center" }}>
        <div>
          <h4>Which days do you need care?</h4>
        </div>
      </div>
      <div className="d-flex" style={{ justifyContent: "center" }}>
        <div
          className="d-flex "
          style={{ height: "40px", justifyContent: "space-around", width: "25%" }}
        >
          {dateInWeek.map((e) => (
            <div
              key={e.id}
              className="d-flex"
              style={{ border: "1px solid red", borderRadius: "20px", width: "40px" }}
              onClick={() => setValueDate(e.name)}
            >
              <span className="w-100" style={{ textAlign: "center", alignSelf: "center" }}>
                {e.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center my-4">
        <div className="w-25">
          <h6>{valueDate } </h6>
        </div>
      </div>
      <div className="d-flex justify-content-center my-4 ">
        {valueDate != ""
          ? sessionInDate.map((e) => (
              <Button key={e.id} variant="contained" className="me-3">
                {e.name}
              </Button>
            ))
          : ""}
      </div>
      <div className="my-5 " style={{ height: "50px", textAlign: "center" }}>
        <NavLink to="/user/jobtype">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{
              width: "30%",
              backgroundColor: "orangered",
              height: "100%",
              border: "1px solid orangered",
              borderRadius: "20px",
            }}
          >
            Next
          </Button>
        </NavLink>
      </div>
      <div className="legal-notice-user">
        <LegalNotice />
      </div>
    </>
  );
}
