import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Contract } from "../viewUser/contract/Contract";

export function EmployeeContract() {
  const { idEmployee } = useParams();
  return (
    <Contract role={"employees"} id={idEmployee}/>
  );
}
