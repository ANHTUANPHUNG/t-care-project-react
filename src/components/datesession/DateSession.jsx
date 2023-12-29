import React, { useState } from "react";
import LogoProject from "../logoProject/LogoProject";
import { LegalNotice } from "../carehub/LegalNotice";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import "./DateSession.css";
import { ButtonForMe } from "../ButtonForMe";
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
  const [valueDate, setValueDate] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSessions, setSelectedSessions] = useState([]);
  const toggleSession = (date, sessionId) => {
    const dateSessions = selectedSessions[date] || [];
    const updatedSessions = dateSessions.includes(sessionId)
      ? dateSessions.filter((session) => session !== sessionId)
      : [...dateSessions, sessionId];

    setSelectedSessions({
      ...selectedSessions,
      [date]: updatedSessions,
    });
  };
  console.log(selectedSessions);
  return (
    <>
      <div>
        <div className="ms-5 my-2">
          <LogoProject />
        </div>

        <div className="row ">
          <div className="col-9 header"></div>
        </div>
      </div>
      <div className="d-flex mt-5 date-session">
        <div>
          <h4>Which days do you need care?</h4>
        </div>
      </div>
      <div className="d-flex date-in-week">
        <div className="d-flex date-in-week-header">
          {dateInWeek.map((e) => (
            <div
              key={e.id}
              id={`${
                selectedSessions[e.name] && Object.keys(selectedSessions[e.name]).length > 0
                  ? "idActive"
                  : ""
              }`}
              className={`d-flex date-in-week-header-render-${
                e.name === selectedDate ? "selected" : ""
              }`}
              onClick={() => (setValueDate(e.name), setSelectedDate(e.name))}
            >
              <span className="w-100">{e.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center my-4">
        <div className="w-25">
          <h6>{valueDate} </h6>
        </div>
      </div>
      <div className="my-4  d-flex justify-content-center">
        <div className="d-flex w-50 justify-content-center">
          {valueDate !== "" &&
            sessionInDate.map((e) => (
              <div
                key={e.id}
                className={` ms-3 session-render-${
                  (selectedSessions[valueDate] || []).includes(e.id) ? "selected" : ""
                }`}
                onClick={() => toggleSession(valueDate, e.id)}
              >
                <span className="ms-3">{e.name}</span>
              </div>
            ))}
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">Don't worry, you can always adjust these times later.</div>

      <div className="mt-2 mb-5 button-date-session">
        <NavLink to="/user/onehour">
        <ButtonForMe/>
        </NavLink>
      </div>
      <div className="legal-notice-user">
        <LegalNotice />
      </div>
    </>
  );
}
