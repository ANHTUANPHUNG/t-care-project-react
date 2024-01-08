import React from "react";
import "./AssistantCaption.css";
import { LegalNotice } from "../../../carehub/LegalNotice";
import { NavLink } from "react-router-dom";
import LogoProject from "../../../logoProject/LogoProject";
import { ButtonForMe } from "./../../../ButtonForMe";
export function AssistantCaption() {
  return (
    <>
      <div>
        <div className="ms-5 my-2">
          <LogoProject />
        </div>
        <div className="row ">
          <div className="col-12 header"></div>
        </div>
      </div>
      <div className="user-assistant-caption">
        <div>
          <h4 className="my-4">Bạn cần tìm kiếm điều gì ở người hỗ trợ?</h4>
          <h6 className="mb-3">
            {/* Is there anything else we should know about your ideal caregiver? */}
            Ngoài ra còn vấn đề gì bạn biết về người hỗ trợ
          </h6>
          <span className="my-3">Ví dụ</span>
          <ul>
            <li className="my-4">Các tính cách cá nhân nào sẽ phù hợp với bạn?</li>
            <li className="my-4">Một số kĩ năng đặc biệt nào người hỗ trợ mà bạn cần?</li>
            <li className="my-4">Người hỗ trợ có cần phải có sở thích, đam mê gì không?</li>
          </ul>
          <div class="form-group">
            <textarea class="form-control" placeholder="Share detail here" rows="5"></textarea>
          </div>
        </div>
      </div>

      <div className="mt-2 mb-5 button-date-session">
        <NavLink to="/user/render-list-assistant">
          <ButtonForMe childrenButton={"Next"} />
        </NavLink>
      </div>
      <div className="legal-notice-user">
        <LegalNotice />
      </div>
    </>
  );
}
