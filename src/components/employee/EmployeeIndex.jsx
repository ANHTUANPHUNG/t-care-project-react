import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { ContainerViewEmployee } from "./containerViewEmployee/ContainerViewEmployee";
import { LegalNotice } from "../carehub/LegalNotice";


export function EmployeeIndex() {
    const {idEmployee} = useParams()
    return(
        <>
        <ContainerViewEmployee idEmployee={idEmployee} checkIconPage={true} />
        <LegalNotice />
        </>

    )
}