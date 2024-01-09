import React, { useState } from "react";
import "./Availability.css";
import { NavBarFindJob } from "../navBarFindJob/NavBarFindJob";
import { SideBarFindJob } from "../sideBarFindJob/SideBarFindJob";

import { SelectDate } from "../../../selectDate/SelectDate";
import { NavLink, Navigate, useParams } from "react-router-dom";
import { ButtonForMe } from "../../../ButtonForMe";
import axios from "axios";
import { toast } from "react-toastify";

export function Availability() {
  const { id } = useParams();
  const [value, setValue] = useState();
  const transformData = (value) => {
    if (!value || typeof value !== 'object') {
      return { listDateSession: [] };
    }
    const daysOfWeek = Object.keys(value);
    const transformedData = {
      listDateSession: daysOfWeek.map((day) => ({
        date: day,
        sessionOfDateList: value[day],
      })),
    };
  
    return transformedData;
  };
  
  const result = transformData(value);
  console.log(result);
  const handleSubmitAvailability = async (e) => {
    
    axios
      .put(`http://localhost:8080/api/employees/dateSessions/${id}`,result)
      .then((response) => {
        Navigate(`/assistant/experience/` + id);
        toast.success("Hoàn thành cập nhật ngày có thể làm");
      })
      .catch((error) => {
        console.error("Lỗi khi gửi POST request:", error);
        toast.error("Lỗi khi cập nhật ngày làm");
      });
  };

  const needCare = (
    <div className="col-9 ">
      <h4 className="availability-title">Lịch làm của tôi</h4>
      <p className="availability-value">
        Hãy cho chúng tôi biết lịch trình hàng tuần của bạn thường như thế nào. Nếu cần, rất dễ để
        quay lại và chỉnh sửa nó khi đăng nhập lại
      </p>
      <h6>Tôi có thể làm việc vào...</h6>
      <div className="date-session-map-job">
        <SelectDate paddingSpan={"12px"} setValue={setValue} />
      </div>
      <div style={{ textAlign: "end", margin: " 0 50px 40px 0" }}>
        <ButtonForMe
          childrenButton={"Tiếp theo"}
          colorButton={"#213f5f"}
          onclick={handleSubmitAvailability}
        />
      </div>
    </div>
  );

  return (
    <NavBarFindJob
      children={<SideBarFindJob col={"col-4"} value={needCare} check={true} activeIds={[1, 2]} />}
    />
  );
}
