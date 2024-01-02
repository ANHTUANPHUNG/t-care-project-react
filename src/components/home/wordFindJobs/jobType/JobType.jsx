import React, { useState } from "react";
import "./JobType.css";
import { NavBarFindJob } from "./../navBarFindJob/NavBarFindJob";
import { SideBarFindJob } from "./../sideBarFindJob/SideBarFindJob";
import Switch from "@mui/material/Switch";

export function JobType() {
    const [checkRecurringJobs, setCheckRecurringJobs] = useState(false);

    const handleRecurringJobsToggle = () => {
        setCheckRecurringJobs((prevValue) => !prevValue);
    };

    const jobType = (
        <div className="col-9" style={{ padding: "20px 0" }}>
            <h4>Loại công việc ưa thích của tôi</h4>
            <h6>Lịch trình của tôi phù hợp nhất với:</h6>
            <span style={{fontSize:"13px"}}>(chọn tất cả những gì áp dụng)</span>
            <div style={{display:"flex", marginTop:"20px"}}>
                <div
                    style={{cursor:"pointer"}}
                    onClick={handleRecurringJobsToggle}
                >
                    <span>Công việc định kỳ</span> <br/>
                    <span  style={{fontSize:"13px"}}>Làm việc theo lịch trình thường xuyên, toàn thời gian hoặc bán thời gian.</span>
                </div>
                <div style={{marginLeft:"100px"}}>
                    <Switch checked={checkRecurringJobs} onChange={handleRecurringJobsToggle} />
                </div>
            </div>
        </div>
    );

    return (
        <NavBarFindJob children={<SideBarFindJob value={jobType} check={true} activeIds={[1]} />} />
    );
}
