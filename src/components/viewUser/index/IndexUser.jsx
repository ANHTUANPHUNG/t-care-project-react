import React, { useEffect, useState } from "react";
import "./IndexUser.css";
import { LegalNotice } from "../../carehub/LegalNotice";
import { ContainerViewUser } from "../containerViewUser/ContainerViewUser";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import SearchLocationInput from "../../apiGoogleMap/SearchLocationInput ";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { ServiceIndexUser } from "./ServiceIndexUser";
import { SkillIndexUser } from "./SkillIndexUser";
import { InfoIndexUser } from "./InfoIndexUser";
import { DateIndexUser } from "./DateIndexUser";
import { ButtonForMe } from "./../../ButtonForMe";
import { RenderListAssistantIndexUser } from "./RenderListAssistantIndexUser";
export function IndexUser() {
  const [listInformation, setListInformation] = useState();
  const [listService, setListService] = useState();
  const [listSkill, setListSkill] = useState();
  const [listAssistant, setListAssistant] = useState();
  const [checkButtonService, setCheckButtonService] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedInfos, setSelectedInfos] = useState([]);
  const [resetInputAddress, setResetInputAddress] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 0,
    lng: 0,
  });
  const [place, setPlace] = useState("");
  const [value, setValue] = useState();
  const [selectedDate, setSelectedDate] = useState(undefined);
  const [dayInWeek, setDayInWeek] = useState([]);
  const [startDay, setStartDay] = useState();
  const [endDay, setEndDay] = useState();
  let navigate = useNavigate();
  const { id } = useParams();
  const handleReset = () => {
    setSelectedInfos([]);
    setSelectedSkills([]);
    setCheckButtonService("");
    setResetInputAddress((pre) => !pre);
  };
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
      const responseAssistant = await axios.get("http://localhost:8080/api/employees");
      setListAssistant(responseAssistant.data);
    };
    axiosData();
  }, []);
  console.log(listAssistant);
  return (
    <>
      <ContainerViewUser />
      <div className="container-index-user">
        <div className="index-user-header">
          <LocalPoliceIcon className="icon-local-police" />
          <span>Tất cả người chăm sóc đều được kiểm tra lý lịch</span>
        </div>
      </div>

      <div className="index-user-body row ">
        <div className="index-user-body-filter col-4 sidebar">
          <div className="index-user-body-title">
            <h5>Tìm kiếm người chăm sóc theo mong muốn của bạn</h5>
            <span className="reset-filter" onClick={handleReset}>
              Chọn lại
            </span>
          </div>

          <div className="w-100"><SearchLocationInput
            setSelectedLocation={setSelectedLocation}
            setPlace={setPlace}
            marginTest={"0"}
            resetInputAddress={resetInputAddress}
            children={true}
          /></div>
          <div className="index-user-body-dates">
            <h6 style={{ margin: "0" }}>Thời gian cần chăm sóc</h6>
            <div className="index-user-body-dates-render">
              <DateIndexUser
                setSelectedDate={setSelectedDate}
                dayInWeek={dayInWeek}
                setValue={setValue}
                selectedDate={selectedDate}
                setDayInWeek={setDayInWeek}
                setStartDay={setStartDay}
                setEndDay={setEndDay}
              />
            </div>
          </div>
          <div className="index-user-body-services">
            <h6>Có thể giúp bạn với</h6>
            <div className="index-user-body-services-render">
              {listService?.map((e) => (
                <ServiceIndexUser
                  key={e.id}
                  value={e}
                  setCheckButtonService={setCheckButtonService}
                  checkButtonService={checkButtonService}
                />
              ))}
            </div>
          </div>
          <div className="index-user-body-skills">
            <h6>Kỹ năng chuyên nghiệp</h6>
            <div className="index-user-body-skills-render">
              {listSkill?.map((e) => (
                <SkillIndexUser
                  key={e.id}
                  setSelectedSkills={setSelectedSkills}
                  selectedSkills={selectedSkills}
                  value={e}
                />
              ))}
            </div>
          </div>
          <div className="index-user-body-infos">
            <h6>Kỹ năng chuyên nghiệp</h6>
            <div className="index-user-body-infos-render">
              {listInformation?.map((e) => (
                <InfoIndexUser
                  key={e.id}
                  setSelectedInfos={setSelectedInfos}
                  selectedInfos={selectedInfos}
                  value={e}
                />
              ))}
            </div>
          </div>
          <div className="button-index-user">
            <ButtonForMe
              value={60}
              childrenButton={"Tìm kiếm"}
              colorButton={"#3b71aa"}
              type="submit"
            />
          </div>
        </div>
        <div className="index-user-body-render-assistant col-8">

          {listAssistant?.map((e) => (
            <div key={e.id}>
              <RenderListAssistantIndexUser value={e}  />
            </div>
          ))}
        </div>
      </div>
      <LegalNotice />
    </>
  );
}
