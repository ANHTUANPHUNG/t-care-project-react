import React, { useEffect, useState } from "react";
import "./Contract.css";
import { LegalNotice } from "../../carehub/LegalNotice";
import { ContainerViewUser } from "../containerViewUser/ContainerViewUser";
import { useParams } from "react-router-dom";

export function Contract(){
    const {id} = useParams()
    return(
        <>
                  <ContainerViewUser idUser={id} />
                  <LegalNotice />

        </>
    )
}