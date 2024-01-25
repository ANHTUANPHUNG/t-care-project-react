import React, { useEffect, useState } from "react";
import "./Contract.css";
import { LegalNotice } from "../../carehub/LegalNotice";
import { ContainerViewUser } from "../containerViewUser/ContainerViewUser";
import { useParams } from "react-router-dom";
import axios from "axios";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ModalUnstyled from "../../ModalToMe";

export function Contract() {
  const { id } = useParams();
  const [listContract, setListContract] = useState([]);
  const [checkModal, setCheckModal] = useState(false);
  const [date, setDate] = useState(null);
  const [starDate, setStarDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/contracts/users/${id}`).then((res) => {
      const arrayList = res.data.content.map((e, i) => ({
        ...e,
        indexContract: i + 1,
      }));
      setListContract(arrayList);
    });
  }, [id]);
  console.log(listContract);
  const handleDetail = (e) => {
    setCheckModal(true);
    setContract(e);
    const dateString = new Date(e.createAt);
    const starDateString = new Date(e.timeStart);
    const endDateString = new Date(e.timeEnd);

    const monthNames = [
      "tháng 1",
      "tháng 2",
      "tháng 3",
      "tháng 4",
      "tháng 5",
      "tháng 6",
      "tháng 7",
      "tháng 8",
      "tháng 9",
      "tháng 10",
      "tháng 11",
      "tháng 12",
    ];
    const formattedDate = `Huế, ngày ${dateString.getDate()} tháng ${
      monthNames[dateString.getMonth()]
    } năm ${dateString.getFullYear()}`;
    const formattedStarDate = ` ngày ${starDateString.getDate()} tháng ${
      monthNames[starDateString.getMonth()]
    } năm ${starDateString.getFullYear()}`;
    const formattedEndDate = ` ngày ${endDateString.getDate()} tháng ${
      monthNames[endDateString.getMonth()]
    } năm ${endDateString.getFullYear()}`;
    setDate(formattedDate);
    setStarDate(formattedStarDate);
    setEndDate(formattedEndDate);
  };
  const contractDetail = (
    <>
      <div style={{ textAlign: "center" }}>
        <span style={{ fontWeight: "600", fontSize: "30px" }}>
          CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
        </span>{" "}
        <br />
        <span style={{ fontSize: "20px" }}>Độc lập - Tự do - Hạnh phúc</span>
        <div
          style={{
            height: "3px",
            backgroundColor: "#aeafb1",
            margin: "0 33% ",
            marginBottom: "20px",
          }}
        ></div>
        <div style={{ textAlign: "right", marginRight: "22px", marginBottom: "20px" }}>{date}</div>
        <span style={{ fontWeight: "600", fontSize: "30px" }}>HỢP ĐỒNG LAO ĐỘNG</span>
      </div>
      <div style={{ padding: "30px" }}>
        <span style={{ fontWeight: "600" }}>Bên A: </span> <br />
        <span> Công ty:</span> <span>Trung tâm chăm sóc sức khỏe và hỗ trợ cuộc sống T-Care.</span>
        <br />
        <span>Địa chỉ: </span>{" "}
        <span>28 Nguyễn Tri Phương, Phú Nhuận, Thành phố Huế, Thừa Thiên Huế.</span>
        <br />
        <span style={{ fontWeight: "600" }}>Đại diện bởi: </span>
        <br />
        <span>Ông/Bà: </span> <span>Nguyễn Ngọc Duy.</span>
        <br />
        <span>Sinh ngày: </span> <span>03-05-1996.</span>
        <br />
        <span>CMND/CCCD số: </span> <span>046096010215.</span> <span>Cấp ngày:</span>{" "}
        <span>13-03-2022.</span> <span>Tại:</span> <span>Tỉnh Thừa Thiên Huế.</span>
        <br />
        <span>Địa chỉ cư trú: </span>{" "}
        <span>Hải Bình, Thuận An, Thành phố Huế, Thừa Thiên Huế.</span> <br />
        <span>Chức vụ: Giám Đốc/ Tổng Giám Đốc.</span> <br />
        <div style={{ height: "10px" }}></div>
        <span style={{ fontWeight: "600" }}>Bên B: </span> <br />
        <span>Tên Ông/Bà: </span> <span>{contract?.user.name}.</span> <br />
        <span>Số điện thoại: </span> <span>{contract?.user.phone}.</span> <br />
        <span>CMND/CCCD số: </span> <span>{contract?.user.personId}.</span> <br />
        <span>Giới tính: </span> <span>{contract?.user.gender}.</span> <br />
        <div style={{ height: "10px" }}></div>
        <span style={{ fontWeight: "600" }}>Hộ lý được ký kết: </span> <br />
        <span>Tên hộ lý: </span> <span>{contract?.employee.name}.</span> <br />
        <span>Email: </span> <span>{contract?.employee.email}.</span> <br />
        <span>Số điện thoại: </span> <span>{contract?.employee.phone}.</span> <br />
        <span>Địa chỉ: </span> <span>{contract?.employee.location}.</span> <br />
        <span>CMND/CCCD số: </span> <span>{contract?.employee.personId}.</span> <br />
        <span>Giới tính: </span> <span>{contract?.employee.gender}.</span> <br />
        <br />
        <span>Thỏa thuận ký kết hợp đồng lao động và làm đúng những thỏa thuận sau đây: </span>
        <div style={{ height: "10px" }}></div>
        <span style={{ fontWeight: "600", fontSize: "20px" }}>
          ĐIỀU 1: CÔNG VIỆC, ĐỊA ĐIỂM VÀ THỜI GIAN LÀM VIỆC
        </span>{" "}
        <br /> <div style={{ height: "10px" }}></div>
        <span style={{ fontWeight: "600" }}>1.</span> <span> Công việc của hộ lý:</span>{" "}
        <span>{contract?.nameService}:</span> <br />
        {contract?.descriptionService.split(".").map(
          (sentence, index) =>
            sentence.length > 0 && (
              <span key={index} className="mx-3">
                + {sentence.trim()}
                <br />
              </span>
            )
        )}
        <span style={{ fontWeight: "600" }}>2.</span> <span> Thời gian làm việc: </span>{" "} <br />
        
         <span style={{ fontWeight: "600" }}>3.</span>{" "}
        <span> Địa điểm làm việc của hộ lý: {contract?.location.name}</span>{" "}
        <div style={{ height: "10px" }}></div>
        <span style={{ fontWeight: "600", fontSize: "20px" }}>ĐIỀU 2: THỜI HẠN HỢP ĐỒNG</span>{" "}
        <br />
        <span className="mx-3">+ Ngày bắt đầu: {starDate}</span>
        <br />
        <span className="mx-3">+ Ngày kết thúc: {endDate}</span>
        <br />
      </div>
    </>
  );
  return (
    <>
      <ContainerViewUser idUser={id} />
      <div style={{ padding: "30px 70px" }}>
        <h2>Danh sách hợp đồng</h2>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Thời gian ký </th>
              <th>Hiệu lực</th>
              <th>Tên khách hàng</th>
              <th>Tên hộ lý</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listContract?.map((e) => (
              <tr key={e.id}>
                <td>{e.indexContract}</td>
                <td>{e.createAt}</td>
                <td>
                  {e.timeStart} <br /> {e.timeEnd}
                </td>
                <td>{e.user.name} </td>
                <td>{e.employee.name} </td>
                <td>
                  {" "}
                  <div
                    onClick={() => handleDetail(e)}
                    style={{ color: "orangered", cursor: "pointer" }}
                  >
                    <ErrorOutlineIcon />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <LegalNotice />
      <ModalUnstyled
        paddingCheck={"20px"}
        check={checkModal}
        onClose={() => setCheckModal(false)}
        children={contractDetail}
        widthForm={"60%"}
        heightForm={"80%"}
      />
    </>
  );
}
