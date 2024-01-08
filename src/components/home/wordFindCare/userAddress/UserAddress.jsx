import React, { useEffect, useState } from "react";
import LogoProject from "../../../logoProject/LogoProject";
import { NavLink } from "react-router-dom";
import { ButtonForMe } from "../../../ButtonForMe";
import { LegalNotice } from "../../../carehub/LegalNotice";
import SearchLocationInput from "../../../apiGoogleMap/SearchLocationInput ";
import MapComponent from "../../../apiGoogleMap/GoogleMap";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { toast } from "react-toastify";

export function UserAddress() {
  const [km, setKm] = useState(10);

  const [selectedLocation, setSelectedLocation] = useState({
    lat: 0,
    lng: 0,
  });

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
      setKm((prev) => prev - 5);
    } else {
      toast.error("Số km lớn hơn 5");
    }
  };
  const handleAdd = () => {

    if (km < 100) {
      setKm((prev) => prev + 5);
    } else {
      toast.error("Số km bé hơn 100");
    }
  };
  return (
    <>
      <div>
        <div className="ms-5 my-2">
          <LogoProject />
        </div>

        <div className="row">
          <div className="col-4" style={{ backgroundColor: "#3b71aa", height: "3px" }}></div>
        </div>
      </div>
      <div className="m-5 " style={{ textAlign: "-webkit-center" }}>
        
        <SearchLocationInput setSelectedLocation={setSelectedLocation} title={"Bạn tìm kiếm sự chăm sóc ở đâu?"}  />
        <MapComponent selectedLocation={selectedLocation} widthMap={"60%"}  />
        <div style={{ margin: "30px 35%" }}>
        <h6 style={{ paddingLeft: "50px" }}>Bạn dự định tìm kiếm trong bao xa?</h6>
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
            <span style={{ fontSize: "30px" }}>{km}</span> <br /> <span>Kilomets</span>
          </div>
          <div style={{ cursor: "pointer", margin: "10px" }} onClick={() => handleAdd()}>
             <AddIcon />
          </div>
        </div>
      </div>
        <div className="mt-5" style={{ height: "50px" }}>
          <NavLink to="/user/service">
            <ButtonForMe childrenButton={"Tiếp theo"} />
          </NavLink>
        </div>
      </div>
      <div className="legal-notice-user">
        <LegalNotice />
      </div>
    </>
  );
}
