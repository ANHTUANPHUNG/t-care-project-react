import React, { useEffect, useState } from "react";
import "./ContainerDashboard.css";
import axios from "axios";
import LoadingCommon from "../common/LoadingCommon";
import { ContainerDashboard } from "./ContainerDashboard";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
export function AdminHome() {
  const [listEmployee, setListEmployee] = useState();
  const [listUser, setListUser] = useState();
  const [revenue, setRevenue] = useState();
  const [totalUser, setTotalUser] = useState();
  const [totalEmployee, setTotalEmployee] = useState();
  const [week1, setWeek1] = useState();
  const [week2, setWeek2] = useState();
  const [week3, setWeek3] = useState();
  const [week4, setWeek4] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [combinedChartData, setCombinedChartData] = useState([]);

  useEffect(() => {
    const day4 = {
      startDay: "2024-01-01",
      endDay: "2024-01-07",
    };
    const day1 = {
      startDay: "2024-01-08",
      endDay: "2024-01-14",
    };
    const day2 = {
      startDay: "2024-01-15",
      endDay: "2024-01-22",
    };
    const day3 = {
      startDay: "2024-01-23",
      endDay: "2024-01-28",
    };
    const day = {
      startDay: "",
      endDay: "",
    };
    let axiosData = async () => {
      const responseRevenue = await axios.post(
        "http://localhost:8080/api/admin/revenue/contract",
        day
      );
      setRevenue(responseRevenue.data);
      const [responseWeek1, responseWeek2, responseWeek3, responseWeek4] = await Promise.all([
        axios.post("http://localhost:8080/api/admin/revenue/contract", day1),
        axios.post("http://localhost:8080/api/admin/revenue/contract", day2),
        axios.post("http://localhost:8080/api/admin/revenue/contract", day3),
        axios.post("http://localhost:8080/api/admin/revenue/contract", day4),
      ]);
      
      setWeek1(responseWeek1.data);
      setWeek2(responseWeek2.data);
      setWeek3(responseWeek3.data);
      setWeek4(responseWeek4.data);
      console.log(responseWeek1.data);

      const responseUser = await axios.get("http://localhost:8080/api/users");
      setListUser(responseUser.data);
      setTotalUser(responseUser?.data ? responseUser.data.length : 0);

      const responseEmployee = await axios.get("http://localhost:8080/api/employees");
      setListEmployee(responseEmployee.data);
      setTotalEmployee(
        responseEmployee?.data.totalElements ? responseEmployee.data.totalElements : 0
      );

      setIsLoading(false);
    };

    axiosData();
  }, []);
  
  if (isLoading) {
    return <LoadingCommon />;
  }
  console.log(week1);
  return (
    <>
      <ContainerDashboard />
      <div className="container-dashboard-body">
        <h5>Trang quản lý</h5>
        <div
          className="row"
          style={{ justifyContent: "space-around", padding: "40px 0px", textAlign: "center" }}
        >
          <div
            className="col-2"
            style={{
              height: "130px",
              backgroundColor: "white",
              paddingTop: "3%",
              border: "1px solid #9f9b9b",
              borderRadius: "5px",
            }}
          >
            {revenue?.feeAmountRevenue + revenue?.feeContactRevenue} <div>Tổng doanh thu</div>
          </div>
          <div
            className="col-2"
            style={{
              height: "130px",
              backgroundColor: "white",
              paddingTop: "3%",
              border: "1px solid #9f9b9b",
              borderRadius: "5px",
            }}
          >
            <div>{revenue?.feeAmountRevenue}</div>
            <div>Doanh thu sản phẩm</div>
          </div>
          <div
            className="col-2"
            style={{
              height: "130px",
              backgroundColor: "white",
              paddingTop: "3%",
              border: "1px solid #9f9b9b",
              borderRadius: "5px",
            }}
          >
            <div>{revenue?.feeContactRevenue}</div>
            <div>Doanh thu khác</div>
          </div>
          <div
            className="col-2"
            style={{
              height: "130px",
              backgroundColor: "white",
              paddingTop: "3%",
              border: "1px solid #9f9b9b",
              borderRadius: "5px",
            }}
          >
            <div>{totalEmployee}</div>

            <div>Hộ lý</div>
          </div>
          <div
            className="col-2"
            style={{
              height: "130px",
              backgroundColor: "white",
              paddingTop: "3%",
              border: "1px solid #9f9b9b",
              borderRadius: "5px",
            }}
          >
            <div>{totalUser}</div>
            <div>Khách hàng</div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            margin: "30px 0",
            border: "1px solid #9f9b9b",
            borderRadius: "5px",
          }}
        >
          <div style={{ padding: "15px 30px", borderBottom: "1px solid rgb(207 207 207)" }}>
            <span>Biểu đồ </span>
          </div>
          <div>
            <Stack direction="row" sx={{ width: "100%" }}>
              <Box sx={{ flexGrow: 1 }}>
                {/* <SparkLineChart data={} height={100} /> */}
              </Box>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
}
