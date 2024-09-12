import React from 'react';
import './App.css';
import { LandingPage } from './Pages/LandingPage';
import { RegisterPage } from './Pages/RegisterPage';
import { LoginPage } from './Pages/LoginPage';
import { UserActivateVerifyLinkPage } from './Pages/UserActivateVerifyLinkPage';
import { ResetPassVerifyLinkPage } from './Pages/ResetPassVerifyLinkPage';
import { ResetPasswordPage } from './Pages/ResetPasswordPage';
import { NewPasswordSetPage } from './Pages/NewPasswordSetPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<LandingPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/useractivation" element={<UserActivateVerifyLinkPage />} />
      
      <Route path="/login" element={<LoginPage />} />

      <Route path="/resetpassword" element={<ResetPasswordPage />} />
      <Route path="/resetpasswordlink" element={<ResetPassVerifyLinkPage />} />
      <Route path="/newpassword" element={<NewPasswordSetPage />} />
    </Routes>
  )
}

export default App
