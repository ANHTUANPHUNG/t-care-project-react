import React, { useState } from "react";
import { LegalNotice } from "../../../carehub/LegalNotice";
import { NavLink } from "react-router-dom";
import LogoProject from "../../../logoProject/LogoProject";
import { ButtonForMe } from "../../../ButtonForMe";
import { RadioJobType } from "../userJobType/RadioJobType";

export function UserJobType() {
  const [check, setCheck] = useState();
  return (
    <>
      <div>
        <div className="ms-5 my-2">
          <LogoProject />
        </div>

        <div className="row">
          <div className="col-8" style={{ backgroundColor: "#3b71aa", height: "3px" }}></div>
        </div>
      </div>
      <div className=" mt-5" style={{ textAlign: "-webkit-center" }}>
        <div style={{ width: "30%" }}>
          <h5>Tuyệt vời!</h5>
          <span>
              {/* Share a bit more about what you need, and we’ll create a job post to help you quickly
              find caregivers. */}
              Chia sẻ thêm một chút về những gì bạn cần, chúng tôi sẽ tạo tin tuyển dụng để giúp bạn nhanh chóng tìm người chăm sóc

          </span>
          <h6 className="mt-5 mb-3">Bạn đang tìm kiếm loại dịch vụ chăm sóc nào?</h6>
        </div>
        <div style={{ width: "30%" }}>
          <RadioJobType id="1" />
          <RadioJobType id="2" />
          <RadioJobType id="3" />
        </div>
      </div>
      <div className="my-5" style={{ height: "50px", textAlign: "center" }}>
        <NavLink to="/user/datesession">
          <ButtonForMe childrenButton={"Next"} />
        </NavLink>
      </div>
      <div className="legal-notice-user">
        <LegalNotice />
      </div>
    </>
  );
}
