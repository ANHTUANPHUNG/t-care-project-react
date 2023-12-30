import React from "react";
import "./AssistantSignIn.css";
import LogoProject from "../../../logoProject/LogoProject";
import { LegalNotice } from "../../../carehub/LegalNotice";

export function AssistantSignIn() {
  return (
    <>
      <div
        className="background-image"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dw4xpd646/image/upload/v1703951657/Cloudinary-React/tadqa4zbzkd46bvbggxe.jpg)",
          height: "100vh", // Adjust the height as needed
          backgroundSize: "cover", // Adjust the background size property
          backgroundPosition: "center", // Adjust the background position property
        }}
      >
        <div style={{ padding: "5px 25px" }}>
          <LogoProject />
        </div>
      </div>

      <LegalNotice />
    </>
  );
}
