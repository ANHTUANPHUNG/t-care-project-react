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
  //   if (selectedFile) {
  //     console.log(selectedFile);

  //     const formData = new FormData();
  //     formData.append("avatar", selectedFile);
  //     formData.append("fileType", "image");
  //     try {
  //         const response = await fetch("http://localhost:8080/api/photos", {
  //             method: "POST",
  //             body: formData,
  //         });
  //         if (response.ok) {
  //             const result = await response.json();
  //             if (result) {
  //                 console.log(result);
  //             } else {
  //                 console.error('Image ID not found in the response.');
  //             }
  //         } else {
  //             console.error('Failed to upload image:', response.statusText);
  //         }
  //     } catch (error) {
  //         console.error('An error occurred:', error);
  //     }
  // }
  };
  const photo = (
    <div className="col-9 " style={{ paddingTop: "20px" }}>
      <h4 className="" style={{ marginBottom: "20px" }}>
       Tải ảnh lên
      </h4>
      <span>
        <strong>Bạn có khả năng được tuyển dụng cao hơn gấp 7 lần nếu ảnh có hồ sơ</strong>
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
        Nhấn để thêm ảnh
        </h6>
      </label>
      <div style={{ color: "#334c64" }}>
        <h6 style={{ fontSize: "24px" }}>Để có thời gian phê duyệt nhanh nhất, hãy đảm bảo:</h6>
        <ul>
          <li style={{ fontSize: "15px" }}>
            <strong>Bức hình chuyên nghiệp</strong>—Chứng tỏ bạn là một người chuyên nghiệp
          </li>
          <li style={{ fontSize: "15px" }}>
            <strong>Góc ảnh đầy đủ khuôn mặt của bạn</strong>—Không có kinh râm, mũ,..
          </li>
          <li style={{ fontSize: "15px" }}>
            <strong>Đó là bạn</strong>—Không có người nào khác trong bức ảnh này
          </li>
          <li style={{ fontSize: "15px" }}>
            <strong>Không có phần mềm chỉnh sửa</strong>—Hãy thành thật
          </li>
        </ul>
      </div>
      <div style={{ width: "80%", fontSize: "12px" }}>
        {/* If your photo includes children, by uploading and clicking Next, you verify that you are the
        parent or that you have explicit permission of the parent(s) to include the children in your
        photo. */}  
        Nếu ảnh của bạn có trẻ em, hãy tải lên và chọn Tiếp theo, bạn xác minh rằng bạn là người cha mẹ hoặc
         bạn được cha mẹ cho phép rõ ràng để đưa con cái vào hình chụp của bạn.
      </div>
      <div className="" style={{ padding: "20px 0 40px 0", width: "70%", textAlign: "end" }}>
        <NavLink className="experience-link" to={"/assistant/photo"}>
          <ButtonForMe childrenButton={"Tiếp theo"} colorButton={"#213f5f"} />
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
