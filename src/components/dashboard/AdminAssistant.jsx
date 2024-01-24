import React, { useEffect, useState } from "react";
import { ContainerDashboard } from "./ContainerDashboard";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import axios from "axios";
import LoadingCommon from "../common/LoadingCommon";
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import { CartUser } from './../viewUser/cartUser/CartUser';

export function AdminAssistant() {
  const [listAssistantWaiting, setListAssistantWaiting] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const axiosData = async () => {
      const assistant = await axios.get("http://localhost:8080/api/admin/employees/waiting");
      const data = assistant.data.content;
      const listWithIndex = data.map((item, index) => ({ ...item, index: index + 1 }));
      setListAssistantWaiting(listWithIndex);
      setIsLoading(false);
    };
    axiosData();
  }, []);
  if (isLoading) {
    return <LoadingCommon />;
  }
  console.log(listAssistantWaiting);
  const handleDetail =()=>{}
  const handleDone=()=>{}
  const handleDelete =()=>{}
  return (
    <>
      <ContainerDashboard />
      <div style={{ padding: "30px 60px" }}>
        <span style={{ fontWeight: "600", fontSize: "25px" }}>Danh sách đăng ký hộ lý</span>
        <table style={{ marginTop: "20px" }} className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>STT</th>
              <th>Ngày</th>
              <th>Tên</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Hoạt động</th>
            </tr>
          </thead>
          <tbody>
            {listAssistantWaiting?.map((e) => (
              <tr key={e.id}>
                <td>{e.index}</td>
                <td>{e.createAt}</td>
                <td>
                  {e.lastName} {e.firstName}
                </td>
                <td>{e.email}</td>
                <td>{e.phoneNumber}</td>
                <td>
                  <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <div onClick={()=> handleDetail(e.id)} style={{ color: "#686868",cursor:"pointer" }}>
                      <ErrorOutlineIcon />
                    </div>
                    <div onClick={()=> handleDone(e.id)} style={{ color: "#206dff",cursor:"pointer" }}>
                      <LibraryAddCheckIcon />
                    </div>
                    <div onClick={()=> handleDelete(e.id)} style={{ color: "#ff4e4e",cursor:"pointer" }}>
                      <DeleteForeverIcon />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
