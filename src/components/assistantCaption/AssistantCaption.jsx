import React from "react";
import './AssistantCaption.css'
import { LegalNotice } from "../carehub/LegalNotice";
import { NavLink } from 'react-router-dom';
import { ButtonForMe } from "../ButtonForMe";
import LogoProject from "../logoProject/LogoProject";
export function AssistantCaption(){
    return(
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
                <h4 className="my-4">What are you looking for in a caregiver?</h4>
                <h6  className="mb-3">Is there anything else we should know about your ideal caregiver?</h6>
                <span className="my-3">Examples</span>
                <ul>
                    <li className="my-4">What type of personality would be a good fit?</li>
                    <li className="my-4">Are there any specialized skills they need?</li>
                    <li className="my-4">Should they have any specific hobbies/interests?</li>
                </ul>
                <div class="form-group">
            <textarea class="form-control" placeholder="Share detail here" rows="5"></textarea>
          </div>
            </div>
        </div>
  
        <div className="mt-2 mb-5 button-date-session">
          <NavLink to="/user/render-list-assistant">
            <ButtonForMe childrenButton={'Next'}/>
          </NavLink>
        </div>
        <div className="legal-notice-user">
          <LegalNotice />
        </div>
      </>
    )
}