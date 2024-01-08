import "./UserNeedCare.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoProject from "../../../logoProject/LogoProject";
import { Box, FormControl, MenuItem, Radio, Select } from "@mui/material";
import { LegalNotice } from "../../../carehub/LegalNotice";
import { ButtonForMe } from "../../../ButtonForMe";

const relationship = [
  { id: 1, name: "Bố mẹ của tôi" },
  { id: 2, name: "Vợ/chồng của tôi" },
  { id: 3, name: "Ông bà của tôi" },
  { id: 4, name: "Bạn bè/họ hàng của tôi" },
  { id: 5, name: "Bản thân tôi" },
];
const gender = [
  { id: 1, name: "Nam" },
  { id: 2, name: "Nữ" },
  { id: 3, name: "Khác" },
];
const ageRender = [
  { id: 1, name: "50s" },
  { id: 2, name: "60s" },
  { id: 3, name: "70s" },
  { id: 4, name: "80s" },
  { id: 5, name: "90s" },
];

export function UserNeedCare() {
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedGender, setSelectedGender] = useState("Nam"); // Mặc định chọn thằng đầu tiên
  const [age, setAge] = React.useState("50s");

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleSelect = (name) => {
    setSelectedGender(name);
  };
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <div>
        <div className="ms-5 my-2">
          <LogoProject />
        </div>
        <div className="row ">
          <div className="col-11 header"></div>
        </div>
      </div>
      <div className="d-flex user-need-care">
        <div className="user-need-care-container">
          <h4>Chia sẻ thêm thông tin về người được chăm sóc.</h4>
          <h5>Ai đang cần chăm sóc?</h5>
          {relationship.map((e) => (
            <div
              key={e.id}
              className="d-flex w-50 my-3"
              style={{ justifyContent: "space-between" }}
            >
              <label htmlFor={`id-${e.id}`}>{e.name}</label>
              <Radio
                value={e.name}
                checked={selectedValue === e.name}
                onChange={handleChange}
                name="selectRelationship"
                id={`id-${e.id}`}
              />
            </div>
          ))}
          <h5> Gender</h5>
          <div className="d-flex gender">
            {gender.map((e) => (
              <div
                className={`w-100 gender-render-${selectedGender === e.name ? "active" : ""}`}
                key={e.id}
                onClick={() => handleSelect(e.name)}
              >
                {e.name}
              </div>
            ))}
          </div>
          <h5 className="mt-4 mb-3  "> Age</h5>
          <Box sx={{ minWidth: 60 }}>
            <FormControl fullWidth>
              <Select
                className="w-50"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChangeAge}
              >
                {ageRender.map((e) => (
                  <MenuItem key={e.id} value={e.name}>
                    {e.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <h5 className="my-4">Chúng tôi nên biết gì về họ?</h5>
          <span className="my-2">Ví dụ:</span>
          <ul>
            <li className="my-2">Họ có cần điều kiện cơ bản gì không(Ví dụ người hỗ trợ là nam/ nữ)</li>
            <li className="my-2">Sở thích, niềm vui của họ là gì?</li>
            <li className="my-2">Một ngày sinh hoạt bình thường của họ như thế nào?</li>
          </ul>
          <div class="form-group">
            <textarea class="form-control" placeholder="Chia sẻ chi tiết ở đây" rows="3"></textarea>
          </div>
        </div>
      </div>

      <div className="mt-2 mb-5 button-date-session">
        <NavLink to="/user/assistant-caption">
          <ButtonForMe childrenButton={"Next"} />
        </NavLink>
      </div>
      <div className="legal-notice-user">
        <LegalNotice />
      </div>
    </>
  );
}
