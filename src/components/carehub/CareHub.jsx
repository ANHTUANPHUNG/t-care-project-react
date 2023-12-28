import React from "react";
import YouTube from "@mui/icons-material/YouTube";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import './CareHub.css'

import Facebook from "@mui/icons-material/Facebook";
import { LegalNotice } from "./LegalNotice";
export function CareHub() {
  return (
    <div className="care-hub"  >
      <div className="care-hub-container"  >
        <div className="d-flex care-hub-header" >
          <div className="mx-2">
            <Facebook className="facebook icons"  />
          </div>
          <div className="mx-2">
            <Twitter className="twitter icons"  />
          </div>
          <div className="mx-2">
            <YouTube className="youtube icons"  />
          </div>
          <div className="mx-2">
            <Instagram className="instagram icons"  />
          </div>
        </div>
        <div
          className="row mt-5 pb-5 d-flex care-hub-body"
        >
          <div className="col-4">
            <h6>About T-Care</h6>
            <p className="m-0">About us</p>
            <p className="m-0">Careers</p>
            <p className="m-0">Terms of use</p>
            <p className="m-0">Privacy policy</p>
          </div>
          <div className="col-4">
            <h6>Get help</h6>
            <p className="m-0">Safety</p>
            <p className="m-0">Articles & Guides</p>
            <p className="m-0">Help Center</p>
          </div>
          <div className="col-4">
            <h6>Discover</h6>
            <p className="m-0">HomePay℠ - nanny tax help</p>
            <p className="m-0">List your business</p>
            <p className="m-0">Care for business</p>
            <p className="m-0">Become an affiliate</p>
            <p className="m-0">Care directory</p>
          </div>
        </div>

        <LegalNotice/>
      </div>
    </div>
  );
}
