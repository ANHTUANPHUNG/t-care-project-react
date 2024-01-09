import React, { useEffect, useState } from "react";
import "./Address.css";
import { NavBarFindJob } from "../navBarFindJob/NavBarFindJob";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import SearchLocationInput from "../../../apiGoogleMap/SearchLocationInput ";
import MapComponent from "../../../apiGoogleMap/GoogleMap";
import { ButtonForMe } from "../../../ButtonForMe";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { toast } from "react-toastify";
import axios from "axios";
import EmployeeServiceAPI from "../../../../service/employeeServiceAPI";
export function Address() {
  const [km, setKm] = useState(10);
  const [place, setPlace] = useState("");
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 0,
    lng: 0,
  });
  let navigate = useNavigate();
  const { id } = useParams();
  const [location, setLocation] = useState({
    nameLocation: place,
    distanceForWork: km,
    longitude: selectedLocation.lng,
    latitude: selectedLocation.lat,
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
  }, [location]);
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

  const handleButtonClick = async () => {
    const postData = {
      nameLocation: place,
      distanceForWork: km,
      longitude: selectedLocation.lng,
      latitude: selectedLocation.lat,
    };
await EmployeeServiceAPI.updateLocation(id,postData)
    // axios
    //   .put(`http://localhost:8080/api/employees/location/${id}`, postData)
    //   .then((response) => {
    //     navigate(`/assistant/process`);
    //     console.log("Post thành công:", response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Lỗi khi gửi POST request:", error);

    //     navigate(`/assistant/process`)
    //     toast.error("Lỗi khi gửi thông tin vị trí");
    //   });
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
        <SearchLocationInput setSelectedLocation={setSelectedLocation} setPlace={setPlace} />
        <MapComponent selectedLocation={selectedLocation} />
      </div>
      <div style={{ margin: "30px 35%" }}>
        <h6 style={{ paddingLeft: "50px" }}>Bạn có thể di chuyển bao xa?</h6>
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
      <div style={{ textAlign: "end", marginBottom: "40px", marginRight: "80px" }}>
        {/* <NavLink to={"/assistant/process"}> */}
        <ButtonForMe childrenButton={"Next"} colorButton={"#213f5f"} onclick={handleButtonClick} />
        {/* </NavLink> */}
      </div>
    </div>
  );
  return (
    <>
      <NavBarFindJob children={formAddress} />
    </>
  );
}
