import React, { useEffect, useState } from "react";
import "./CartUser.css";
import { useParams } from "react-router-dom";
import { ContainerViewUser } from "../containerViewUser/ContainerViewUser";
import { LegalNotice } from "../../carehub/LegalNotice";
import axios from "axios";

import { RenderListCart } from "./RenderListCart";

const memberOfFamilyList = [
  { id: "MYPARENT", name: "Cha Mẹ của tôi" },
  { id: "MYSPOUSE", name: "Vợ/Chồng của tôi" },
  { id: "MYSELF", name: "Bản thân tôi" },
  { id: "MYGRANDPARENTS", name: "Ông bà của tôi" },
  { id: "OTHER", name: "Khác" },
];

const ageRender = [
  { id: "THIRTY", name: "30s" },
  { id: "FORTY", name: "40s" },
  { id: "FIFTY", name: "50s" },
  { id: "SIXTY", name: "60s" },
  { id: "SEVENTY", name: "70s" },
  { id: "EIGHTY", name: "80s" },
  { id: "NINETY", name: "90s" },
];
export function CartUser() {
  const { id } = useParams();
  const [listCart, setListCart] = useState();
  const [checkModal, setCheckModal] = useState();
  const [checkCallApiCart, setCheckCallApiCart] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/carts/user/${id}`);
        const updatedListCart = response.data.content.map((cartItem, index) => ({
          ...cartItem,
          indexCart: index + 1,
        }));
        setListCart(updatedListCart);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, checkModal, checkCallApiCart]);

  return (
    <>
      <ContainerViewUser idUser={id} />
      <div style={{ margin: "20px 30px" }}>
        <h2>Danh sách yêu cầu</h2>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Thời gian</th>
              <th>Buổi làm</th>
              <th>Tên trợ lý</th>
              <th>Ảnh</th>
              <th>Dịch vụ</th>
              <th>Kỹ năng </th>
              <th>Bổ sung</th>
              <th>Trạng thái </th>
              <th>Hoạt động</th>
            </tr>
          </thead>
          <tbody>
            <RenderListCart
              listCart={listCart}
              setCheckCallApiCart={setCheckCallApiCart}
              setCheckModal={setCheckModal}
              checkModal={checkModal}
              ageRender={ageRender}
              memberOfFamilyList={memberOfFamilyList}
            />
          </tbody>
        </table>
      </div>
      <LegalNotice />
    </>
  );
}
