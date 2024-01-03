import React, { useState } from "react";
import "./Experience.css";
import { NavBarFindJob } from "../navBarFindJob/NavBarFindJob";
import { SideBarFindJob } from "../sideBarFindJob/SideBarFindJob";
import { Checkbox, FormControlLabel } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export function Experience() {
  const services = [
    { id: 1, name: "Personal care (bathing and dressing)" },
    { id: 2, name: "Meal preparation" },
    { id: 3, name: "Light housekeeping" },
    { id: 4, name: "Dementia care" },
    { id: 5, name: "Errands/shopping" },
    { id: 6, name: "Transportation" },
    { id: 7, name: "Respite care" },
    { id: 8, name: "Home care" },
    { id: 9, name: "Medication management" },
    { id: 10, name: "Live-in home care" },
  ];
  const [showMore, setShowMore] = useState(false);
  const servicesToShow = showMore ? services : services.slice(0, 5);

  const experience = (
    <div style={{ paddingTop: "20px" }} className="col-9">
      <h4 style={{ marginBottom: "20px" }}>Senior care profile</h4>
      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div style={{ paddingRight: "15px", marginTop: "7px" }}>
          <span>Services provided</span> <br />
          <span style={{ fontSize: "12px", color: "rgb(179, 186, 193)" }}>Select at least one</span>
        </div>
        <div style={{ paddingLeft: "12%" }}>
          {servicesToShow.map((e) => (
            <div key={e.id} style={{ display: "flex" }}>
              <FormControlLabel control={<Checkbox />} label={e.name} />
            </div>
          ))}
          {services.length > 5 && (
            <div
              style={{ display: "flex", cursor: "pointer", color: "#213f5f" }}
              onClick={() => setShowMore((prev) => !prev)}
            >
              {showMore ? (
                <span>
                  <KeyboardArrowUpIcon /> Show less
                </span>
              ) : (
                <span>
                  <KeyboardArrowDownIcon /> Show more
                </span>
              )}
            </div>
          )}
        </div>
      </div>
      <div
        style={{ borderRadius: "15px", backgroundColor: "#b8bbc1", width: "72%", height: "3px" }}
      ></div>
      <div className="education" style={{ display: "flex", margin: "40px 0" }}>
        <div style={{ paddingRight: "15px", marginTop: "7px" }}>
          <span>Education</span>
        </div>
        <div style={{ paddingLeft: "18%" }}>
          a
        </div>
      </div>
    </div>
  );
  return (
    <NavBarFindJob
      children={<SideBarFindJob value={experience} check={true} activeIds={[1, 2, 3]} />}
    />
  );
}
