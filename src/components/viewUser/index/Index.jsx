import React, { useEffect, useState } from "react";
import "./Index.css";
import { LegalNotice } from "../../carehub/LegalNotice";
import { ContainerViewUser } from "../containerViewUser/ContainerViewUser";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import SearchLocationInput from "./../../apiGoogleMap/SearchLocationInput ";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 320,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));
export function Index() {
  const [listInformation, setListInformation] = useState();
  const [listService, setListService] = useState();
  const [listSkill, setListSkill] = useState();
  const [place, setPlace] = useState("");
  const [checkButtonService, setCheckButtonService] = useState("");
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 0,
    lng: 0,
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setSelectedLocation({
        lat: latitude,
        lng: longitude,
      });
    });
  }, []);
  useEffect(() => {
    let axiosData = async () => {
      const responseInformation = await axios.get("http://localhost:8080/api/add-infos");
      setListInformation(responseInformation.data);

      const responseService = await axios.get("http://localhost:8080/api/serviceGenerals");
      setListService(responseService.data);

      const responseSkill = await axios.get("http://localhost:8080/api/skills");
      setListSkill(responseSkill.data);
    };
    axiosData();
  }, []);
  return (
    <>
      <ContainerViewUser />
      <div className="container-index-user">
        <div className="index-user-header">
          <LocalPoliceIcon className="icon-local-police" />
          <span>Tất cả người chăm sóc đều được kiểm tra lý lịch</span>
        </div>
      </div>

      <div className="index-user-body row">
        <div className="index-user-body-address col-4">
          <div className="index-user-body-title">
            <h5 >
              Tìm kiếm người chăm sóc theo mong muốn của bạn
            </h5>
            <span className="reset-filter">Chọn lại</span>
          </div>

          <SearchLocationInput
            setSelectedLocation={setSelectedLocation}
            test={<h6>Bạn cần chăm sóc ở đâu ?</h6>}
            setPlace={setPlace}
            marginTest={"0"}
          />
          <div className="index-user-body-services">
            <h6>Có thể giúp bạn với</h6>
            <div className="index-user-body-services-render">
              {listService?.map((e) => (
                <>
                  <HtmlTooltip
                    placement="right"
                    title={
                      <React.Fragment>
                        <Typography color="inherit">
                          {e.description.split(".").map(
                            (sentence, index) =>
                              sentence.length > 0 && (
                                <span key={index} className="mx-3">
                                  - {sentence.trim()}
                                  <br />
                                </span>
                              )
                          )}
                        </Typography>
                      </React.Fragment>
                    }
                  >
                    <Button
                      className={`index-user-body-service-render${
                        checkButtonService == e.name ? "-active" : ""
                      }`}
                      onClick={() => setCheckButtonService(e.name)}
                    >
                      {e.name}
                    </Button>
                  </HtmlTooltip>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <LegalNotice />
    </>
  );
}
