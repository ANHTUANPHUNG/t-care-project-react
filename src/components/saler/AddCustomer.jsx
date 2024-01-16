import React, { useEffect, useState } from 'react'
import { ContainerViewUser } from '../viewUser/containerViewUser/ContainerViewUser'
import SearchLocationInput from '../apiGoogleMap/SearchLocationInput '
import "./addCustomer.css"  
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { DateIndexUser } from '../viewUser/index/DateIndexUser';
import { ButtonForMe } from '../ButtonForMe';
import { LegalNotice } from '../carehub/LegalNotice';
import ServiceIndexSale from './ServiceIndexSale';
import { toast } from 'react-toastify';
import { FormControl, Input, MenuItem, Select } from '@mui/material';

export default function AddCustomer() {
  const [listInformation, setListInformation] = useState();
  const [listService, setListService] = useState();
  const [listSkill, setListSkill] = useState();
  const [saleNote, setSaleNote] = useState();
  const [checkButtonService, setCheckButtonService] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedInfos, setSelectedInfos] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedEdecade, setSelectedEdecade] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [noteForPatient, setNoteForPatient] = useState('');
  const [noteForEmployee, setNoteForEmployee] = useState('');
  const [phone,setPhone] = useState("");
  const [relation, setRelation] = useState('MYPARENT');
  const [km, setKm] = useState(10);
  const [resetInputAddress, setResetInputAddress] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 0,
    lng: 0, 
  });
  const [place, setPlace] = useState("");
  const [value, setValue] = useState("");
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
      const responseService = await axios.get("http://localhost:8080/api/serviceGenerals");
      setListService(responseService.data);
    };
    axiosData();
  }, []);
  
  const transformedData = Object.entries(value).map(([date, sessionList]) => ({
    date,
    sessionOfDateList: sessionList,
  }));
  function convertDateFormat(dateString) {
    if (!dateString) {
      return ""; 
    }
  
    const parts = dateString.split('/');
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  const cart = {
    timeStart: convertDateFormat(startDay),
    timeEnd: convertDateFormat(endDay),
    noteForPatient: noteForPatient, 
    noteForEmployee: noteForEmployee,
    saleNote: saleNote,
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    serviceId: checkButtonService,
    memberOfFamily:relation,
    edecade:selectedEdecade,
    gender:selectedGender,
    latitude: selectedLocation.lat,
    longitude: selectedLocation.lng,
    locationPlace:place,
    distanceForWork: km,
    listDateSession: transformedData
  }
  const handleButtonClick = () => {
    console.log(cart);
    axios.post(`http://localhost:8080/api/carts/sale/${id}`, cart)
    .then(response => {
      console.log(response.data);
      toast.success("Thêm mới khách hàng thành công")
    })
    .catch(error => {
      console.error(error); 
    });
  }
  const handleKmChange = (newKm) => {
    setKm(newKm)
  };

  
  return (
    <>
      <ContainerViewUser />
      <div>
        <div className="index-user-header">
          <h4>THÊM MỚI KHÁCH HÀNG</h4>
        </div>
      </div>
      
      <div className='container'>
        <div >  
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '80px' }}>
          <h6>Họ</h6>
          <div>
            <Input
              placeholder="Nhập họ của khách"
              sx={{ '--Input-focused': 1, width: 256 }}
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>
        <div style={{ marginRight: '80px' }}>
          <h6>Tên</h6>
          <div>
            <Input
              placeholder="Nhập tên của khách"
              sx={{ '--Input-focused': 1, width: 256 }}
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div>
        <h6>Số điện thoại</h6>
        <div style={{ marginRight: '100px' }}>
           <Input
            placeholder="Nhập số điện thoại"
            sx={{ '--Input-focused': 1, width: 256 }}
            type="text"
            value={phone}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
      </div>
        <div style={{ marginRight: '100px' }}>
          <FormControl>
            <Select
              value={selectedGender || ''}
              onChange={(e) => setSelectedGender(e.target.value)}
              displayEmpty
              placeholder="Chọn giới tính"
            >
              <MenuItem value="" disabled>
                Chọn giới tính
              </MenuItem>
              {gender.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

       
      </div>
          <div>
        <h6>Mối quan hệ</h6>
        <div>
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
              value="MYSELF"
              checked={relation === 'MYSELF'}
              onChange={(e) => setRelation(e.target.value)}
            />
            Bản thân
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
        {/* <select
          value={selectedGender || ''}
          onChange={(e) => setSelectedGender(e.target.value)}
        >
          <option value="">Chọn giới tính</option>
          {gender.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select> */}

        </div>
        {/* <h6>Thập niên</h6>
        <div className="index-user-body-gender-render">
        <select
          value={selectedEdecade || ''}
          onChange={(e) => setSelectedEdecade(e.target.value)}
        > 
          <option value="">Chọn thập niên</option>
          {edecade.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        </div> */}
        <FormControl>
            <Select
              value={selectedEdecade || ''}
              onChange={(e) => setSelectedEdecade(e.target.value)}
              displayEmpty
              placeholder="Chọn thập niên"
            >
              <MenuItem value="" disabled>
                Chọn thập niên
              </MenuItem>
              {edecade.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
      </div>
          <div className="w-100"><SearchLocationInput
            setSelectedLocation={setSelectedLocation}
            setPlace={setPlace}
            marginTest={"0"}
            resetInputAddress={resetInputAddress}
            children={true}
            onKmChange={handleKmChange}
          /></div>
          <div className="index-user-body-dates">
            <h6 className='m0'>Thời gian cần chăm sóc</h6>
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
                <ServiceIndexSale
                  key={e.id}
                  value={e}
                  setCheckButtonService={setCheckButtonService}
                  checkButtonService={checkButtonService}
                />
              ))}
            </div>
          </div>
          <div className="button-index-user">
            <ButtonForMe
              value={60}
              childrenButton={"Tạo mới"}
              colorButton={"#3b71aa"}
              onclick={handleButtonClick}
            />
          </div>  
        </div>
      </div>
      <LegalNotice />
    </>
  );
}
