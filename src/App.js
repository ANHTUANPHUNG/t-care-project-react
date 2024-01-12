import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Home } from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import { UserSignIn } from "./components/home/wordFindCare/userSignIn/UserSignIn";
import { UserAddress } from "./components/home/wordFindCare/userAddress/UserAddress";
import { UserService } from "./components/home/wordFindCare/userService/UserService";
import { DateSession } from "./components/home/wordFindCare/datesession/DateSession";
import { UserNeedCare } from "./components/home/wordFindCare/userNeedCare/UserNeedCare";
import { AssistantCaption } from "./components/home/wordFindCare/assistantCaption/AssistantCaption";
import { RenderListAssistant } from "./components/home/wordFindCare/renderListAssistant/RenderListAssistant";
import { SignInSelect } from "./components/home/login-signin/signInSelect/SignInSelect";
import { LogIn } from "./components/home/login-signin/login/LogIn";
import { SignInUser } from "./components/home/login-signin/signInUser/SignInUser";
import { Profile } from "./components/viewUser/profile/Profile";
import { AssistantSignIn } from "./components/home/wordFindJobs/assistantSignIn/AssistantSignIn";
import { Address } from "./components/home/wordFindJobs/address/Address";
import { Index } from "./components/viewUser/index/Index";
import { DescriptionProcess } from "./components/home/wordFindJobs/descriptionProcess/DescriptionProcess";
import { Availability } from "./components/home/wordFindJobs/availability/Availability";
import { Experience } from "./components/home/wordFindJobs/experience/Experience";
import { Bio } from "./components/home/wordFindJobs/bio/Bio";
import { Photo } from "./components/home/wordFindJobs/photo/Photo";
import { ForgotPassword } from "./components/home/login-signin/forgotPassword/ForgotPassword";
import LoadingPage from "./components/common/LoadingPage";
import SweetAlertEmployee from "./components/common/SweetAlertEmployee";

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} theme="colored" />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/sign-in" element={<SignInSelect />}></Route>
        <Route path="/sign-in/find-care" element={<SignInUser />}></Route>
        <Route path="/assistant/sign-in" element={<AssistantSignIn />}></Route>
        <Route path="/assistant/address/:id" element={<Address />}></Route>
        <Route
          path="/assistant/process/:id"
          element={<DescriptionProcess />}
        ></Route>
        <Route
          path="/assistant/availability/:id"
          element={<Availability />}
        ></Route>
        <Route
          path="/assistant/experience/:id"
          element={<Experience />}
        ></Route>
        <Route path="/assistant/bio/:id" element={<Bio />}></Route>
        <Route path="/assistant/photo/:id" element={<Photo />}></Route>
        <Route path="/user/signin" element={<UserSignIn />}></Route>
        <Route path="/user/address/:id" element={<UserAddress />}></Route>
        <Route path="/user/service/:id" element={<UserService />}></Route>
        <Route path="/user/date-session/:id" element={<DateSession />}></Route>
        <Route path="/user/need-care/:id" element={<UserNeedCare />}></Route>
        <Route
          path="/user/assistant-caption/:id"
          element={<AssistantCaption />}
        ></Route>
        <Route
          path="/user/render-list-assistant/:id"
          element={<RenderListAssistant />}
        ></Route>
        <Route path="/user/profile" element={<Profile />}></Route>
        <Route path="/user/index/:id" element={<Index />}></Route>
      </Routes>
    </>
  );
}


export default App;
