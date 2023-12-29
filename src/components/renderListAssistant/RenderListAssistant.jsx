import React, { useState } from "react";
import "./RenderListAssistant.css";
import { ButtonForMe } from "../ButtonForMe";
import LogoProject from "../logoProject/LogoProject";
import { LegalNotice } from "../carehub/LegalNotice";
import { NavLink } from "react-router-dom";
import { Checkbox } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

export function RenderListAssistant() {
  const [isChecked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  return (
    <>
      <div>
        <div className="ms-5 my-2">
          <LogoProject />
        </div>
      </div>

      <div className="render-list-assistant">
        <div className="row render-list-assistant-header">
          <div className="col-3"></div>
          <div className="col-6 py-3">
            <h4>Here's a personalized list of caregivers based on your needs</h4>
            <h6>Shortlist the ones you like best</h6>
          </div>
          <div className="col-3 p-0">
            <img
              src="https://res.cloudinary.com/dw4xpd646/image/upload/v1703816118/Cloudinary-React/ljezvtifp9u79nfvqtkq.png"
              alt=""
            />
          </div>
        </div>
        <div className="render-list-assistant-body">
          <div className="render-list-assistant-body-render">
            <div className="render-list-assistant-body-render-container">
              <div className="d-flex render-list-assistant-body-render-container-header">
                <img
                  src="https://png.pngtree.com/png-vector/20190413/ourmid/pngtree-img-file-document-icon-png-image_938720.jpg"
                  alt=""
                />
                <div className="render-list-assistant-body-render-container-header-information">
                  <h6 className="m-0">Toni C</h6>
                  <span> Sao</span>
                  <div>
                    {/* nhwớ chỉnh fontsize nhỏ lại */}
                    <span>Địa chỉ</span>
                  </div>
                </div>
                <div>
                  <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
                </div>
              </div>
              <div className="d-flex mt-3 render-list-assistant-body-render-container-body">
                <div className="ms-4">
                  My name is Toni, I've been in home care for over 12 years. I'm Certified, I've
                  worked with health care agencies and ...{" "}
                  <span onClick={handleOpen}>read more</span>
                </div>
              </div>
            </div>
          </div>

          <div className="per-page">
            <div className="per-page-item">
              <div>View 5 more caregivers</div>
            </div>
          </div>
        </div>
      </div>

      {isChecked && (
        <div className="check-select">
          <div className="check-select-header">
            <div>
              <h5>You've shortlisted 1 caregiver</h5>
              <span>Add more or continue to evaluate them</span>
            </div>
            <div className="check-select-button">
              <NavLink to="/user/assistant-caption">
                <ButtonForMe value={100} childrenButton={'Next'}></ButtonForMe>
              </NavLink>
            </div>
          </div>
        </div>
      )}

      <div className="legal-notice-user">
        <LegalNotice />
      </div>
      <Modal keepMounted open={open} >
        <Box
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "45%",
            height: "100vh",
            bgcolor: "background.paper",
            border: "1px solid #000",
            boxShadow: 24,
          }}
        >
          <div className="modal-profile-content">aaaaa</div>
          <div className="modal-profile-footer">
            <div className="modal-profile-footer-add-list">
              <div className="modal-profile-footer-add-list-check-icon">
                <CheckIcon />
              </div>
              <span>Add to list</span>
            </div>
            <div  onClick={handleClose} className="modal-profile-footer-clear">
              <div className="modal-profile-footer-clear-icon">
                <ClearIcon />
              </div>
              <span>Close</span>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
