import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import "./CheckBoxService.css";
export function CheckBoxService({value}) {
  const [check, setCheck] = useState(false);
  return (
    <div className={`d-flex mb-3 py-3 checkBoxService${check ? "-active" : ""}`}>
      <div className="" style={{width:"300px"}}>
        <label htmlFor="idd">
        <h6 className="mx-3 mb-0">{value.name}</h6>
        <span className="mx-3 "> {value.description}.</span>
        </label>
      </div>
      <div>
        <Checkbox id="idd" onChange={() => setCheck(!check)} />
      </div>
    </div>
  );
}
