import React, { useEffect, useState } from 'react'
import { ContainerViewUser } from '../viewUser/containerViewUser/ContainerViewUser'
import SearchLocationInput from '../apiGoogleMap/SearchLocationInput '
import DateBetween from '../home/wordFindCare/datesession/DateBetween';
import { SelectDate } from '../selectDate/SelectDate';
import "./addCustomer.css"  
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { DateIndexUser } from '../viewUser/index/DateIndexUser';
import { ServiceIndexUser } from '../viewUser/index/ServiceIndexUser';
import { SkillIndexUser } from '../viewUser/index/SkillIndexUser';
import { InfoIndexUser } from '../viewUser/index/InfoIndexUser';
import { ButtonForMe } from '../ButtonForMe';
import { RenderListAssistantIndexUser } from '../viewUser/index/RenderListAssistantIndexUser';
import { LegalNotice } from '../carehub/LegalNotice';

export default function AddCustomer() {
  const [listInformation, setListInformation] = useState();
  const [listService, setListService] = useState();
  const [listSkill, setListSkill] = useState();
  const [listAssistant, setListAssistant] = useState();
  const [saleNote, setSaleNote] = useState();
  const [checkButtonService, setCheckButtonService] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedInfos, setSelectedInfos] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [noteForPatient, setNoteForPatient] = useState('');
  const [noteForEmployee, setNoteForEmployee] = useState('');
  const [phone,setPhone] = useState("");
  const [relation, setRelation] = useState('');
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
  const gender = ['MALE','FEMALE','OTHER']
  const edecade = ['THIRTY','FORTY','FIFTY','SIXTY','SEVENTY','EIGHTY','NINETY']
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
    };
    axiosData();
  }, []);
  console.log(listAssistant);
  return (
    <>
      <ContainerViewUser />
      <div>
        <div className="index-user-header">
          <h4>THÊM MỚI KHÁCH HÀNG</h4>
        </div>
      </div>

      <div>
        <div >  
          <div>
          <div className="index-user-body-name">
        <h6>Họ</h6>
        <div className="index-user-body-name-render">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
      </div>
      <div className="index-user-body-name">
        <h6>Tên</h6>
        <div className="index-user-body-name-render">
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="index-user-body-name">
        <h6>Số điện thoại</h6>
        <div className="index-user-body-name-render">
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
          </div>

          <div className="index-user-body-relation">
        <h6>Mối quan hệ</h6>
        <div className="index-user-body-relation-render">
          <label>
            <input
              type="radio"
              value="MYPARENT"
              checked={relation === 'MYPARENT'}
              onChange={(e) => setRelation(e.target.value)}
            />
            Mẹ/Bố
          </label>
          <label>
            <input
              type="radio"
              value="MYSPOUSE"
              checked={relation === 'MYSPOUSE'}
              onChange={(e) => setRelation(e.target.value)}
            />
            Vợ/Chồng
          </label>
          <label>
            <input
              type="radio"
              value="MYGRANDPARENTS"
              checked={relation === 'MYGRANDPARENTS'}
              onChange={(e) => setRelation(e.target.value)}
            />
            Ông/Bà
          </label>
          <label>
            <input
              type="radio"
              value="OTHER"
              checked={relation === 'OTHER'}
              onChange={(e) => setRelation(e.target.value)}
            />
            Khác
          </label>
        </div>
      </div>
          <div className="index-user-body-note">
        <h6>Ghi chú cho bệnh nhân</h6>
        <div className="index-user-body-note-render">
          <textarea
            value={noteForPatient}
            onChange={(e) => setNoteForPatient(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="index-user-body-note">
        <h6>Ghi chú cho nhân viên</h6>
        <div className="index-user-body-note-render">
          <textarea
            value={noteForEmployee}
            onChange={(e) => setNoteForEmployee(e.target.value)}
          ></textarea>
        </div>
        <h6>Ghi chú của sale </h6>
        <div className="index-user-body-note-render">
          <textarea
            value={saleNote}
            onChange={(e) => setSaleNote(e.target.value)}
          ></textarea>
        </div>
      </div>
          <div className="index-user-body-gender">
        <h6>Giới tính</h6>
        <div className="index-user-body-gender-render">
          <select
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
          >
            <option value="">Chọn giới tính</option>
            {gender.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
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
      </div>
      <LegalNotice />
    </>
  );
}
