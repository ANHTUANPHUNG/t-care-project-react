import React, { useState } from "react";
import TokenIcon from "@mui/icons-material/Token";
import SecurityIcon from "@mui/icons-material/Security";
import { FavoriteBorder } from "@mui/icons-material";
import { ButtonForMe } from "../../ButtonForMe";
import { useParams } from "react-router-dom";
export function RenderListAssistantIndexUser({ value }) {
  const [selectedFavorites, setSelectedFavorites] = useState([]);
  const { id } = useParams();
  const handleSelectFavorite = (e) => {
    const isInfoSelected = selectedFavorites?.some((element) => element === e);
    if (isInfoSelected) {
      const updatedInfos = selectedFavorites?.filter((element) => element !== e);
      setSelectedFavorites(updatedInfos);
    } else {
      setSelectedFavorites((prev) => [...prev, e]);
    }
  };
  return (
    <>
    
      <div className="render-list-assistant-index-user" key={value.id}>
        <div className="render-list-assistant-index-user-header">
          <img src={value.photoUrl} alt="" />
          <div className="render-list-assistant-index-user-body">
            <span className="render-list-assistant-index-user-body-name">
              {value.lastName} {value.firstName}
            </span>
            <TokenIcon className="render-list-assistant-index-user-body-icon-token" />
            <SecurityIcon className="render-list-assistant-index-user-body-icon-security" />
            <div className="render-list-assistant-index-user-body-experience">
              <div>{value.nameAddress}</div>
              <div>{value.experience} năm kinh nghiệm</div>
            </div>
          </div>
        </div>
        <div className="render-list-assistant-index-user-footer">
          <span className="render-list-assistant-index-user-footer-content">
            "{value.descriptionAboutMySelf.slice(0, 100)}
            {value.descriptionAboutMySelf.length > 100 ? "..." : ""}"{" "}
            <a href={`http://localhost:3000/user/index/${id}/${value.id}`} target="_blank">more</a>
          </span>
          <FavoriteBorder
            className={`favorite-check-index-user${
              selectedFavorites.includes(value.id) ? "-active" : ""
            }`}
            onClick={() => handleSelectFavorite(value.id)}
            name={value.id}
          />
          <ButtonForMe childrenButton={"Thêm"} value={20} />
        </div>
      </div>
      <div className="render-list-assistant-index-user-footer-separation"></div>
    </>
  );
}
