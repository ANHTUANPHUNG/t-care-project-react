import React, { useState } from "react";
import "./Index.css";
import { LegalNotice } from "../../carehub/LegalNotice";
import { ContainerViewUser } from "../containerViewUser/ContainerViewUser";

export function Index(){
    return(
        <>
        <ContainerViewUser/>
        
        <LegalNotice/>
        </>
    )
}