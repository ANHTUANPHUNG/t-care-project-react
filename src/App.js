import { ToastContainer } from 'react-toastify';
// import './App.css';
import { Home } from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import { UserSignIn } from './components/home/wordFindCare/userSignIn/UserSignIn';
import { UserAddress } from './components/home/wordFindCare/userAddress/UserAddress';
import { UserService } from './components/home/wordFindCare/userService/UserService';
import { UserJobType } from './components/home/wordFindCare/userJobType/UserJobType';
import { DateSession } from './components/home/wordFindCare/datesession/DateSession';
import { UserPriceOneHour } from './components/home/wordFindCare/userPriceOneHour/UserPriceOneHour';
import { UserNeedCare } from './components/home/wordFindCare/userNeedCare/UserNeedCare';
import { AssistantCaption } from './components/home/wordFindCare/assistantCaption/AssistantCaption';
import { RenderListAssistant } from './components/home/wordFindCare/renderListAssistant/RenderListAssistant';
import { SignInSelect } from './components/home/login-signin/signInSelect/SignInSelect';
import { LogIn } from './components/home/login-signin/login/LogIn';
import { SignInUser } from './components/home/login-signin/signInUser/SignInUser';
import { Index } from './components/viewUser/index/Index';
import { Profile } from './components/viewUser/profile/Profile';




function App() {
  return (
    <>
      <ToastContainer autoClose={3000} theme='colored' />
      <Routes>
        <Route path='/' element={<Profile/>}></Route>
        <Route path='/login' element={<LogIn/>}></Route>
        <Route path='/sign-in' element={<SignInSelect/>}></Route>
        <Route path='/sign-in/find-care' element={<SignInUser/>}></Route>
        <Route path='/user/signin' element={<UserSignIn/>}></Route>
        <Route path='/user/address' element={<UserAddress/>}></Route>
        <Route path='/user/service' element={<UserService/>}></Route>
        <Route path='/user/jobtype' element={<UserJobType/>}></Route>
        <Route path='/user/datesession' element={<DateSession/>}></Route>
        <Route path='/user/onehour' element={<UserPriceOneHour/>}></Route>
        <Route path='/user/needcare' element={<UserNeedCare/>}></Route>
        <Route path='/user/assistant-caption' element={<AssistantCaption/>}></Route>
        <Route path='/user/render-list-assistant' element={<RenderListAssistant/>}></Route>
      </Routes>
    </>
  );
}

export default App;
