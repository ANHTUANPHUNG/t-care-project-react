import React, { useState } from "react";
import "./RadioJobType.css";
export function RadioJobType() {
  const [check, setCheck] = useState(false);

  return (
    <div className={`radio-job-type${check ? "-active" : ""}`} onClick={() => setCheck(!check)}>
      <span className="ms-3">Recurring</span>
    </div>
  );
}
