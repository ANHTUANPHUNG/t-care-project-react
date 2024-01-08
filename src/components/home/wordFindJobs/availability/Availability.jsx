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
      <h4 className="availability-title">Lịch làm của tôi</h4>
      <p className="availability-value">
        {/* Tell families what your weekly schedule typically looks like. If needed, it's super easy to
        come back and edit it when you log back in. */}
        Hãy cho chúng tôi biết lịch trình hàng tuần của bạn thường như thế nào. Nếu cần, rất dễ để quay lại và chỉnh sửa nó khi đăng nhập lại
      </p>
      <h6>Tôi có thể làm việc vào...</h6>
      <div className="date-session-map-job">
        <SelectDate paddingSpan={"12px"} />
      </div>
      <div style={{ textAlign: "end", margin:" 0 50px 40px 0" }}>
        <NavLink style={{ textDecoration: "none" }} to={"/assistant/experience"}>
          
          <ButtonForMe childrenButton={"Tiếp theo"} colorButton={"#213f5f"}/>
        </NavLink>
      </div>
    </div>
  );

  return (
    <NavBarFindJob children={<SideBarFindJob col={"col-4"} value={needCare} check={true} activeIds={[1, 2]} />} />
  );
}
