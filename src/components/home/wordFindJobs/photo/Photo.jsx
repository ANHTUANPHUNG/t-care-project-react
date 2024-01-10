import React, { useRef, useState } from "react";
import "./Photo.css";
import { SideBarFindJob } from "../sideBarFindJob/SideBarFindJob";
import { NavBarFindJob } from "../navBarFindJob/NavBarFindJob";
import AddIcon from "@mui/icons-material/Add";
import { ButtonForMe } from "../../../ButtonForMe";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import LoadingPage from "../../../common/LoadingPage";
import ModalUnstyled from "../../../ModalToMe";
import { Button } from "bootstrap";
export function Photo() {
  const inputRef = useRef(null);
  const [check, setCheck] = useState();
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [avatar, setAvatar] = useState("")
  const {id} = useParams()
  const [checkModal, setCheckModal] = useState(false);
  const [error, setError] = useState("")

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    setIsLoading(true);

    if (selectedFile) {
      const formData = new FormData();
      formData.append("avatar", selectedFile);
      formData.append("fileType", "image");

      try {
        const response = await axios.post("http://localhost:8080/api/photos", formData);

        if (response.status === 200) {
          const result = response.data;
              setError("");
          if (result) {
            console.log(result);
            setImage(result.url);
            setAvatar(result.id)
          } else {
            console.error("Image ID not found in the response.");
          }
        } else {
          console.error("Failed to upload image:", response.statusText);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  

  const handleSubmitPhoto = async (e) => {
    e.preventDefault();

    if (avatar.trim() ==="") {
      setError("Bạn quên thêm ảnh rồi!");
      return;
    }
    setError("");
    const photoEmployee = { avatar: avatar };
    axios
    .put(`http://localhost:8080/api/employees/photo/${id}`, photoEmployee)
    .then((response) => {
     toast.success("Hoàn tất thêm ảnh cá nhân")
     setCheckModal(true);
    })
    .catch((error) => {
      console.error("Đã có lỗi xảy ra:", error);
    })
    .finally(() => {
      setIsLoading(false);
    });
  };
  const  ImageAvatar = ({image}) =>{
    return image != null ? (
      <>
      <img
        style={{
          width: "150px",
          border: "1px solid #d8d8d8",
          borderRadius: "90px",
          cursor: "pointer",
        }}
        src={image}
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
        /></>
    ) : (
      <>
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
      </>
    )
  }

  const formTips = (
    <>
    
      <h2 id="unstyled-modal-title" className="modal-title">
        Một số mẹo tạo tiểu sử giúp dễ dàng hơn trong việc tìm kiếm công việc
      </h2>
      <ul style={{ width: "100%" }} className="modal-description">
        <li>Một tiểu sử thật chi tiết để các gia đình hiểu hơn về bạn</li>
        <li>Cho gia đình biết kiểu công việc mà bạn đang tìm kiếm</li>
        <li>Hãy kể cho gia đình biết bạn yêu quý điều gì</li>
      </ul>
      <p>
        <strong>Một số ví dụ:</strong>
      </p>
      <p style={{ margin: 0 }}>
        <strong>Thơ Nguyễn đến từ 30 Hoàng Quang, Thuận An, Huế</strong>
      </p>
      <span>
        Tôi là một bà mẹ ba con tích cực và đầy nghị lực và là bà của ba đứa cháu. Vì
         trong vài năm, tôi làm việc liên tục ở các trung tâm hội người cao tuổi chủ yếu là vì tôi thích giúp đỡ với
         người cao tuổi. Gần đây tôi đang bận giúp đỡ việc nuôi dạy các cháu của mình! Bây giờ các cháu đang ở trong
         trường học, tôi đang tìm cách kiếm thêm một ít tiền trong khi làm công việc tôi yêu thích
      </span>
      <p style={{ margin: "20px 0 0 0" }}>
        <strong>Minh Nguyễn đến từ 28 Nguyễn Trường Tộ, Huế </strong>
      </p>
      <span>
        Xin chào cả nhà, tôi là một người đáng tin cậy, kiên nhẫn và biết lắng nghe, tôi có khoảng 5 năm kinh nghiệm
        trong việc chăm sóc lĩnh vực y tế, biết đo huyết áp, đường máu,...
        Tôi muốn kiếm thêm công việc vào thời gian buổi tối hoặc cuối tuần
      </span>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <Button
          onClick={() => setCheckModal(false)}
          style={{ backgroundColor: "#213f5f", color: "white", width: "30%" }}
        >
          Hiểu rồi
        </Button>
      </div>
    </>
  );

  const photo = (
    <div className="col-9 " style={{ paddingTop: "20px" }}>
      <h4 className="" style={{ marginBottom: "20px" }}>
        Tải ảnh lên
      </h4>
      <span>
        <strong>Bạn có khả năng được tuyển dụng cao hơn gấp 7 lần nếu ảnh có hồ sơ</strong>
      </span>
      <div style={{ display: "flex", width: "30%", margin: "50px 0 20px 30%" }}>
        {!isLoading && <ImageAvatar image={image} />}
        
        {isLoading && <LoadingPage/>}
      </div>
      <label htmlFor="imgPhoto">
        <h6 style={{ marginLeft: "248px", marginBottom: "50px", cursor: "pointer" }}>
          Nhấn để thêm ảnh
        </h6>
        {error && <p style={{ color: "red",paddingLeft: "250px" }}>{error}</p>}
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
        Nếu ảnh của bạn có trẻ em, hãy tải lên và chọn Tiếp theo, bạn xác minh rằng bạn là người cha
        mẹ hoặc bạn được cha mẹ cho phép rõ ràng để đưa con cái vào hình chụp của bạn.
      </div>
      <ModalUnstyled check={checkModal} onClose={() => setCheckModal(false)} children={formTips} widthForm={"79%"} heightForm={"80vh"} />
      <div className="" style={{ padding: "20px 0 40px 0", width: "70%", textAlign: "end" }}>
          <ButtonForMe childrenButton={"Tiếp theo"} colorButton={"#213f5f"} onclick={handleSubmitPhoto} />
      </div>
      
    </div>
  );
  return (
    <NavBarFindJob
      children={
        <SideBarFindJob col={"col-10"} value={photo} check={true} activeIds={[1, 2, 3, 4, 5]} />
      }
    />
  );
}
