import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Contract } from "../contract/Contract";

export function UserContract() {
  const { id } = useParams();
  return (
    <Contract role={"users"} id={id}/>
  );
}
