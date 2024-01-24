import React, { useEffect, useState } from "react";
import "./Contract.css";
import { LegalNotice } from "../../carehub/LegalNotice";
import { ContainerViewUser } from "../containerViewUser/ContainerViewUser";
import { useParams } from "react-router-dom";
import axios from "axios";

export function Contract() {
  const { id } = useParams();
  const [listContract, setListContract] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/api/contracts/users/${id}`).then((res) => {
      const arrayList = res.data.content.map((e, i) => ({
        ...e,
        indexContract: i + 1,
      }));
      setListContract(arrayList);
    });
  }, [id]);
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
              <th>Hoạt động</th>
            </tr>
          </thead>
          <tbody>
            {listContract?.map((e) => (
              <tr key={e.id}>
                <td>{e.indexContract}</td>
                <td>{e.createAt}</td>
                <td>{e.timeStart} {" "} {e.timeEnd}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <LegalNotice />
    </>
  );
}
