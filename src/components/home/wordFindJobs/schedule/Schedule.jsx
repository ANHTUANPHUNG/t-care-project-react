import React, { useState } from "react";
import "./Schedule.css";
import { NavBarFindJob } from "../navBarFindJob/NavBarFindJob";
import { SideBarFindJob } from "../sideBarFindJob/SideBarFindJob";
import Switch from "@mui/material/Switch";

import RemoveIcon from "@mui/icons-material/Remove";
import { Slider } from "@mui/material";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { ButtonForMe } from "../../../ButtonForMe";
import axios from "axios";
import SelectOption from './SelectOption';


export function Schedule() {
  const [checkRecurringJobs, setCheckRecurringJobs] = useState(false);
  const [checkOneTineJobs, setCheckOneTineJobs] = useState(false);
  const [value, setValue] = useState([20, 35]);
  const [hourPerWeekMin,setHourPerWeekMin] = useState();
  const [hourPerWeekMax,setHourPerWeekMax] = useState();
  const [minHourPerJob, setMinHourPerJob] = useState();
  const [jobType1,setJobType] = useState();


  let navigate = useNavigate();
  const { id } = useParams();

  const [schedule, setSchedule] = useState({
    hourPerWeekMin: 0,
    hourPerWeekMax: 0,
    priceMin: value[0],
    priceMax: value[1],
    minHourPerJob:0,
    jobType:""
});

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSchedule({...schedule, priceMin: newValue[0], priceMax:newValue[1]})
  };
  const valuetext = (value) => {
    return `${value}$`;
  };
  const handleRecurringJobsToggle = () => {
    setCheckRecurringJobs((prevValue) => !prevValue);
  };
  const handleOneTimeJob = () => {
    setCheckOneTineJobs((prevValue) => !prevValue);
  };
  console.log(schedule);  
  
  const handleButtonClick = () => {
    sendSchedule();
  }
  const handleHourPerWeekMinChange = (value) => {
    console.log("a");
    setHourPerWeekMin(value);
    setSchedule({
      ...schedule,
      hourPerWeekMin: value
    });
  };
  const handleHourPerWeekMaxChange = (value) => {
    setHourPerWeekMax(value);
    setSchedule({
      ...schedule,
      hourPerWeekMax: value
    });
  };

  const sendSchedule = () => {
    const data = {
      hourPerWeekMin: schedule.hourPerWeekMin,
      hourPerWeekMax: schedule.hourPerWeekMax,
      priceMin: schedule.priceMin,
      priceMax: schedule.priceMax,
      minHourPerJob: schedule.minHourPerJob,
      jobType: schedule.jobType
    };

    axios.put(`http://localhost:8080/api/employees/schedule/${id}`, data)
    .then(response => {
      navigate("/assistant/availability/"+id)
      console.log(response);
    })
    .catch(error => {
      console.log(data);
      console.error(error);
    });
};

  const jobType = (
    <div className="col-9 container-job-type">
      <h4 className="job-type-title">Loại công việc ưa thích của tôi</h4>
      <h6>Lịch trình của tôi phù hợp nhất với:</h6>
      <span className="job-type-title-select">(chọn tất cả những gì áp dụng)</span>
      <div className="recurring-job">
        <div className="recurring-job-title" onClick={handleRecurringJobsToggle}>
          <span>Công việc định kỳ</span> <br />
          <span className="recurring-job-title-span">
            Làm việc theo lịch trình thường xuyên, toàn thời gian hoặc bán thời gian.
          </span>
        </div>
        <div className="recurring-job-check">
          <Switch checked={checkRecurringJobs} onChange={handleRecurringJobsToggle} />
        </div>
      </div>
      {checkRecurringJobs ? (
        <>
          <div className="recurring-job-hour-per">
            <span className="recurring-job-hour-per-title">Hours per week</span>
           <div className="recurring-job-hour-per-select">
          <SelectOption
            startIndex={1}
            endIndex={75}
            nameSelect={"Hour"}
            value={hourPerWeekMin}
            onchange={handleHourPerWeekMinChange}
          />
          <div className="recurring-job-hour-per-select-remove">
            <RemoveIcon />
          </div>
          <SelectOption
            startIndex={5}
            endIndex={80}
            nameSelect={"Hour"}
            value={hourPerWeekMax}
            onchange={handleHourPerWeekMaxChange}
          />
        </div>

          </div>
          <h6 className="recurring-job-hour-per-price">Mức lương theo giờ ưa thích của tôi</h6>
          <div className="recurring-job-hour-per-price-select">
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="on"
              valueLabelFormat={(value) => `${value}$`}
              getAriaValueText={valuetext}
              min={15}
              max={50}
            />
          </div>
        </>
      ) : (
        ""
      )}
      <div className="separation"></div>
      <div className="one-time-job-container">
        <div className="one-time-job-header" onClick={handleOneTimeJob}>
          <span>Công việc một lần</span> <br />
          <span className="one-time-job-header-title">
            Nhận công việc không thường xuyên dựa trên lịch trình ưa thích của bạn.
          </span>
        </div>
        <div className="one-time-job-header-select">
          <Switch checked={checkOneTineJobs} onChange={handleOneTimeJob} />
        </div>
      </div>
      {checkOneTineJobs ? (
        <>
          <div className="one-time-job-hour">
            <span className="one-time-job-hour-title">Số giờ tối thiểu cho mỗi công việc</span>
            <div className="one-time-job-hour-select">
              <SelectOption startIndex={1} endIndex={8} nameSelect={"Hour"} value={minHourPerJob}/>

            </div>
          </div>
        </>
      ) : (
        ""
      )}
      <div className="separation"></div>
      <div style={{ textAlign: "end", margin:" 30px 50px 40px 0" }}>
        <NavLink style={{ textDecoration: "none" }} to={"/assistant/availability"}>
          
          <ButtonForMe childrenButton={"Next"} colorButton={"#213f5f"} onclick={handleButtonClick}/>
        </NavLink>
      </div>
     
    </div>
  );

  return (
    <NavBarFindJob children={<SideBarFindJob col={"col-2"} value={jobType} check={true} activeIds={[1]} />} />
  );
}
