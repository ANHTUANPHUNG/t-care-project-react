import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import "./CheckBoxService.css";
export function CheckBoxService() {
  const [check, setCheck] = useState(false);
  return (
    <div className={`d-flex mb-3 py-3 checkBoxService${check ? "-active" : ""}`}>
      <div className="">
        <label htmlFor="idd">
        <h6 className="mx-3 mb-0">Household tasks</h6>
        <span className="mx-3 "> Errands, housekeeping and meal prep.</span>
        </label>
      </div>
      <div>
        <Checkbox id="idd" onChange={() => setCheck(!check)} />
      </div>
    </div>
  );
}
