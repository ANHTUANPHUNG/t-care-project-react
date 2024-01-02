import React from "react";
import "./Address.css";
import { NavBarFindJob } from "../navBarFindJob/NavBarFindJob";
import { FormSignIn } from "../../formSignIn/FormSignIn";
import { NavLink } from 'react-router-dom';

const formAddress = (
  <div
    style={{
      margin: "5% 10%",
      backgroundColor: "white",
      borderRadius: "15px",
      border: "1px solid #b3bac1",
    }}
  >
   <NavLink to={'/assistant/process'}>
aaa
   </NavLink>
  </div>
);
export function Address() {
  return (
    <>
      <NavBarFindJob children={formAddress} />
    </>
  );
}
