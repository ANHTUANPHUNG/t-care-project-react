import React, { useState } from "react";
import "./IndexUser.css";
import { LegalNotice } from "../carehub/LegalNotice";
import LogoProject from "../logoProject/LogoProject";
import { FavoriteBorder } from "@mui/icons-material";
import { AssignmentInd } from "@mui/icons-material";
import { CreditScore } from "@mui/icons-material";
export function IndexUser() {
  return (
    <>
      <div>
        <div className="ms-5 my-2">
          <LogoProject />
          <div>
            <FavoriteBorder/>
            <AssignmentInd/>
            <CreditScore/>
          </div>
        </div>

        <div className="row">
          <div className="col-12" style={{ backgroundColor: "#ed8c2b", height: "3px" }}></div>
        </div>
      </div>
      
      
      <div className="legal-notice-user">
        <LegalNotice />
      </div>
    </>
  );
}
