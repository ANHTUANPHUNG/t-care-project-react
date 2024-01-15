import React, { useEffect, useState } from 'react'
import { ContainerViewUser } from '../viewUser/containerViewUser/ContainerViewUser'
import SearchLocationInput from '../apiGoogleMap/SearchLocationInput '
import DateBetween from '../home/wordFindCare/datesession/DateBetween';
import { SelectDate } from '../selectDate/SelectDate';
import "./addCustomer.css"

export default function AddCustomer() {
  const [place, setPlace] = useState("");
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 0,
    lng: 0,
  });
  
  const [value, setValue] = useState();
  const [dayInWeek, setDayInWeek] = useState([]);
  const [selectedDate, setSelectedDate] = useState(undefined);
  const handleDateChange = (date) => {
    setSelectedDate(date);
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
  return (
    <div>
      <ContainerViewUser/>

      <SearchLocationInput
            setSelectedLocation={setSelectedLocation}
            test={<h6>Bạn cần chăm sóc ở đâu ?</h6>}
            setPlace={setPlace}
            marginTest={"0"}
          />

      <div className="d-flex mt-5 date-session">
        <div>
          <h4>Bạn cần chăm sóc những ngày nào?</h4>
        </div>
      </div>
          <div className="date-session-map">
        <div style={{ margin: "0px 400px" }}>
          <DateBetween
            onChange={handleDateChange}
            setSelectedDate={setSelectedDate}
            selectedDate={selectedDate}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          {selectedDate && selectedDate[0] && selectedDate[1] && (
            <SelectDate dayInWeek={dayInWeek} setValue={setValue} />
          )}{" "}
        </div>
      </div>
    </div>
  )
}
