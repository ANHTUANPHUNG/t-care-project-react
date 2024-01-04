import React, { useRef, useState } from "react";
import "./Photo.css";
import { SideBarFindJob } from "../sideBarFindJob/SideBarFindJob";
import { NavBarFindJob } from "../navBarFindJob/NavBarFindJob";
import AddIcon from "@mui/icons-material/Add";
import { ButtonForMe } from "../../../ButtonForMe";
import { NavLink } from "react-router-dom";
export function Photo() {
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = async(e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      console.log(selectedFile);

      const formData = new FormData();
      formData.append("avatar", selectedFile);
      formData.append("fileType", "image");
      try {
          const response = await fetch("http://localhost:8080/api/photos", {
              method: "POST",
              body: formData,
          });
          if (response.ok) {
              const result = await response.json();
              if (result) {
                  console.log(result);
              } else {
                  console.error('Image ID not found in the response.');
              }
          } else {
              console.error('Failed to upload image:', response.statusText);
          }
      } catch (error) {
          console.error('An error occurred:', error);
      }
  }
  };
  const photo = (
    <div className="col-9 " style={{ paddingTop: "20px" }}>
      <h4 className="" style={{ marginBottom: "20px" }}>
        Upload a photo
      </h4>
      <span>
        <strong>You're 7X more likely to get hired with a profile photo!</strong>
      </span>
      <div style={{ display: "flex", width: "30%", margin: "50px 0 20px 30%" }}>
        <img
          style={{
            width: "150px",
            border: "1px solid #d8d8d8",
            borderRadius: "90px",
            cursor: "pointer",
          }}
          src="https://res.cloudinary.com/dw4xpd646/image/upload/v1704296650/Cloudinary-React/kueocwghxyke61sj6bde.jpg"
          alt=""
          onClick={handleImageClick}
        />
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
          ref={inputRef}
          id="imgPhoto"
        />
        <label htmlFor="imgPhoto">
          <div
            style={{
              height: "43px",
              border: "30px",
              border: "1px solid white",
              borderRadius: "30px",
              marginLeft: "-34px",
              marginTop: "93px",
              backgroundColor: "#ef5844",
              cursor: "pointer",
            }}
          >
            <AddIcon style={{ color: "white", fontSize: "40px" }} />
          </div>
        </label>
      </div>
      <label htmlFor="imgPhoto">
        <h6 style={{ marginLeft: "248px", marginBottom: "50px", cursor: "pointer" }}>
          Tap to add a photo
        </h6>
      </label>
      <div style={{ color: "#334c64" }}>
        <h6 style={{ fontSize: "24px" }}>For the fastest approval time, be sure to:</h6>
        <ul>
          <li style={{ fontSize: "15px" }}>
            <strong>Look professional</strong>—show you're a pro
          </li>
          <li style={{ fontSize: "15px" }}>
            <strong>Show your face</strong>—no sunglasses, hat, etc
          </li>
          <li style={{ fontSize: "15px" }}>
            <strong>It's just you</strong>—no other people in the photo
          </li>
          <li style={{ fontSize: "15px" }}>
            <strong>No frames or filters</strong>—just be real
          </li>
        </ul>
      </div>
      <div style={{ width: "80%", fontSize: "12px" }}>
        If your photo includes children, by uploading and clicking Next, you verify that you are the
        parent or that you have explicit permission of the parent(s) to include the children in your
        photo.
      </div>
      <div className="" style={{ padding: "20px 0 40px 0", width: "70%", textAlign: "end" }}>
        <NavLink className="experience-link" to={"/assistant/photo"}>
          <ButtonForMe childrenButton={"Next"} colorButton={"#213f5f"} />
        </NavLink>
      </div>
    </div>
  );
  return (
    <NavBarFindJob
      children={
        <SideBarFindJob col={"col-8"} value={photo} check={true} activeIds={[1, 2, 3, 4, 5]} />
      }
    />
  );
}
