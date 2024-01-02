
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
import { Profile } from './components/viewUser/profile/Profile';
import { AssistantSignIn } from './components/home/wordFindJobs/assistantSignIn/AssistantSignIn';
import { Address } from './components/home/wordFindJobs/address/Address';
import { Index } from './components/viewUser/index/Index';
import { DescriptionProcess } from './components/home/wordFindJobs/descriptionProcess/DescriptionProcess';
import { JobType } from './components/home/wordFindJobs/jobType/JobType';




function App() {
  
  return (
    <>
      <ToastContainer autoClose={3000} theme='colored' />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<LogIn/>}></Route>
        <Route path='/sign-in' element={<SignInSelect/>}></Route>
        <Route path='/sign-in/find-care' element={<SignInUser/>}></Route>
        <Route path='/assistant/sign-in' element={<AssistantSignIn/>}></Route>
        <Route path='/assistant/address' element={<Address/>}></Route>
        <Route path='/assistant/process' element={<DescriptionProcess/>}></Route>
        <Route path='/assistant/job-type' element={<JobType/>}></Route>
        <Route path='/user/signin' element={<UserSignIn/>}></Route>
        <Route path='/user/address' element={<UserAddress/>}></Route>
        <Route path='/user/service' element={<UserService/>}></Route>
        <Route path='/user/jobtype' element={<UserJobType/>}></Route>
        <Route path='/user/datesession' element={<DateSession/>}></Route>
        <Route path='/user/onehour' element={<UserPriceOneHour/>}></Route>
        <Route path='/user/needcare' element={<UserNeedCare/>}></Route>
        <Route path='/user/assistant-caption' element={<AssistantCaption/>}></Route>
        <Route path='/user/render-list-assistant' element={<RenderListAssistant/>}></Route>
        <Route path='/user/profile' element={<Profile/>}></Route>
        <Route path='/user/index' element={<Index/>}></Route>
    
      </Routes>
    </>
  );
}

export default App;
