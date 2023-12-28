import React from "react";
import './Assistant.css';
import { Star } from "@mui/icons-material";


export function Assistant(){

    return(
        <div className="mx-2 border-profile " style={{backgroundColor:"white"}}>
              <div className="m-3 d-flex border-bottom pb-4">
                <img
                  src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                  alt=""
                  className="img-profile-assistant"
                />
                <div className="ms-3">
                  <h4>Dina 4</h4>
                  <h6>tHỪA tHIÊN HUẾ</h6>
                  <div className="d-flex">
                    <Star className="star"  />
                    <Star className="star" />
                    <Star className="star" />
                    <Star className="star" />
                    <Star className="star" />
                  </div>
                </div>
              </div>
              <div className="m-3">
                <p>
                  Dina was wonderful with my grandfather. She was patient, kind and caring. Very
                  respectful and always on time, she was a gem!
                </p>
              </div>
              <div className="m-3">
                <h6>Lori J.</h6>
              </div>
            </div>
    )
}