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
    { id: 1, name: "Dọn phòng nhẹ nhàng" },
    { id: 2, name: "Chăm sóc tại nhà" },
    { id: 3, name: "Chăm sóc thay thế" },
    { id: 4, name: "Dịch vụ chăm sóc cuối đời" },
    { id: 5, name: "Chăm sóc cá nhân " },
    { id: 6, name: "Chăm sóc chứng mất trí nhớ" },
    { id: 7, name: "Tắm và mặc quần áo" }

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
      <h4 className="experience-title">Hồ sơ chăm sóc người cao tuổi</h4>
      <div className="services-provided">
        <div className="services-provided-side-bar">
          <span>Các dịch vụ cung cấp</span> <br />
          <span className="services-provided-side-bar-select">Vui lòng chọn ít nhất một</span>
        </div>
        <div>
          <MapToMe mapToMe={servicesToShow} />
          {services.length > 5 && (
            <div className="show-more" onClick={() => setShowMore((prev) => !prev)}>
              {showMore ? (
                <span>
                  <KeyboardArrowUpIcon />Hiển thị bớt
                </span>
              ) : (
                <span>
                  <KeyboardArrowDownIcon /> Hiển thị thêm
                </span>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="separation-experience"></div>
      <div className="education">
        <div className="education-title">
          <span>Giáo dục</span>
        </div>
        <div>
          <span className="education-highest-level">BẰNG CẤP CAO NHẤT ĐẠT ĐƯỢC</span>
          <br />
          <FormControl sx={{ width: 300 }}>
            <Select
              displayEmpty
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Vui lòng chọn trường này</em>;
                }

                return selected;
              }}
              MenuProps={MenuProps}
              sx={{ backgroundColor: "#f3f4f6", height: "40px" }}
            >
              <MenuItem disabled value="">
                <em>Vui lòng chọn trường này</em>
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
          <span>Số năm kinh nghiệm làm việc</span>
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
          <span>Kĩ năng</span>
        </div>
        <div>
          <MapToMe mapToMe={servicesToShow} />
        </div>
      </div>
      <div className="separation-experience"></div>
      <div className="additional-info">
        <div className="additional-info-title">
          <span>Thông tin thêm</span>
        </div>
        <div>
          <MapToMe mapToMe={servicesToShow} />
        </div>
      </div>
      <div className="experience-button">
        <NavLink className="experience-link" to={"/assistant/bio"}>
          <ButtonForMe childrenButton={"Lưu và tiếp tục"} colorButton={"#213f5f"} />
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
