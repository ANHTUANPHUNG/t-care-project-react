import React, { useState } from "react";
import TokenIcon from "@mui/icons-material/Token";
import SecurityIcon from "@mui/icons-material/Security";
import { FavoriteBorder } from "@mui/icons-material";
import { Button } from "@mui/material";
import { ButtonForMe } from "../../ButtonForMe";
export function RenderListAssistantIndexUser({ value }) {
    const [selectedInfos,setSelectedInfos] = useState([])
  const handleSelectInfo = (e) => {
    const isInfoSelected = selectedInfos?.some((element) => element === e);
    if (isInfoSelected) {
      const updatedInfos = selectedInfos?.filter((element) => element !== e);
      setSelectedInfos(updatedInfos);
    } else {
      setSelectedInfos((prev) => [...prev, e]);
    }
  };
  return (
    <>
      <div key={value.id} style={{ padding: "10px 40px" }}>
        <div style={{ display: "flex", margin: "0 30px", padding: "20px 0" }}>
          <img
            src={value.photoUrl}
            alt=""
            style={{ width: "100px", borderRadius: "20px", height: "100px" }}
          />
          <div style={{ fontSize: "20px", marginLeft: "10px" }}>
            <span style={{ fontWeight: "bold" }}>
              {value.lastName} {value.firstName}{" "}
            </span>
            <TokenIcon style={{ color: "#4093e9", margin: "0 3px" }} />
            <SecurityIcon style={{ color: "#4093e9" }} />
            <div style={{ fontSize: "15px" }}>
              <div>{value.nameAddress}</div>
              <div>{value.experience} years of experience</div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", margin: "0 30px", justifyContent: "space-around" }}>
          <span style={{ fontSize: "12px", width: "70%" }}>
            "{value.descriptionAboutMySelf.slice(0, 100)}
            {value.descriptionAboutMySelf.length > 100 ? "..." : ""}"<a href="">more</a>
          </span>
          <FavoriteBorder
            className={`favorite${
              selectedInfos.includes(value.id) ? "-active" : ""
            }`}
            onClick={() => handleSelectInfo(value.id)}
            style={{ marginTop: "6px", cursor: "pointer" }}
            name={value.id}
          />
          <ButtonForMe childrenButton={"Thêm"} value={20} />
        </div>
      </div>
      <div style={{ height: "1px", backgroundColor: "#e0e0e0", marginLeft: "70px" }}></div>
    </>
  );
}
