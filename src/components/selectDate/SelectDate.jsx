import React, { useState } from "react";
import "./SelectDate.css";

export function SelectDate({paddingSpan}) {
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
  return (
    <>
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
          <h6>{valueDate} </h6>
      </div>
      <div className="my-4  d-flex justify-content-center">
        <div className="d-flex  justify-content-center">
          {valueDate !== "" &&
            sessionInDate.map((e) => (
              <div
                key={e.id}
                className={` ms-3 session-render-${
                  (selectedSessions[valueDate] || []).includes(e.id) ? "selected" : ""
                }`}
                onClick={() => toggleSession(valueDate, e.id)}
              >
                <span style={{padding: paddingSpan|| 0}}>{e.name}</span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
