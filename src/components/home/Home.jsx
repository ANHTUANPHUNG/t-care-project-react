import React, { useEffect, useState } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import About from "./about/About";
import { Assistant } from "./assistant/Assistant";
import { CheckFind } from "./checkFind/CheckFind";
import LogoProject from "../logoProject/LogoProject";
import { CareHub } from "./../carehub/CareHub";
import axios from "axios";
export function Home() {
  const [rateTopThree, setRateTopThree] = useState();
  useEffect(() => {
    loadTopThreeRates();
  }, []);
  const loadTopThreeRates = async () => {
    const employeeList = await axios.get("http://localhost:8080/api/rates/top3");
    setRateTopThree(employeeList.data);
  };
  return (

    <>
      <div className="container-head">
        <LogoProject />
        <div id="logInHome">
          <NavLink className="navlink-no-underline" to="login">
            <Button className="buttonLogin" variant="contained">
              Đăng nhập
            </Button>
          </NavLink>
        </div>
      </div>
      <div style={{ backgroundColor: "#FFF1EB" }}>
        <div className="d-flex" style={{ backgroundColor: "white", borderBottom: "red" }}>
          <CheckFind />
          <div style={{ width: "45%" }}>
            <img
              src="https://res.cloudinary.com/dw4xpd646/image/upload/v1703748824/Cloudinary-React/gwsdfpleoznddaljvn9m.png"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <About />
        <div className="rate-average mt-3">
          <div className="rate-average-top">
            <p className="rate-average-content">
              {/* Access a network of background checked caregivers */}
              Hệ thống những người hỗ trợ chuyên nghiệp
            </p>
          </div>
          <div className="rate-average-bot">
            <p className="rate-average-rate">
              Với trung bình lượt đánh giá là 4.7 sao, chúng tôi sẽ giúp bạn tìm người hỗ trợ tốt nhất
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center ">
          <div className="row profile-assistant mb-5">
            {rateTopThree?.map((e) => (
              <div className="col-4" key={e?.employeeId}>
                <Assistant employee={e} />
              </div>
            ))}
            
          </div>
        </div>
      </div>
      <CareHub />
    </>
  );
}
