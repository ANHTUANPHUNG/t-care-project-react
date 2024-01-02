import React, { useEffect, useState } from "react";
import "./Address.css";
import { NavBarFindJob } from "../navBarFindJob/NavBarFindJob";
import { NavLink } from "react-router-dom";
import SearchLocationInput from "../../../apiGoogleMap/SearchLocationInput ";
import MapComponent from "../../../apiGoogleMap/GoogleMap";
import { ButtonForMe } from "../../../ButtonForMe";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
export function Address() {
  const [km, setKm] = useState(10);
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 0,
    lng: 0,
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setSelectedLocation({
          lat: latitude,
          lng: longitude,
        });
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      }
    );
  }, []);
  const handleMinus = () => {


    if (km > 5) {
      toast.success("Xử lý thành công");
      setKm((prev) => prev - 5);
    } else {
      toast.error("Số km lớn hơn 5");
    }
  };
  const handleAdd = () => {

    if (km < 100) {
      toast.success("Xử lý thành công");
      setKm((prev) => prev + 5);
    } else {
      toast.error("Số km bé hơn 100");
    }
  };

  const formAddress = (
    <div
      style={{
        margin: "5% 10%",
        backgroundColor: "white",
        borderRadius: "15px",
        border: "1px solid #b3bac1",
      }}
    >
      <div style={{ margin: "30px 200px" }}>
        <SearchLocationInput setSelectedLocation={setSelectedLocation} />
        <MapComponent selectedLocation={selectedLocation} />
      </div>
      <div style={{ margin: "30px 35%" }}>
        <h6 style={{ paddingLeft: "50px" }}>How far are you willing to travel?</h6>
        <div
          style={{
            display: "flex",
            margin: "30px 0",
            justifyContent: "space-around",
          }}
        >
          <div style={{ cursor: "pointer", margin: "10px" }} onClick={() => handleMinus()}>
           <RemoveIcon />
          </div>
          <div>
            <span style={{ fontSize: "30px" }}>{km}</span> <br /> <span>Miles</span>
          </div>
          <div style={{ cursor: "pointer", margin: "10px" }} onClick={() => handleAdd()}>
             <AddIcon />
          </div>
        </div>
      </div>
      <div style={{ textAlign: "end", marginBottom: "40px", marginRight: "80px" }}>
        <NavLink to={"/assistant/process"}>
          <ButtonForMe childrenButton={"Next"} />
        </NavLink>
      </div>
    </div>
  );
  return (
    <>
      <NavBarFindJob children={formAddress} />
    </>
  );
}
