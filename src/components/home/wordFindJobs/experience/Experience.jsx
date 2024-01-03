import React, { useState } from "react";
import "./Experience.css";
import { NavBarFindJob } from "../navBarFindJob/NavBarFindJob";
import { SideBarFindJob } from "../sideBarFindJob/SideBarFindJob";
import { FormControl, MenuItem, OutlinedInput, Select } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { MapToMe } from "./MapToMe";
import { ButtonForMe } from "../../../ButtonForMe";
import { NavLink } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { toast } from "react-toastify";
export function Experience() {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const services = [
    { id: 1, name: "Personal care (bathing and dressing)" },
    { id: 2, name: "Meal preparation" },
    { id: 3, name: "Light housekeeping" },
    { id: 4, name: "Dementia care" },
    { id: 5, name: "Errands/shopping" },
    { id: 6, name: "Transportation" },
    { id: 7, name: "Respite care" },
    { id: 8, name: "Home care" },
    { id: 9, name: "Medication management" },
    { id: 10, name: "Live-in home care" },
  ];
  const [showMore, setShowMore] = useState(false);
  const [personName, setPersonName] = useState("");
  const [years, setYears] = useState(1);

  const handleMinus = () => {
    if (years > 1) {
      toast.success("Xử lý thành công");
      setYears((prev) => prev - 1);
    } else {
      toast.error("Số năm lớn hơn 1");
    }
  };
  const handleAdd = () => {
    if (years < 10) {
      toast.success("Xử lý thành công");
      setYears((prev) => prev + 1);
    } else {
      toast.error("Số năm bé hơn 10");
    }
  };

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const servicesToShow = showMore ? services : services.slice(0, 5);

  const experience = (
    <div className="col-9 container-experience">
      <h4 className="experience-title">Senior care profile</h4>
      <div className="services-provided">
        <div className="services-provided-side-bar">
          <span>Services provided</span> <br />
          <span className="services-provided-side-bar-select">Select at least one</span>
        </div>
        <div>
          <MapToMe mapToMe={servicesToShow} />
          {services.length > 5 && (
            <div className="show-more" onClick={() => setShowMore((prev) => !prev)}>
              {showMore ? (
                <span>
                  <KeyboardArrowUpIcon /> Show less
                </span>
              ) : (
                <span>
                  <KeyboardArrowDownIcon /> Show more
                </span>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="separation-experience"></div>
      <div className="education">
        <div className="education-title">
          <span>Education</span>
        </div>
        <div>
          <span className="education-highest-level">HIGHEST LEVEL ACHIEVED *</span>
          <br />
          <FormControl sx={{ width: 300 }}>
            <Select
              displayEmpty
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Placeholder</em>;
                }

                return selected;
              }}
              MenuProps={MenuProps}
              sx={{ backgroundColor: "#f3f4f6", height: "40px" }}
            >
              <MenuItem disabled value="">
                <em>Placeholder</em>
              </MenuItem>
              {services.map((service) => (
                <MenuItem key={service.id} value={service.name}>
                  {service.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="separation-experience"></div>
      <div className="year-experience">
        <div className="year-experience-title">
          <span>Years of paid experience</span>
        </div>
        <div className="year-experience-handle">
          <div className="year-experience-handle-minus" onClick={() => handleMinus()}>
            <RemoveIcon />
          </div>
          <div>
            <span className="year-experience-handle-years">{years}</span> <br /> <span>Years</span>
          </div>
          <div className="year-experience-handle-add" onClick={() => handleAdd()}>
            <AddIcon />
          </div>
        </div>
      </div>
      <div className="separation-experience"></div>
      <div className="skills-training">
        <div className="skills-training-title">
          <span>Skills/training</span>
        </div>
        <div>
          <MapToMe mapToMe={servicesToShow} />
        </div>
      </div>
      <div className="separation-experience"></div>
      <div className="additional-info">
        <div className="additional-info-title">
          <span>Additional info</span>
        </div>
        <div>
          <MapToMe mapToMe={servicesToShow} />
        </div>
      </div>
      <div className="experience-button">
        <NavLink className="experience-link" to={"/assistant/bio"}>
          <ButtonForMe childrenButton={"Save & Continue"} colorButton={"#213f5f"} />
        </NavLink>
      </div>
    </div>
  );
  return (
    <NavBarFindJob
      children={
        <SideBarFindJob col={"col-6"} value={experience} check={true} activeIds={[1, 2, 3]} />
      }
    />
  );
}
