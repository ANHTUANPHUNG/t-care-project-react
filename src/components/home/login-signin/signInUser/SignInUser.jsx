import React from "react";
import "./SignInUser.css";

import { FormSignIn } from "../../formSignIn/FormSignIn";
import UserServiceAPI from "../../../../service/userServiceAPI";
import { FrameLoginSignIn } from "../frameLoginSignIn/FrameLoginSignIn";
export function SignInUser() {
  const signInUser = (
    <div className="m5-0">
      <FormSignIn
        url={"/login"}
        checkRole={"ROLE_ADMIN"}
        api={UserServiceAPI.signInUserReturnLogin}
      />
    </div>
  );
  return <FrameLoginSignIn children={signInUser} />;
}
