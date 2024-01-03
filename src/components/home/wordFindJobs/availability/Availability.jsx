import React, { useState } from "react";
import "./Availability.css";
import { NavBarFindJob } from "../navBarFindJob/NavBarFindJob";
import { SideBarFindJob } from "../sideBarFindJob/SideBarFindJob";

import { SelectDate } from "../../../selectDate/SelectDate";
import { NavLink } from "react-router-dom";
import { ButtonForMe } from "../../../ButtonForMe";

export function Availability() {
  const needCare = (
    <div className="col-9 ">
      <h4 className="availability-title">My availability</h4>
      <p className="availability-value">
        Tell families what your weekly schedule typically looks like. If needed, it's super easy to
        come back and edit it when you log back in.
      </p>
      <h6>I'm available to work...</h6>
      <div className="date-session-map-job">
        <SelectDate paddingSpan={"12px"} />
      </div>
      <div style={{ textAlign: "end", margin:" 0 50px 40px 0" }}>
        <NavLink style={{ textDecoration: "none" }} to={"/assistant/experience"}>
          
          <ButtonForMe childrenButton={"Next"} colorButton={"#213f5f"}/>
        </NavLink>
      </div>
    </div>
  );

  return (
    <NavBarFindJob children={<SideBarFindJob value={needCare} check={true} activeIds={[1, 2]} />} />
  );
}
