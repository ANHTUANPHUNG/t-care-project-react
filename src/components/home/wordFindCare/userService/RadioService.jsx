import { Checkbox, Radio } from "@mui/material";
import React, { useState } from "react";
import "./RadioService.css";

export function RadioService({ value ,selectedRadioId,setSelectedRadioId}) {
  

  return value?.map((e) => (
    <div
      key={e.id}
      className={`d-flex mb-3 py-3 radioService${selectedRadioId === e.id ? "-active" : ""}`}
    >
      <div className="" style={{ width: "300px" }}>
        <label htmlFor={e.id}>
          <h6 className="mx-3 mb-0">{e.name}</h6>
          <span className="mx-3 "> {e.description}</span>
        </label>
      </div>
      <div>
        <Radio checked={selectedRadioId === e.id} id={e.id} value={e.id} onChange={() => setSelectedRadioId(e.id)} />
      </div>
    </div>
  ));
}
