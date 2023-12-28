import { ToastContainer } from 'react-toastify';
import './App.css';
import { Home } from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import {  UserSignIn } from './components/userSignIn/UserSignIn';
import { UserAddress } from './components/userAddress/UserAddress';
import { UserService } from './components/userService/UserService';
import { UserJobType } from './components/userJobType/UserJobType';
import { DateSession } from './components/datesession/DateSession';



function App() {
  return (
    <>
      <ToastContainer autoClose={3000} theme='colored' />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/user/signin' element={<UserSignIn/>}></Route>
        <Route path='/user/address' element={<UserAddress/>}></Route>
        <Route path='/user/service' element={<UserService/>}></Route>
        <Route path='/user/jobtype' element={<UserJobType/>}></Route>
        <Route path='/user/datesession' element={<DateSession/>}></Route>
      </Routes>
    </>
  );
}

export default App;
