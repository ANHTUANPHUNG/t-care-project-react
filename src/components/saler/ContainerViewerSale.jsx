import React, { useEffect, useState } from "react";
import "./containerViewerSale.css";
import { FavoriteBorder } from "@mui/icons-material";
import { CreditScore } from "@mui/icons-material";
import { Home } from "@mui/icons-material";
import { NavLink, useParams } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import InterpreterModeRoundedIcon from '@mui/icons-material/InterpreterModeRounded';
import axios from "axios";
import LogoProject from "../logoProject/LogoProject";

export function ContainerViewSale({ idUser }) {
  const [user, setUser] = useState();
  useEffect(() => {
    const axiosData = async () => {
    //   axios.get(`http://localhost:8080/api/users/${idUser}`).then((res) => {
    //     setUser(res);
    //   });
    };
    axiosData();
  }, [idUser]);
  
  const {id} = useParams()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLogout = () => {
    localStorage.removeItem('user')
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div>
        <div className="view-user-header">
          <LogoProject />
          <div className="view-user-header-select">
            
            <NavLink className="view-user-header-select-nav"
              to={`/sale/${id}`}
            >
              <div className="view-user-header-select-nav-block">
                <AccountBoxRoundedIcon className="view-user-header-select-nav-block-icon" />
                <div className="view-user-header-select-nav-block-title">Khách hàng của tôi</div>
              </div>
            </NavLink>
            <NavLink className="view-user-header-select-nav"
              to={`/sale/sale-for-user/${id}`}
            >
              <div className="view-user-header-select-nav-block">
                <InterpreterModeRoundedIcon className="view-user-header-select-nav-block-icon" />
                <div className="view-user-header-select-nav-block-title">Khách hàng trực tuyến</div>
              </div>
            </NavLink>
            <NavLink className="view-user-header-select-nav" 
              to={`/sale/sale-contract/${id}`}
            >
              <div className="view-user-header-select-nav-block">
                <CreditScore className="view-user-header-select-nav-block-icon" />
                <div className="view-user-header-select-nav-block-title">Hợp đồng</div>
              </div>
            </NavLink>
            <NavLink className="view-user-header-select-nav"
              onClick={handleLogout}
            >
              <div className="view-user-header-select-nav-block">
                <LogoutIcon className="view-user-header-select-nav-block-icon" />
                <div className="view-user-header-select-nav-block-title">Đăng xuất</div>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col-12 step-view-user"></div>
        </div>
      </div>
    </>
  );
}
