import React, { useEffect, useState } from "react";
import "./RenderAss.css";
import { Checkbox } from "@mui/material";
import { Star, StarHalf } from "@mui/icons-material";

export function RenderAss({ setIsOpen, handleCheckboxChange, isChecked, listFilterAss }) {
  return (
    <>
      {listFilterAss?.map((e) => (
        <div key={e?.id} className="render-list-assistant-body-render">
          <div className="render-list-assistant-body-render-container">
            <div className="d-flex render-list-assistant-body-render-container-header">
              <img
                // src="https://png.pngtree.com/png-vector/20190413/ourmid/pngtree-img-file-document-icon-png-image_938720.jpg"
                alt=""
                src={e?.photoUrl}
              />
              <div className="render-list-assistant-body-render-container-header-information">
                <h6 className="m-0">
                  {e?.firstName} {e?.lastName}
                </h6>
                <div className="d-flex">
                  {new Array(Math.floor(Math.ceil(e?.starAverage * 2) / 2))
                    .fill(1)
                    .map((item, index) => (
                      <Star key={index} style={{ color: "yellow" }} />
                    ))}
                  {Math.ceil(e?.starAverage * 2) / 2 -
                    Math.floor(Math.ceil(e?.starAverage * 2) / 2) >
                    0 && <StarHalf style={{ color: "yellow" }} />}
                  <span style={{ marginLeft: "5px", fontSize: "12px", marginTop:"3px" }}>
                    (<span >{e?.rateQuantity}</span>)
                  </span>
                </div>
                <div>
                  <span>{e?.nameLocation}</span>
                </div>
              </div>
              <div>
                <Checkbox  checked={e?.id} onChange={handleCheckboxChange} />
              </div>
            </div>
            <div className="d-flex mt-3 render-list-assistant-body-render-container-body">
              <div className="ms-4">
                My name is Toni, I've been in home care for over 12 years. I'm Certified, I've
                worked with health care agencies and ...{" "}
                <span onClick={() => setIsOpen(true)}>read more</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
