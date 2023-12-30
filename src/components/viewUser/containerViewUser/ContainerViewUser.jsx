import React, { useState } from "react";
import "./ContainerViewUser.css";
import LogoProject from "../../logoProject/LogoProject";
import { FavoriteBorder } from "@mui/icons-material";
import { CreditScore } from "@mui/icons-material";
import { ListAlt } from "@mui/icons-material";
import { PersonAddAlt } from "@mui/icons-material";
import { Home } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { SwipeableDrawer } from "@mui/material";
import Box from "@mui/material/Box";
import { ButtonForMe } from "../../ButtonForMe";

export function ContainerViewUser() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <div className="view-user-header">
          <LogoProject />
          <div className="view-user-header-select">
            <NavLink className="view-user-header-select-nav">
              <div className="view-user-header-select-nav-block">
                <Home className="view-user-header-select-nav-block-icon" />
                <div className="view-user-header-select-nav-block-title">Home</div>
              </div>
            </NavLink>
            <NavLink className="view-user-header-select-nav">
              <div className="view-user-header-select-nav-block">
                <FavoriteBorder className="view-user-header-select-nav-block-icon" />
                <div className="view-user-header-select-nav-block-title">Favorites</div>
              </div>
            </NavLink>
            <NavLink className="view-user-header-select-nav">
              <div className="view-user-header-select-nav-block">
                <PersonAddAlt className="view-user-header-select-nav-block-icon" />
                <div className="view-user-header-select-nav-block-title">Favorites</div>
              </div>
            </NavLink>
            <NavLink className="view-user-header-select-nav">
              <div className="view-user-header-select-nav-block">
                <ListAlt className="view-user-header-select-nav-block-icon" />
                <div className="view-user-header-select-nav-block-title">Cart</div>
              </div>
            </NavLink>
            <NavLink className="view-user-header-select-nav">
              <div className="view-user-header-select-nav-block">
                <CreditScore className="view-user-header-select-nav-block-icon" />
                <div className="view-user-header-select-nav-block-title">Contract</div>
              </div>
            </NavLink>
            <div className="view-user-header-select-profile" onClick={() => setIsOpen(true)}>
              <div className="view-user-header-select-profile-block">
                <div className="view-user-header-select-profile-block-name">AA</div>
              </div>
              <div className="view-user-header-select-profile-block-title">Me</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 step-view-user"></div>
        </div>
      </div>

      <SwipeableDrawer
        BackdropProps={{ invisible: true }}
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        sx={{
          "& .MuiDrawer-paper": {
            top: "80px",
            height: "170px",
            width: "17%",
            left: "80%",
            border: "2px solid #ebebeb",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "50px",
          }}
          role="presentation"
        >
          <div className="box-profile">a</div>
          <NavLink className="profile">
            <h3> Profile </h3>
          </NavLink>
          <NavLink className="logout" onClick={() => setIsOpen(false)}>
            <ButtonForMe value={80} childrenButton={"Log out"} />
          </NavLink>
        </Box>
      </SwipeableDrawer>
    </>
  );
}
