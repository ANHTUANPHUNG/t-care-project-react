import { ToastContainer } from 'react-toastify';
// import './App.css';
import { Home } from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import {  UserSignIn } from './components/userSignIn/UserSignIn';
import { UserAddress } from './components/userAddress/UserAddress';
import { UserService } from './components/userService/UserService';
import { UserJobType } from './components/userJobType/UserJobType';
import { DateSession } from './components/datesession/DateSession';
import { UserPriceOneHour } from './components/userPriceOneHour/UserPriceOneHour';
import { UserNeedCare } from './components/userNeedCare/UserNeedCare';
import { AssistantCaption } from './components/assistantCaption/AssistantCaption';
import { RenderListAssistant } from './components/renderListAssistant/RenderListAssistant';
import { FormUserLogIn } from './components/formLogInSignIn/FormUserLogIn';
import { SignInSelect } from './components/signInSelect/SignInSelect';
import { SignInUser } from './components/signInUser/SignInUser';
import { IndexUser } from './components/indexUser/IndexUser';



function App() {
  return (
    <>
      <ToastContainer autoClose={3000} theme='colored' />
      <Routes>
        <Route path='/' element={<IndexUser/>}></Route>
        <Route path='/login' element={<FormUserLogIn/>}></Route>
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
