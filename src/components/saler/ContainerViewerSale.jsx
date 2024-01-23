import React, { useEffect, useState } from "react";
import "./containerViewerSale.css";
import { FavoriteBorder } from "@mui/icons-material";
import { CreditScore } from "@mui/icons-material";
import { Home } from "@mui/icons-material";
import { NavLink, useParams } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
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
              to={"/home"}
            >
              <div className="view-user-header-select-nav-block">
                <Home className="view-user-header-select-nav-block-icon" />
                <div className="view-user-header-select-nav-block-title">Trang chủ</div>
              </div>
            </NavLink>
            <NavLink className="view-user-header-select-nav"
              to={`/saler/${id}`}
            >
              <div className="view-user-header-select-nav-block">
                <AccountBoxRoundedIcon className="view-user-header-select-nav-block-icon" />
                <div className="view-user-header-select-nav-block-title">Khách hàng của tôi</div>
              </div>
            </NavLink>
            <NavLink className="view-user-header-select-nav"
              to={`/salerForUser/${id}`}
            >
              <div className="view-user-header-select-nav-block">
                <InterpreterModeRoundedIcon className="view-user-header-select-nav-block-icon" />
                <div className="view-user-header-select-nav-block-title">Khách hàng trực tuyến</div>
              </div>
            </NavLink>
            {/* <NavLink className="view-user-header-select-nav">
              <div className="view-user-header-select-nav-block">
                <ListAlt className="view-user-header-select-nav-block-icon" />
                <div className="view-user-header-select-nav-block-title">Cart</div>
              </div>
            </NavLink> */}
            <NavLink className="view-user-header-select-nav" 
              to={`/sale-contract/${id}`}
            >
              <div className="view-user-header-select-nav-block">
                <CreditScore className="view-user-header-select-nav-block-icon" />
                <div className="view-user-header-select-nav-block-title">Hợp đồng</div>
              </div>
            </NavLink>
            <div className="view-user-header-select-profile">
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <Avatar>{user?.data.firstName && user?.data.firstName.charAt(0)}</Avatar>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <NavLink
                  style={{ textDecoration: "none", color: "orangered" }}
                  to={`/user/profile/${idUser}`}
                >
                  <MenuItem>Profile</MenuItem>
                </NavLink>
                <NavLink style={{ textDecoration: "none", color: "#212529" }} to={"/"}>
                  <MenuItem>Logout</MenuItem>
                </NavLink>
              </Menu>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 step-view-user"></div>
        </div>
      </div>
    </>
  );
}
