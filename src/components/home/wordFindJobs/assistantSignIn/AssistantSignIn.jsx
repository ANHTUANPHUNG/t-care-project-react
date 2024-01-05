import React from "react";
import "./AssistantSignIn.css";
import { FormSignIn } from "../../formSignIn/FormSignIn";
import { NavBarFindJob } from "../navBarFindJob/NavBarFindJob";

const formSignIn = (
  
  <div className="" style={{ display: "flex", margin:'5% 12% 0 12%' }}>
    <div style={{ width: "60%", padding: '5%', backgroundColor:'white' }}>
      <FormSignIn
        url={"/assistant/address"}
        termAgreed={
          'You must be 18 years or older to use T-Care.com. By clicking "Submit," you agree to our Terms of Use and Privacy Policy.'
        }
        marginContent={'0 0'}
        marginContainer={'0 0'}
        marginHeader={'Try T-Care.com today!'}
        color={"#213f5f"}
      />
    </div>
    <div style={{margin :'200px 30px',width:'40%'}}>
      
      <img style={{width:'100px', marginBottom:'20px'}} src="https://res.cloudinary.com/dw4xpd646/image/upload/v1704079025/Cloudinary-React/zflccxtn90ivd9y2oawy.png" alt="" />
      <p style={{fontSize:'30px'}}>Find great care jobs Now</p>
      <p>It only takes a few minutes!</p>
    </div>
  </div>
);

export function AssistantSignIn() {
  return (
    <>
      <NavBarFindJob children={formSignIn}/>
    </>
  );
}
