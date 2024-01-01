import React, { useState } from "react";
import "./JobType.css";
import { NavBarFindJob } from './../navBarFindJob/NavBarFindJob';
import { SideBarFindJob } from './../sideBarFindJob/SideBarFindJob';

export function JobType(){
    const greatStart= (
        <div className="col-8">a</div>
    )
    return (
        <NavBarFindJob children={<SideBarFindJob value={greatStart} check={true} activeIds={[1]} />} />
      );
}