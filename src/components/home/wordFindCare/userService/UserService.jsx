import React, { useEffect, useState } from "react";
import axios from "axios";
import LogoProject from "../../../logoProject/LogoProject";
import { LegalNotice } from "../../../carehub/LegalNotice";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { ButtonForMe } from "../../../ButtonForMe";
import { RadioService } from "./RadioService";
import GetServiceAPI from "../../../../service/getServiceAPI";
import { toast } from "react-toastify";

export function UserService() {
  const [listServiceGenerals, setListServiceGenerals] = useState();
  const [selectedRadioId, setSelectedRadioId] = useState(null);
  const {id} = useParams()
  let navigate = useNavigate();

  useEffect(() => {
    showListServiceGenerals();
  }, []);
  const showListServiceGenerals = async () => {
    const serviceGenerals = await GetServiceAPI.getServiceGeneral();
    setListServiceGenerals(serviceGenerals);
  };
  console.log(selectedRadioId);
  const handleSubmitService = async () => {
    const select = {
      serviceId:selectedRadioId
    }
    
    await axios
      .put(`http://localhost:8080/api/carts/services/${id}`, select)
      .then((resp) => {
        toast.success("Chọn dịch vụ thành công");
        navigate("/user/date-session" + "/" + id);

      })
      .catch((err) => {
        console.error("Lỗi khi gửi POST request:", err);
        toast.error("Chọn dịch vụ");
        
      });
  };
  return (
    <>
      <div>
        <div className="ms-5 my-2">
          <LogoProject />
        </div>

        <div className="row">
          <div className="col-6" style={{ backgroundColor: "#3b71aa", height: "3px" }}></div>
        </div>
      </div>
      <div className="d-flex my-5 " style={{ justifyContent: "center" }}>
        <div>
          <h3 className="mb-4">Bạn đang tìm kiếm loại chăm sóc nào?</h3>
          <RadioService value={listServiceGenerals} selectedRadioId={selectedRadioId} setSelectedRadioId={setSelectedRadioId} />
        </div>
      </div>
      <div className="my-5" style={{ height: "50px", textAlign: "center" }}>
          <ButtonForMe childrenButton={"Next"} onclick={handleSubmitService} />
      </div>
      <div className="legal-notice-user">
        <LegalNotice />
      </div>
    </>
  );
}
