import React, { useState } from "react";
import LogoProject from "../../../logoProject/LogoProject";
import { LegalNotice } from "../../../carehub/LegalNotice";
import { NavLink } from "react-router-dom";
import "./DateSession.css";
import { ButtonForMe } from "../../../ButtonForMe";
import { SelectDate } from "../../../selectDate/SelectDate";

export function DateSession() {
 
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
          <h4>Bạn cần chăm sóc những ngày nào?</h4>
        </div>
      </div>
      <div className="date-session-map" >
      <SelectDate/>
      </div>
      
      <div className="d-flex justify-content-center mt-4">
        {/* Don't worry, you can always adjust these times later. */}
        Đừng lo lắng, bạn luôn có thể chỉnh sửa nó sau.
      </div>

      <div className="mt-2 mb-5 button-date-session">
        <NavLink to="/user/onehour">
          <ButtonForMe childrenButton={"Next"} />
        </NavLink>
      </div>
      <div className="legal-notice-user">
        <LegalNotice />
      </div>
    </>
  );
}
